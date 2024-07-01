import React, { useEffect, useState } from 'react';
import {
    Box,
    Button,
    Container,
    Grid,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    tableCellClasses,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import { KeyboardArrowDown, MoreVert, GroupAdd } from '@mui/icons-material';

import Navigation from '../../Components/Navigation';
import Capitalgainbg from '../../images/Taxes/capitalgainbg.png';

import TaxAbleIcome from './TaxAbleIcome';
import { TxYearsDropdown } from '../../Components/DropdownMenus';
import { REACT_APP_BASE_URL } from './../../config';
import { Link, NavLink } from 'react-router-dom';

const yearslist = ['2018', '2022', '2019', '2023'];

const capitalGainArray = [
    {
        type: 'Crypto-to-crypto gains',
        shortTerm: 'PKR 0.00',
        longTerm: 'PKR 0.00',
    },
    {
        type: 'Other capital gains',
        shortTerm: 'PKR 0.00',
        longTerm: '+PKR47,142.78',
    },
    {
        type: 'Total capital gains',
        shortTerm: 'PKR 0.00',
        longTerm: '+PKR47,142.78',
    },
];

const Taxes = () => {
    const theme = useTheme();
    const matches = useMediaQuery('(min-width:600px)');

    const [taxYears, setTaxYears] = useState([]);
    const [txCount, setTxCount] = useState(0);
    const [txSent, setTxSent] = useState(0);
    const [txRecieved, setTxRecieved] = useState(0);

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        fontFamily: 'Gmarket',
        fontSize: matches ? '14px' : '8px',
        padding: '1.2rem',

        color: `${theme.palette.text.white}`,
        fontWeight: 500,
        [`&.${tableCellClasses.head}`]: {
            border: 0,
        },
        [`&.${tableCellClasses.body}`]: {
            border: 0,
        },
    }));

    useEffect(() => {
        const fetchTaxesYears = async () => {
            try {
                console.log('UseEffect Runned');
                const refreshToken = localStorage.getItem('persistMe')
                    ? JSON.parse(localStorage.getItem('persistMe'))
                    : null;
                // console.log(activePage, pageLimit);
                let response = await axios.get(`${REACT_APP_BASE_URL}/api/data/getTaxesYears`, {
                    headers: {
                        Authorization: refreshToken?.user?.token,
                    },
                });
                console.log('response', response?.data);
                setTaxYears(response.data?.data);
                setTxCount(response.data?.length);
                setTxSent(response.data?.sent);
                setTxRecieved(response.data?.recieved);

                let infoResp = await axios.get(`${REACT_APP_BASE_URL}/api/data/getTaxesUserInfo`, {
                    headers: {
                        Authorization: refreshToken?.user?.token,
                    },
                });
                let data = infoResp?.data.data;
                let totalCapitalGainsOverall = 0;
                let totalGrossEarningOverall = 0;
                let totalTaxOverall = 0;

                if (data) {
                    console.log('userTaxInfo data', data);

                    for (let i = 0; i < data.length; i++) {
                        const exchange = data[i].name;

                        for (let j = 0; j < data[i].tax.length; j++) {
                            // Inner loop
                            const taxData = data[i].tax[j];
                            // console.log('taxData', taxData.totalCapitalGains);
                            totalCapitalGainsOverall += taxData.totalCapitalGains;
                            totalGrossEarningOverall += taxData.totalGrossEarning;
                            totalTaxOverall += taxData.totalTax;

                            // console.log(`Exchange: ${exchange}, Tax Data: `, taxData);
                        }
                    }
                    console.log(
                        'totalCapitalGainsOverall',
                        totalCapitalGainsOverall && totalCapitalGainsOverall,
                    );
                    console.log(
                        'totalGrossEarningOverall',
                        totalGrossEarningOverall && totalGrossEarningOverall,
                    );
                    console.log('totalTaxOverall', totalTaxOverall && totalTaxOverall);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchTaxesYears();
    }, []);

    return (
        <Box mx={{ lg: 7, xs: 2, md: 4, sm: 3 }}>
            <Navigation />

            <Box
                display={'flex'}
                alignItems={'center'}
                justifyContent={'space-between'}
                flexDirection={{ xs: 'column', md: 'row' }}
                mb={20}
            >
                <Stack sx={{ display: { xs: 'none', md: 'flex' } }} direction={'row'} gap={2}>
                    <TxYearsDropdown years={taxYears && taxYears} />
                </Stack>

                <Box
                    display="flex"
                    alignItems="center"
                    gap={2}
                    marginTop={{ xs: '20px', md: '0px' }}
                >
                    <Button
                        variant="btn4"
                        sx={{ minHeight: { xs: '30px', md: '48px' }, minWidth: '0px' }}
                    >
                        <MoreVert sx={{ color: '#000' }} />
                    </Button>
                    <NavLink to='/tax-pros'>
                    <Button
                        variant="btn1"
                        sx={{ p: { xs: '8px', md: 1.5 }, fontSize: { xs: '9px', md: '16px' } }}
                        >
                        <GroupAdd sx={{ mr: 1 }} />
                        Add tax Professional
                    </Button>
                        </NavLink>
                </Box>
            </Box>
            <Grid container sx={{ mt: 2, justifyContent: 'space-between' }}>
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            boxShadow: '0px 0px 60px 0px rgba(0, 0, 0, 0.05)',
                            background: 'white',
                            borderRadius: '15px',
                            border: '2px solid #E7F4FF',
                        }}
                    >
                        <Box
                            sx={{
                                backgroundImage: `url(${Capitalgainbg})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: '100% 100%',
                                backgroundPosition: 'center',
                                borderTopRightRadius: '15px',
                                borderTopLeftRadius: '15px',
                                py: 3,
                            }}
                        >
                            <Typography
                                fontSize={{ xs: '7px', md: '14px' }}
                                fontFamily={'Poppins'}
                                color={theme.palette.text.white}
                                px={2}
                            >
                                Capital gains
                            </Typography>
                        </Box>

                        <TableContainer>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell align="left" sx={{ color: 'black' }}>
                                            Gain Type
                                        </StyledTableCell>
                                        <StyledTableCell align="right" sx={{ color: 'black' }}>
                                            Short Term 1 year
                                        </StyledTableCell>
                                        <StyledTableCell align="right" sx={{ color: 'black' }}>
                                            Long Term all years back
                                        </StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {capitalGainArray.map((item, i) => (
                                        <TableRow
                                            key={i}
                                            sx={{
                                                '&:last-child td, &:last-child th': {
                                                    border: 0,
                                                },
                                            }}
                                        >
                                            <StyledTableCell
                                                component="th"
                                                scope="row"
                                                sx={{ color: 'black' }}
                                            >
                                                {item.type}
                                            </StyledTableCell>
                                            <StyledTableCell align="right" sx={{ color: 'black' }}>
                                                {item.shortTerm}
                                            </StyledTableCell>
                                            <StyledTableCell align="right" sx={{ color: 'black' }}>
                                                {item.longTerm}
                                            </StyledTableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </Grid>
                <Grid item xs={12} md={5}>
                    <Stack
                        direction={'row'}
                        alignItems="center"
                        justifyContent="space-between"
                        mb={2}
                        mt={{ xs: 1, md: 0 }}
                    >
                        <Box>
                            <Typography
                                fontFamily={'Gmarket'}
                                fontSize={{ xs: '8px', md: '14px' }}
                                fontWeight={600}
                                color={theme.palette.text.darkblue}
                            >
                                Free tax plan
                            </Typography>
                            <Typography
                                fontFamily={'Gmarket'}
                                fontSize={{ xs: '8px', md: '14px' }}
                                color={theme.palette.text.lightbrown}
                            >
                                Up to 25 transactions
                            </Typography>
                        </Box>
                        <Link to="/tax-plans">
                            <Button variant="btn4" sx={{ fontSize: { xs: '9px', md: '16px' } }}>
                                Upgrade plan
                            </Button>
                        </Link>
                    </Stack>

                    <Box
                        sx={{
                            boxShadow: '0px 0px 60px 0px rgba(0, 0, 0, 0.05)',
                            background: 'white',
                            borderRadius: '15px',
                            border: '2px solid #E7F4FF',
                        }}
                    >
                        <Box
                            sx={{
                                backgroundImage: `url(${Capitalgainbg})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: '100% 100%',
                                backgroundPosition: 'center',
                                borderTopRightRadius: '15px',
                                borderTopLeftRadius: '15px',
                                py: 3,
                            }}
                        >
                            <Typography
                                fontSize={{ xs: '7px', md: '14px' }}
                                fontFamily={'Gmarket'}
                                color={theme.palette.text.white}
                                px={2}
                            >
                                Transaction history
                            </Typography>
                        </Box>
                        <Typography
                            fontFamily={'Gmarket'}
                            fontSize="15px"
                            color={theme.palette.text.black}
                            fontWeight={600}
                            textAlign="center"
                            mt={6}
                            mb={2}
                        >
                            Transactions {txCount && txCount}
                        </Typography>
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            gap={3}
                            mb={3}
                        >
                            <Button
                                variant="btn1"
                                sx={{
                                    fontSize: { xs: '7px', md: '12px' },
                                    px: 4,
                                    py: 1,
                                }}
                            >
                                {txSent && txSent} sent
                            </Button>
                            <Button
                                variant="btn1"
                                sx={{
                                    fontSize: { xs: '7px', md: '12px' },
                                    px: 4,
                                    py: 1,
                                }}
                            >
                                {txRecieved && txRecieved} received
                            </Button>
                            {/* <Button
                                variant="btn1"
                                sx={{
                                    fontSize: { xs: '7px', md: '12px' },
                                    px: 4,
                                    py: 1,
                                }}
                            >
                                1 need review
                            </Button> */}
                        </Box>
                    </Box>
                </Grid>
            </Grid>

            {/* New component   'TaxAbleIcome' */}
            <TaxAbleIcome />
        </Box>
    );
};

export default Taxes;
