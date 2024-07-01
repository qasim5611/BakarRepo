import React, { useContext, useEffect, useState } from 'react';
import {
    Avatar,
    Box,
    Button,
    Container,
    Grid,
    Skeleton,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material';
import sample from '../../images/sample.svg';

import { getExchanges, syncWallet } from './Index';
import { setWalletData } from '../../redux/slices/userWalletData';
import { useDispatch, useSelector } from 'react-redux';
import useMakeToast from '../../hooks/makeToast';
import { AddWalletDialog } from '../../Components/DropdownMenus';
import axios from 'axios';
import { REACT_APP_BASE_URL } from '../../config';
import moment from 'moment/moment';

export default function Walletslist() {
    const [syncState, setSyncState] = useState(false);
    const [addWalletState, setAddWalletState] = useState(false);
    const [walletData, setwalletData] = useState(null);
    const [walletAssets, setWalletAssets] = useState(null);
    const [profile, setProfile] = useState();
    const [activeExchangeAssets, setActiveExchangeAssets] = useState(null);
    const loading = useSelector((state) => state.commonSlice.loading);

    // ==========syncExchange===============
    const handleSyncSingleExchangeClick = async () => {
        try {
            if (!activeExchangeAssets) {
                return;
            }
            setWalletAssets(null);
            const localStorageData = JSON.parse(localStorage.getItem('persistMe'));
            const response = await fetch(
                `${REACT_APP_BASE_URL}/api/data/getExchangeAssets?exchange=${activeExchangeAssets.name}`,
                {
                    method: 'GET',
                    headers: {
                        Authorization: localStorageData?.user?.token,
                    },
                },
            );
            const result = await response.json();
            setWalletAssets(result.data);
            // console.log(result, 'result single exchange assets');
        } catch (error) {
            console.log('Error syncing exchanges:', error.message);
        }
    };
    useEffect(() => {
        handleSyncSingleExchangeClick();
    }, [activeExchangeAssets?.name]);

    const handleSyncExchangeClick = async () => {
        try {
            setwalletData(null);
            const result = await getExchanges();
            if (result) {
                setwalletData(result.data);
                setActiveExchangeAssets(result.data[0]);
            } else {
                console.log('Wallet Exchanges:', result);
            }
        } catch (error) {
            console.error('Error syncing exchanges:', error.message);
        }
    };

    // =================profile====================
    const fetchProfile = async () => {
        try {
            const refreshToken = localStorage.getItem('persistMe')
                ? JSON.parse(localStorage.getItem('persistMe'))
                : null;
            let response = await axios.get(`${REACT_APP_BASE_URL}/api/data/getPortfolio`, {
                headers: {
                    Authorization: refreshToken?.user?.token,
                },
            });
            setProfile(response.data?.data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchProfile();
        handleSyncExchangeClick();
    }, []);

    // ===================sync wallet exchange time convert=======================
    function getLastSyncDate(savedDate) {
        const diff = moment(new Date()).diff(moment(savedDate));

        // Get the duration in days, hours, or minutes
        const duration = moment.duration(diff);
        // console.log(duration, 'duration');
        // Get the difference in days, hours, or minutes
        const days = duration.days();
        const hours = duration.hours();
        const minutes = duration.minutes();

        // Construct the output string based on the difference
        let output;
        if (days > 0) {
            output = days + ' day' + (days > 1 ? 's' : '') + ' ago';
        } else if (hours > 0) {
            output = hours + ' hour' + (hours > 1 ? 's' : '') + ' ago';
        } else if (minutes > 0) {
            output = minutes + ' minute' + (minutes > 1 ? 's' : '') + ' ago';
        } else {
            output = 'Just now';
        }
        return output;
    }

    return (
        <Box>
            <AddWalletDialog open={addWalletState} setOpen={setAddWalletState} />
            {walletData?.length === 0 ? (
                <Box width={{ xs: '95%', sm: '80%', md: '50%' }} mx="auto" textAlign={'center'}>
                    <Box
                        component={'img'}
                        src={sample}
                        alt=""
                        sx={{ width: { xs: '80%', sm: 'max-content' } }}
                    />
                    <Typography
                        sx={{
                            fontSize: { xs: '14px', sm: '18px', md: '22px' },
                            fontWeight: 900,
                        }}
                    >
                        No wallets found
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: { xs: '12px', sm: '13.5px', md: '15px' },
                            fontWeight: 400,
                            my: { xs: 2, sm: 3 },
                        }}
                    >
                        We don’t have performance history for your account. Add all your wallets to
                        accurately track your portfolio.
                    </Typography>
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
                </Box>
            ) : (
                <Box>
                    <Stack direction="row" gap={5} pt={0}>
                        <Button
                            disabled={syncState}
                            variant="btn2"
                            sx={{
                                fontFamily: 'Gmarket',
                                fontStyle: 'normal',
                                fontWeight: '600',
                                fontSize: '16px',
                                lineHeight: '24px',
                                p: { xs: '5px 15px', sm: '10px 20px' },
                            }}
                            onClick={() => syncWallet(null, setSyncState)}
                        >
                            Sync Wallet
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
                            onClick={() => setAddWalletState(true)}
                        >
                            Add Wallet
                        </Button>
                    </Stack>
                    <Box
                        sx={{
                            my: { xs: 3, md: 5 },
                            px: { xs: 3, sm: 5, md: 7 },
                        }}
                    >
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            flexWrap="wrap"
                            gap={2}
                            mb={5}
                        >
                            <Box
                                sx={{
                                    fontFamily: 'Gmarket',
                                    fontStyle: 'normal',
                                    fontWeight: '600',
                                    fontSize: { xs: '14px', sm: '17px' },
                                    lineHeight: '18px',
                                    color: ' var(--Text-Black, #333)',
                                }}
                            >
                                Your Exchanges
                            </Box>
                            <Box
                                sx={{
                                    fontFamily: 'Gmarket',
                                    fontStyle: 'normal',
                                    fontWeight: '600',
                                    fontSize: '15px',
                                    lineHeight: '18px',
                                    color: '#333',
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                {profile?.balance}
                            </Box>
                        </Stack>
                        <Grid container spacing={{ xs: 2, sm: 4 }}>
                            <Grid item xs={12} md={4}>
                                <Box
                                    sx={{
                                        background: 'whitesmoke',
                                        borderRadius: '10px',
                                        p: { xs: 2, sm: 3 },
                                        height: '100%',
                                    }}
                                >
                                    {walletData?.length > 0
                                        ? walletData.map((item, i) => {
                                              return (
                                                  <Stack
                                                      direction="row"
                                                      key={i}
                                                      sx={{
                                                          justifyContent: 'space-between',
                                                          alignItems: 'center',
                                                          py: { xs: 1, md: 1.5 },
                                                          cursor: 'pointer',
                                                          borderBottom:
                                                              i !== walletData?.length - 1 &&
                                                              '1px solid #fff',
                                                      }}
                                                      onClick={() => setActiveExchangeAssets(item)}
                                                  >
                                                      <Stack
                                                          direction="row"
                                                          sx={{
                                                              alignItems: 'center',
                                                              gap: { xs: 1, sm: 1.5 },
                                                          }}
                                                      >
                                                          <Box>
                                                              <img
                                                                  style={{
                                                                      width: '25px',
                                                                  }}
                                                                  src={require(`../../images/exchangeImgs/${item.name}.png`)}
                                                                  alt=""
                                                              />
                                                          </Box>
                                                          <Box
                                                              sx={{
                                                                  fontFamily: 'Gmarket',
                                                                  fontStyle: 'normal',
                                                                  fontWeight: '400',
                                                                  fontSize: '12px',
                                                                  color: ' var(--Text-Black, #333)',
                                                              }}
                                                          >
                                                              <Box
                                                                  sx={{
                                                                      fontWeight: '600',
                                                                      fontSize: '14px',
                                                                  }}
                                                              >
                                                                  {item.name}
                                                              </Box>
                                                              <Box>
                                                                  {item?.allAssets?.length} assets
                                                              </Box>
                                                          </Box>
                                                      </Stack>
                                                      <Box
                                                          sx={{
                                                              fontFamily: 'Gmarket',
                                                              fontStyle: 'normal',
                                                              fontWeight: '400',
                                                              fontSize: '14px',
                                                              color: ' var(--Text-Black, #333)',
                                                          }}
                                                      >
                                                          <Box
                                                              sx={{
                                                                  fontSize: '14px',
                                                                  fontWeight: '600',
                                                              }}
                                                          >
                                                              {item?.balance
                                                                  ? (+item?.balance)?.toFixed(4)
                                                                  : item?.balance}
                                                          </Box>
                                                          <Box
                                                              sx={{
                                                                  fontSize: {
                                                                      xs: '9px',
                                                                      sm: '10px',
                                                                  },
                                                              }}
                                                          >
                                                              {getLastSyncDate(item?.lastSync)}
                                                          </Box>
                                                      </Box>
                                                  </Stack>
                                              );
                                          })
                                        : [1, 2, 3, 4, 5, 6].map((item, i) => (
                                              <Box
                                                  key={i}
                                                  sx={{
                                                      width: '100%',
                                                      display: 'flex',
                                                      justifyContent: 'space-between',
                                                      alignItems: 'center',
                                                      py: { xs: 1, md: 1.5 },
                                                      borderBottom:
                                                          i !== walletData?.length - 1 &&
                                                          '1px solid #fff',
                                                  }}
                                              >
                                                  <Box
                                                      sx={{
                                                          display: 'flex',
                                                          gap: { xs: 1, sm: 2 },
                                                          alignItems: 'center',
                                                      }}
                                                  >
                                                      <Skeleton
                                                          variant="circular"
                                                          sx={{ width: '40px', height: '40px' }}
                                                      />
                                                      <Box>
                                                          <Skeleton sx={{ width: '50px', my: 0 }} />
                                                          <Skeleton sx={{ width: '50px', my: 0 }} />
                                                      </Box>
                                                  </Box>
                                                  <Box>
                                                      <Skeleton sx={{ width: '50px', my: 0 }} />
                                                      <Skeleton sx={{ width: '50px', my: 0 }} />
                                                  </Box>
                                              </Box>
                                          ))}
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={8}>
                                <Box
                                    sx={{
                                        background: 'whitesmoke',
                                        borderRadius: '10px',
                                        p: { xs: 2, sm: 3 },
                                        height: '100%',
                                    }}
                                >
                                    <Stack
                                        direction={{ xs: 'column', sm: 'row' }}
                                        sx={{
                                            justifyContent: 'space-between',
                                            alignItems: { xs: 'left', sm: 'center' },
                                            gap: { xs: 1, sm: 2, md: 3 },
                                        }}
                                    >
                                        <Box>
                                            <Box
                                                sx={{
                                                    fontWeight: '600',
                                                    fontFamily: 'Gmarket',
                                                    fontSize: {
                                                        xs: '12px',
                                                        sm: '15px',
                                                        md: '18px',
                                                    },
                                                }}
                                            >
                                                {activeExchangeAssets?.name ? (
                                                    activeExchangeAssets?.name
                                                ) : (
                                                    <Skeleton sx={{ width: '100px' }} />
                                                )}
                                            </Box>
                                            <Box
                                                sx={{
                                                    fontWeight: '600',
                                                    fontFamily: 'Gmarket',
                                                    fontSize: {
                                                        xs: '14px',
                                                        sm: '18px',
                                                        md: '22px',
                                                    },
                                                }}
                                            >
                                                {activeExchangeAssets?.balance ? (
                                                    `USDT ${
                                                        activeExchangeAssets?.balance > 0
                                                            ? activeExchangeAssets?.balance
                                                            : 0
                                                    }`
                                                ) : (
                                                    <Skeleton sx={{ width: '200px' }} />
                                                )}
                                            </Box>
                                        </Box>
                                        <Button
                                            disabled={syncState}
                                            variant="btn2"
                                            sx={{
                                                fontFamily: 'Gmarket',
                                                fontStyle: 'normal',
                                                fontWeight: '600',
                                                fontSize: { xs: '12px', sm: '14px' },
                                                p: { xs: '5px 15px', sm: '7px 20px' },
                                                height: 'max-content',
                                                width: 'max-content',
                                            }}
                                            onClick={() =>
                                                syncWallet(activeExchangeAssets, setSyncState)
                                            }
                                        >
                                            {!activeExchangeAssets?.name
                                                ? 'loading...'
                                                : `Sync ${activeExchangeAssets?.name}`}
                                        </Button>
                                    </Stack>

                                    <TableContainer>
                                        <Table sx={{ minWidth: 500 }} aria-label="simple table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>Name</TableCell>
                                                    <TableCell align="right">Holdings</TableCell>
                                                    <TableCell align="right">
                                                        Transactions
                                                    </TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {walletAssets?.length > 0 ? (
                                                    walletAssets.map((item, i) => (
                                                        <TableRow
                                                            key={i}
                                                            sx={{
                                                                '&:last-child td, &:last-child th':
                                                                    {
                                                                        border: 0,
                                                                    },
                                                            }}
                                                        >
                                                            <TableCell component="th" scope="row">
                                                                <Stack direction={'row'} gap={2}>
                                                                    <img
                                                                        style={{
                                                                            width: '25px',
                                                                        }}
                                                                        src={`https://s2.coinmarketcap.com/static/img/coins/32x32/${item?.coinId}.png`}
                                                                        alt=""
                                                                    />
                                                                    <Box>{item.symbol}</Box>
                                                                </Stack>
                                                            </TableCell>
                                                            <TableCell align="right">
                                                                <Box>
                                                                    <Box>{item?.amount}</Box>
                                                                </Box>
                                                            </TableCell>
                                                            <TableCell align="right">
                                                                {item.totalTransaction} Transactions
                                                            </TableCell>
                                                        </TableRow>
                                                    ))
                                                ) : +walletAssets?.length !== 0 ? (
                                                    ['1', '2', '3', '4'].map((item, i) => (
                                                        <TableRow>
                                                            <TableCell
                                                                sx={{
                                                                    display: 'flex',
                                                                    gap: 2,
                                                                    alignItems: 'center',
                                                                }}
                                                            >
                                                                <Skeleton
                                                                    variant="circular"
                                                                    sx={{
                                                                        width: '40px',
                                                                        height: '40px',
                                                                    }}
                                                                />
                                                                <Skeleton
                                                                    sx={{
                                                                        width: '50px',
                                                                    }}
                                                                />
                                                            </TableCell>
                                                            <TableCell>
                                                                <Skeleton />
                                                            </TableCell>
                                                            <TableCell>
                                                                <Skeleton />
                                                            </TableCell>
                                                        </TableRow>
                                                    ))
                                                ) : (
                                                    <TableRow>
                                                        <TableCell
                                                            align="center"
                                                            colSpan={3}
                                                            sx={{
                                                                py: { xs: 5, ms: 10 },
                                                                border: 'none',
                                                                fontWeight: '600',
                                                                color: 'gray',
                                                                fontSize: {
                                                                    xs: '16px',
                                                                    sm: '22px',
                                                                },
                                                            }}
                                                        >
                                                            No Assets Found
                                                        </TableCell>
                                                    </TableRow>
                                                )}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            )}
        </Box>
    );
}
