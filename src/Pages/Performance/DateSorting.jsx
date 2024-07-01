import {
    Typography,
    Button,
    Stack,
    ButtonGroup,
    Box,
    Grid,
    Divider,
    Skeleton,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

// import pastdayBg from '../../images/pastday_bg.png';
// import netFiatBg from '../../images/netFiat_bg.png';
// import costBasisBg from '../../images/costBasis_bg.png';
// import returnBg from '../../images/return_bg.png';
// import portfolio from '../../images/portfolio_img.png';
import { UnrealizedPerformanceDropdown } from '../../Components/DropdownMenus';

import { DateRange, Share } from '@mui/icons-material';

// import costbasis from '../../images/costbasis.png';
// import upicon from '../../images/upicon.png';
// import note from '../../images/note.png';
// import dollar from '../../images/dollar.png';
import { useEffect, useState } from 'react';
import subscribe from '../../images/subscribe.png';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { REACT_APP_BASE_URL } from '../../config';

const performances = ['Unrealized Performance', 'Total Performance'];

const DateSorting = () => {
    const [time, settime] = useState(0);
    const [balanceDetails, setBalanceDetails] = useState(null);
    const navigate = useNavigate();

    const fetchData = async () => {
        try {
            setBalanceDetails(null);
            const refreshToken = localStorage.getItem('persistMe')
                ? JSON.parse(localStorage.getItem('persistMe'))
                : null;
            let response = await axios.get(`${REACT_APP_BASE_URL}/api/data/getPortfolio`, {
                headers: {
                    Authorization: refreshToken?.user?.token,
                },
            });
            console.log(response.data, '🚀 Success: successfully fetched');
            setBalanceDetails([
                {
                    title: 'Unrealized Return',
                    price: response?.data?.data?.unrealizedReturn?.toFixed(4),
                },
                {
                    title: 'Net Cost',
                    price: response?.data?.data?.netCost?.toFixed(4),
                },
                {
                    title: 'Net Proceeds',
                    price: response?.data?.data?.netProceeds?.toFixed(4),
                },
                {
                    title: 'Gains',
                    price: response?.data?.data?.gains?.toFixed(4),
                },
                {
                    title: 'balance',
                    price: response?.data?.data?.balance?.toFixed(4),
                },
            ]);
        } catch (error) {
            console.log(error, '❌Error: in fetchData profile balences');
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    const handleSubscriptionPlans = () => {
        navigate('/subscription');
    };
    return (
        <>
            <Stack
                direction={{ xs: 'column', md: 'row' }}
                justifyContent={{ xs: 'center', md: 'space-between' }}
                alignItems={'center'}
            >
                <Typography
                    my={2}
                    color="text.darkblue"
                    sx={{
                        fontFamily: 'Gmarket',
                        fontWeight: 800,
                        fontSize: { xs: '1.687rem', md: '1.875rem' },
                        textTransform: 'uppercase',
                    }}
                >
                    Performance
                </Typography>

                <Stack
                    width={{ xs: '100%', md: 'unset' }}
                    direction={'row'}
                    alignItems={'center'}
                    justifyContent={'space-around'}
                    gap={0.5}
                >
                    <ButtonGroup
                        sx={{
                            width: { xs: '140px', sm: 'unset' },
                            height: { xs: '26px', sm: 'unset' },
                        }}
                    >
                        <Button
                            sx={{ fontSize: { xs: '7.4px', sm: '13px' }, color: '#0B7BC3' }}
                            endIcon={<DateRange />}
                        >
                            Date
                        </Button>
                        <Button sx={{ fontSize: { xs: '7.4px', sm: '13px' }, color: '#0B7BC3' }}>
                            All Time <ArrowDropDownIcon />
                        </Button>
                        <Button
                            sx={{ fontSize: { xs: '7.4px', sm: '13px' }, color: '#0B7BC3' }}
                            endIcon={<Share />}
                        >
                            Share
                        </Button>
                    </ButtonGroup>

                    <UnrealizedPerformanceDropdown performances={performances} />
                </Stack>
            </Stack>

            <Grid
                container
                sx={{ margin: '65px 0px', flexWrap: 'wrap' }}
                direction={'row'}
                align="center"
                justifyContent={'space-evenly'}
            >
                {balanceDetails ? (
                    balanceDetails?.map((item, i) => {
                        return (
                            <Grid sx={{ my: '1em' }} key={i} item lg={2.2} md={2.5} sm={6} xs={12}>
                                <Box
                                    sx={{
                                        background: 'white',
                                        border: '1px solid #D8F0FF',
                                        borderRadius: '15px',
                                        display: 'flex',
                                        gap: '15px',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: 'fit-content',
                                        px: 3,
                                        py: 2,
                                    }}
                                >
                                    {/* <img src={item.icon} alt="icon" width="56px"></img> */}

                                    <Typography
                                        fontWeight={500}
                                        color={'#A3AED0'}
                                        sx={{ fontSize: { md: '14px', xs: '10px' } }}
                                        display={'flex'}
                                        flexDirection={'column'}
                                        gap="5px"
                                    >
                                        {item.title}
                                        <Typography
                                            color={'#2B3674'}
                                            fontSize={'20px'}
                                            fontWeight={700}
                                        >
                                            ${item.price}
                                        </Typography>
                                    </Typography>
                                </Box>
                            </Grid>
                        );
                    })
                ) : (
                    <>
                        {[1, 2, 3, 4, 5].map((i) => (
                            <Grid sx={{ my: '1em' }} key={i} item lg={2.2} md={2.5} sm={6} xs={12}>
                                <Box
                                    sx={{
                                        background: 'white',
                                        border: '1px solid #D8F0FF',
                                        borderRadius: '15px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: 'fit-content',
                                        px: 3,
                                        py: 2,
                                    }}
                                >
                                    <Skeleton width={100} height={20} />
                                    <Skeleton width={70} height={40} />
                                </Box>
                            </Grid>
                        ))}
                    </>
                )}
            </Grid>

            <Box
                sx={{
                    borderRadius: '15px',
                    boxShadow: '0px 0px 60px 0px rgba(0, 0, 0, 0.05)',
                    py: 5,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Stack
                    justifyContent="space-between"
                    alignItems="center"
                    direction="row"
                    flexWrap={'wrap'}
                    px={2}
                    py={2}
                    gap={2}
                    sx={{ width: '100%' }}
                >
                    <Typography
                        sx={{
                            fontFamily: 'Gmarket',
                            fontStyle: 'normal',
                            fontWeight: '700',
                            fontSize: { xs: '18px', lg: '32px', sm: '22px', md: '30px' },
                            lineHeight: '24px',
                            color: '#0B7BC4',
                        }}
                    >
                        Your Portfolio
                    </Typography>
                    <Stack
                        direction="row"
                        gap={1}
                        alignItems="center"
                        fontSize={'12px'}
                        overflow={'auto'}
                    >
                        {['1D', '1W', '1M', '3M', '1Y', 'All'].map((val, i) => (
                            <Button
                                key={i}
                                variant="text"
                                sx={{
                                    color: time === i ? '#fff' : '#0B7BC4',
                                    minWidth: { xs: '40px', md: '55px' },
                                    height: '35px',
                                    borderRadius: '10px',
                                    background:
                                        time === i
                                            ? 'linear-gradient(180deg, #0B7BC4 0%, #5BACDE 100%)'
                                            : '',
                                }}
                                onClick={() => settime(i)}
                            >
                                {val}
                            </Button>
                        ))}
                    </Stack>
                </Stack>
                <Divider sx={{ color: '#D8EDFF', width: '100%' }}></Divider>

                <Stack justifyContent={'center'} gap={'10px'} alignItems={'center'} py={8}>
                    <img src={subscribe} alt="subscribe" width={'39px'}></img>
                    <Typography
                        fontSize={{ md: '24px', xs: '14px', sm: '18px' }}
                        color={'#0B7BC3'}
                        fontWeight={700}
                    >
                        Subscription is required
                    </Typography>
                    <Typography
                        color={'var(--Text-Black, #333)'}
                        fontSize={'12px'}
                        textAlign={'center'}
                        py={2}
                    >
                        Select a higher portfolio plan in order to access investment performance{' '}
                        <br></br>
                        for timeframes other than all.
                    </Typography>
                    <Button
                        onClick={handleSubscriptionPlans}
                        sx={{
                            background: 'linear-gradient(180deg, #0B7BC4 0%, #5BACDE 100%)',
                            color: 'white',
                            borderRadius: '6px',
                            my: 3,
                            py: 1,
                        }}
                    >
                        Choose Subscription Plan
                    </Button>
                </Stack>
            </Box>
        </>
    );
};

export default DateSorting;
