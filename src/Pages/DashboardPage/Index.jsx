import { Box, Button, Container, Grid, Menu, MenuItem, Stack, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import Profile from './Profile';
import YourAssets from './YourAssets';
import Navigation from '../../Components/Navigation';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import { AddWalletDialog } from '../../Components/DropdownMenus';
import axios from 'axios';
import { REACT_APP_BASE_URL } from '../../config';
import { useNavigate } from 'react-router';

import Skeleton from '@mui/material/Skeleton';
import moment from 'moment/moment';

export default function Index() {
    const [addWalletState, setAddWalletState] = useState(false);
    const [graphData, setGraphData] = useState(null);
    const [assets, setAssets] = useState(null);
    const [cryptoTaxes, setCryptoTaxes] = useState(null);
    const [transactions, setTransactions] = useState(null);
    const navigate = useNavigate();

    // crypto taxes
    useEffect(() => {
        const cryptotaxes = async () => {
            try {
                // setLoader(true);
                const refreshToken = localStorage.getItem('persistMe')
                    ? JSON.parse(localStorage.getItem('persistMe'))
                    : null;
                let response = await axios.get(`${REACT_APP_BASE_URL}/api/data/getMyExchangeTax`, {
                    headers: {
                        Authorization: refreshToken?.user?.token,
                    },
                });
                setCryptoTaxes(response.data?.data);
                // setLoader(false);
            } catch (error) {
                // setLoader(false);
                console.log(error?.response?.data);
            }
        };
        cryptotaxes();
    }, []);
    // transaction
    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                // setLoader(true);
                const localStorageData = JSON.parse(localStorage.getItem('persistMe'));
                const response = await fetch(
                    `${REACT_APP_BASE_URL}/api/data/getTransactions?limit=${4}&page=${1}`,
                    {
                        method: 'GET',
                        headers: {
                            Authorization: localStorageData?.user?.token,
                        },
                    },
                );

                const result = await response.json();
                setTransactions(result?.data?.transactions);
                // console.log(result?.data, '-=-=-=-result');
                // setLoader(false);
            } catch (error) {
                // setLoader(false);
                console.error('Error fetching Transactions Dashboard:', error?.response?.data);
            }
        };

        fetchTransactions();
    }, []);
    // portfolio
    const fetchData = async () => {
        try {
            const refreshToken = localStorage.getItem('persistMe')
                ? JSON.parse(localStorage.getItem('persistMe'))
                : null;
            console.log(`${REACT_APP_BASE_URL}`);

            let response = await axios.get(`${REACT_APP_BASE_URL}/api/data/getPortfolio`, {
                headers: {
                    Authorization: refreshToken?.user?.token,
                },
            });
            setAssets(response.data?.data?.assets);
        } catch (error) {
            console.log(error, 'error in fetch profile');
        }
    };
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <Box mx={{ lg: 7, xs: 2, md: 4, sm: 3 }}>
            <Navigation />
            <AddWalletDialog open={addWalletState} setOpen={setAddWalletState} />

            <Box
                sx={{
                    borderRadius: '15px',
                    background: 'white',
                    boxSizing: 'border-box',
                    boxShadow: '0px 0px 60px 0px rgba(0, 0, 0, 0.05)',
                    my: 6,
                }}
            >
                <Grid container spacing={{ xs: 3, md: 5 }} px={3} py={3}>
                    <Grid item xs={12} lg={8.5} md={8}>
                        <Profile />
                    </Grid>
                    <Grid item xs={12} lg={3.5} md={4}>
                        <Box>
                            <Stack direction="row" justifyContent="center" gap={5} py={5}>
                                <Button
                                    variant="btn1"
                                    sx={{
                                        fontFamily: 'Poppins',
                                        fontStyle: 'normal',
                                        fontWeight: '600',
                                        fontSize: {
                                            lg: '14px',
                                            xs: '12px',
                                            sm: '13px',
                                            md: '13px',
                                        },
                                        lineHeight: '24px',
                                    }}
                                    onClick={() => setAddWalletState(true)}
                                >
                                    Add Wallet
                                </Button>
                                <Button
                                    variant="btn1"
                                    sx={{
                                        fontFamily: 'Poppins',
                                        fontStyle: 'normal',
                                        fontWeight: '600',
                                        fontSize: {
                                            lg: '14px',
                                            xs: '12px',
                                            sm: '13px',
                                            md: '13px',
                                        },
                                        lineHeight: '24px',
                                    }}
                                >
                                    Tax Center
                                </Button>
                            </Stack>
                            <Box
                                sx={{
                                    background: 'white',
                                    boxShadow: '0px 0px 25px 0px rgba(0, 0, 0, 0.05)',
                                    borderRadius: '15px',
                                    py: 5,
                                    px: { xs: 4, sm: 6, md: 4 },
                                }}
                            >
                                <Stack direction="row" justifyContent="space-between">
                                    <Typography
                                        fontFamily={'Gmarket'}
                                        sx={{
                                            fontStyle: 'normal',
                                            fontWeight: '800',
                                            fontSize: '12px',
                                            lineHeight: '22px',
                                            textAlign: 'center',
                                            textTransform: 'uppercase',
                                            color: '#333',
                                        }}
                                    >
                                        Crypto taxes
                                    </Typography>
                                    <Typography
                                        fontFamily={'Gmarket'}
                                        sx={{
                                            width: 'max-content',

                                            fontStyle: 'normal',
                                            fontWeight: '500',
                                            fontSize: '10px',
                                            lineHeight: '16px',
                                            textAlign: 'center',
                                            color: '#333',
                                            borderBottom: '1px solid #FFFFFF',
                                            cursor: 'pointer',
                                        }}
                                        onClick={() => {
                                            navigate('/taxes');
                                        }}
                                    >
                                        See details
                                    </Typography>
                                </Stack>
                                <Stack direction="row" justifyContent="space-between" mt={5}>
                                    <Typography
                                        fontFamily={'Gmarket'}
                                        sx={{
                                            fontStyle: 'normal',
                                            fontWeight: '500',
                                            fontSize: '12px',
                                            lineHeight: '16px',
                                            color: '#333',
                                        }}
                                    >
                                        Tax year
                                    </Typography>
                                    <Typography
                                        fontFamily={'Gmarket'}
                                        sx={{
                                            fontStyle: 'normal',
                                            fontWeight: '500',
                                            fontSize: '12px',
                                            lineHeight: '16px',
                                            color: '#333',
                                        }}
                                    >
                                        Cap.gains
                                    </Typography>
                                    <Typography
                                        fontFamily={'Gmarket'}
                                        sx={{
                                            fontStyle: 'normal',
                                            fontWeight: '500',
                                            fontSize: '12px',
                                            lineHeight: '16px',
                                            color: '#333',
                                        }}
                                    >
                                        Tax
                                    </Typography>
                                </Stack>

                                {cryptoTaxes?.length > 0 ? (
                                    cryptoTaxes.map((data, index) => (
                                        <Stack
                                            key={index}
                                            direction="row"
                                            justifyContent="space-between"
                                            mt={{ xs: 3, sm: 4, md: 5 }}
                                        >
                                            <Typography
                                                fontFamily={'Gmarket'}
                                                sx={{
                                                    fontStyle: 'normal',
                                                    fontWeight: '400',
                                                    fontSize: '10px',
                                                    lineHeight: '16px',
                                                    color: '#333',
                                                    textAlign: 'center !important',
                                                }}
                                            >
                                                {data?.year}
                                            </Typography>
                                            <Typography
                                                fontFamily={'Gmarket'}
                                                sx={{
                                                    fontStyle: 'normal',
                                                    fontWeight: '400',
                                                    fontSize: '10px',
                                                    lineHeight: '16px',
                                                    color: '#333',
                                                }}
                                            >
                                                $ {data?.totalCapitalGains}
                                            </Typography>
                                            <Typography
                                                fontFamily={'Gmarket'}
                                                sx={{
                                                    fontStyle: 'normal',
                                                    fontWeight: '700',
                                                    fontSize: '10px',
                                                    lineHeight: '16px',
                                                    color: '#333',
                                                }}
                                            >
                                                $ {data?.totalTax.toFixed(2)}
                                            </Typography>
                                        </Stack>
                                    ))
                                ) : cryptoTaxes?.length === 0 ? (
                                    <>
                                        <Stack
                                            direction="row"
                                            justifyContent="space-between"
                                            mt={{ xs: 3, sm: 4, md: 5 }}
                                        >
                                            <Typography
                                                fontFamily={'Gmarket'}
                                                sx={{
                                                    fontStyle: 'normal',
                                                    fontWeight: '400',
                                                    fontSize: '10px',
                                                    lineHeight: '16px',
                                                    color: '#333',
                                                    textAlign: 'center !important',
                                                }}
                                            >
                                                {moment().subtract(1, 'year').format('YYYY')}
                                            </Typography>
                                            <Typography
                                                fontFamily={'Gmarket'}
                                                sx={{
                                                    fontStyle: 'normal',
                                                    fontWeight: '400',
                                                    fontSize: '10px',
                                                    lineHeight: '16px',
                                                    color: '#333',
                                                }}
                                            >
                                                $ 0
                                            </Typography>
                                            <Typography
                                                fontFamily={'Gmarket'}
                                                sx={{
                                                    fontStyle: 'normal',
                                                    fontWeight: '700',
                                                    fontSize: '10px',
                                                    lineHeight: '16px',
                                                    color: '#333',
                                                }}
                                            >
                                                $ 0
                                            </Typography>
                                        </Stack>
                                        <Stack
                                            direction="row"
                                            justifyContent="space-between"
                                            mt={{ xs: 3, sm: 4, md: 5 }}
                                        >
                                            <Typography
                                                fontFamily={'Gmarket'}
                                                sx={{
                                                    fontStyle: 'normal',
                                                    fontWeight: '400',
                                                    fontSize: '10px',
                                                    lineHeight: '16px',
                                                    color: '#333',
                                                    textAlign: 'center !important',
                                                }}
                                            >
                                                {moment().subtract(2, 'year').format('YYYY')}
                                            </Typography>
                                            <Typography
                                                fontFamily={'Gmarket'}
                                                sx={{
                                                    fontStyle: 'normal',
                                                    fontWeight: '400',
                                                    fontSize: '10px',
                                                    lineHeight: '16px',
                                                    color: '#333',
                                                }}
                                            >
                                                $ 0
                                            </Typography>
                                            <Typography
                                                fontFamily={'Gmarket'}
                                                sx={{
                                                    fontStyle: 'normal',
                                                    fontWeight: '700',
                                                    fontSize: '10px',
                                                    lineHeight: '16px',
                                                    color: '#333',
                                                }}
                                            >
                                                $ 0
                                            </Typography>
                                        </Stack>
                                    </>
                                ) : (
                                    [1, 2, 3].map((data, i) => (
                                        <Stack
                                            direction={'row'}
                                            justifyContent={'space-between'}
                                            key={i}
                                            mt={{ xs: 2, sm: 3 }}
                                        >
                                            <Skeleton width="50px" height="20px" />
                                            <Skeleton width="50px" height="20px" />
                                            <Skeleton width="50px" height="20px" />
                                        </Stack>
                                    ))
                                )}
                            </Box>

                            {/* -----recent transactoins-------- */}
                            <Box
                                sx={{
                                    my: 3,
                                    background: 'white',
                                    boxShadow: '0px 0px 25px 0px rgba(0, 0, 0, 0.05)',
                                    borderRadius: '15px',
                                    py: 1,
                                    px: { xs: 4, sm: 6, md: 4 },
                                }}
                            >
                                <Stack direction="row" justifyContent="space-between" py={3}>
                                    <Typography
                                        fontFamily={'Gmarket'}
                                        sx={{
                                            fontStyle: 'normal',
                                            fontWeight: '800',
                                            fontSize: '11px',
                                            lineHeight: '22px',
                                            textAlign: 'center',
                                            textTransform: 'uppercase',
                                            color: '#333',
                                        }}
                                    >
                                        Recent Transactions
                                    </Typography>
                                    <Typography
                                        fontFamily={'Gmarket'}
                                        sx={{
                                            width: 'max-content',

                                            fontStyle: 'normal',
                                            fontWeight: '500',
                                            fontSize: '10px',
                                            lineHeight: '16px',
                                            textAlign: 'center',
                                            color: '#333',
                                            borderBottom: '1px solid #FFFFFF',
                                            cursor: 'pointer',
                                        }}
                                        onClick={() => {
                                            navigate('/transactions');
                                        }}
                                    >
                                        See details
                                    </Typography>
                                </Stack>
                                {transactions?.length > 0 ? (
                                    transactions.map((item, i) => (
                                        <Box
                                            key={i}
                                            display={'flex'}
                                            justifyContent={'space-between'}
                                            alignItems={'center'}
                                        >
                                            <Box
                                                display={'flex'}
                                                gap={1}
                                                my={1}
                                                alignItems={'center'}
                                            >
                                                <Box
                                                    sx={{
                                                        background: '#D8EDFF',
                                                        width: '24px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        px: 3,
                                                        py: 1,
                                                        borderRadius: '3px',
                                                    }}
                                                >
                                                    {['in', 'deposit', 'buy'].includes(
                                                        item.txType?.toLowerCase(),
                                                    ) ? (
                                                        <ArrowDownwardIcon />
                                                    ) : ['out', 'withdrawal', 'sell'].includes(
                                                          item.txType?.toLowerCase(),
                                                      ) ? (
                                                        <ArrowUpwardIcon />
                                                    ) : (
                                                        <CompareArrowsIcon />
                                                    )}
                                                </Box>
                                                <Stack>
                                                    <Typography
                                                        fontFamily={'Gmarket'}
                                                        fontSize={'10px'}
                                                        fontWeight={500}
                                                    >
                                                        {item?.txType}
                                                    </Typography>
                                                    <Typography
                                                        fontFamily={'Gmarket'}
                                                        fontSize={'8px'}
                                                        fontWeight={300}
                                                    >
                                                        {item?.completeTime}
                                                    </Typography>
                                                </Stack>
                                            </Box>
                                            <Stack>
                                                <Typography
                                                    fontFamily={'Gmarket'}
                                                    fontSize={'10px'}
                                                    fontWeight={700}
                                                >
                                                    {['in', 'deposit', 'buy'].includes(
                                                        item.txType?.toLowerCase(),
                                                    )
                                                        ? item?.inAmount
                                                        : ['out', 'withdrawal', 'sell'].includes(
                                                              item.txType?.toLowerCase(),
                                                          )
                                                        ? item?.outAmount
                                                        : item?.outAmount}
                                                </Typography>
                                                <Typography
                                                    fontSize={'8px'}
                                                    fontStyle={'normal'}
                                                    fontWeight={300}
                                                    fontFamily={'Gmarket'}
                                                >
                                                    ${' '}
                                                    {['in', 'deposit', 'buy'].includes(
                                                        item.txType?.toLowerCase(),
                                                    )
                                                        ? item?.inAmountInUSD
                                                        : ['out', 'withdrawal', 'sell'].includes(
                                                              item.txType?.toLowerCase(),
                                                          )
                                                        ? item?.outAmountInUSD
                                                        : item?.outAmountInUSD}
                                                </Typography>
                                            </Stack>
                                        </Box>
                                    ))
                                ) : transactions?.length === 0 ? (
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            height: '200px',
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                textAlign: 'center',
                                                fontSize: { xs: '14px', sm: '16px', md: '18px' },
                                                fontFamily: 'Gmarket',
                                                fontWeight: 900,
                                            }}
                                        >
                                            No Transactions
                                        </Typography>
                                        <Typography
                                            sx={{
                                                textAlign: 'center',
                                                fontSize: { xs: '12px', sm: '14px' },
                                                fontFamily: 'Gmarket',
                                                fontWeight: 400,
                                            }}
                                        >
                                            Add wallet for transactions
                                        </Typography>
                                    </Box>
                                ) : (
                                    [1, 2, 3, 4].map((data, i) => (
                                        <Stack
                                            direction={'row'}
                                            justifyContent={'space-between'}
                                            alignItems={'center'}
                                            key={i}
                                        >
                                            <Stack direction={'row'} gap={1} alignItems={'center'}>
                                                <Skeleton width="45px" height="65px" />
                                                <Box>
                                                    <Skeleton width="100px" height="17px" />
                                                    <Skeleton width="130px" height="17px" />
                                                </Box>
                                            </Stack>
                                            <Box sx={{ textAlign: 'right' }}>
                                                <Skeleton width="40px" height="20px" />
                                                <Skeleton width="35px" height="20px" />
                                            </Box>
                                        </Stack>
                                    ))
                                )}
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box
                sx={{
                    boxShadow: '0px 0px 60px 0px rgba(0, 0, 0, 0.05)',
                    background: 'white',
                    borderRadius: '15px',
                    width: '100%',
                    py: { xs: 5, md: 5 },
                    px: { xs: 2, sm: 5, md: 3 },
                    my: { xs: 5, md: 8 },
                }}
            >
                <YourAssets data={assets} />
            </Box>
        </Box>
    );
}
