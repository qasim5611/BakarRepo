import { Box, Grid, Stack, Typography, useTheme } from '@mui/material';
import React from 'react';
import usermapbg from '../../../images/usermapbg.png';
import ariana from '../../../images/ariana.png';
import forth from '../../../images/forth.png';
import third from '../../../images/third.png';
import secondcard from '../../../images/secondcard.png';

const Usercointracker = () => {
    const theme = useTheme();
    return (
        <Box my={5}>
            <Box mb={'100px'}>
                <Typography
                    textAlign={'center'}
                    fontSize={{ xs: '20px', sm: '23px', md: '30px' }}
                    fontWeight={700}
                    textTransform={'capitalize'}
                    color={'#0B7BC3'}
                    pb={1}
                    fontFamily={'Gmarket'}
                >
                    User Love CoinTracker
                </Typography>
                <Typography
                    textAlign={'center'}
                    fontSize={{ md: '16px', xs: '12px', sm: '14px' }}
                    fontWeight={700}
                    textTransform={'capitalize'}
                    color={'var(--Text-Black, #333)'}
                    fontFamily={'Gmarket'}
                >
                    See what cryptocurrency users around the world are saying about us
                </Typography>
            </Box>

            {/* ==============cards=================== */}
            <Grid
                container
                sx={{
                    background: `url(${usermapbg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100% 100%',
                }}
                justifyContent={'center'}
                alignItems={'center'}
                spacing={5}
            >
                <Grid item lg={4} md={5.5} xs={10} sm={8}>
                    <Stack spacing={10}>
                        <Box
                            sx={{
                                background: 'white',
                                borderRadius: '12px',
                                boxShadow: '0px 18.075px 162.675px 0px rgba(184, 215, 235, 0.20);',
                                padding: '20px',
                                width: 'fit-content',
                            }}
                        >
                            <Box
                                sx={{
                                    width: '100%',
                                    [theme.breakpoints.up('sm')]: {
                                        width: '420px',
                                    },
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: { md: '14px', sm: '13px', xs: '12px' },
                                        fontFamily: 'Gmarket',
                                        fontWeight: 500,
                                        color: '#888',
                                        lineHeight: '24px',
                                    }}
                                >
                                    For those who asked about my crypto taxes - ended up going w
                                    @cointracker_io. Best UX I found after looking at a number of
                                    options! (FWIW I m not an investor in the company, nor is anyone
                                    paying me).
                                </Typography>
                            </Box>
                            <Box
                                display="flex"
                                flexDirection="row"
                                alignItems="center"
                                gap={'10px'}
                                pt={'35px'}
                            >
                                <img src={ariana} alt={'ing'} width={'50px'} />
                                <Stack>
                                    <Typography
                                        fontSize={'12px'}
                                        fontFamily={'Gmarket'}
                                        fontWeight={700}
                                    >
                                        Arianna Simpson
                                    </Typography>

                                    <Typography
                                        fontSize={'12px'}
                                        color={'#888'}
                                        fontFamily={'Gmarket Sans TTF'}
                                        fontWeight={300}
                                    >
                                        @Arianna Simpson
                                    </Typography>
                                </Stack>
                            </Box>
                        </Box>
                        <Box pl={{ md: 13, xs: 0, sm: 0 }}>
                            <Box
                                sx={{
                                    background: 'white',
                                    borderRadius: '12px',
                                    boxShadow:
                                        '0px 18.075px 162.675px 0px rgba(184, 215, 235, 0.20);',
                                    padding: '20px',
                                    width: 'fit-content',
                                }}
                            >
                                <Box
                                    sx={{
                                        width: '100%',
                                        [theme.breakpoints.up('sm')]: {
                                            width: '318.75px',
                                        },
                                    }}
                                >
                                    <Typography
                                        fontFamily={'Gmarket'}
                                        sx={{
                                            fontSize: { md: '10px', sm: '11px', xs: '10px' },
                                            fontWeight: 500,
                                            color: '#888',
                                            lineHeight: '24px',
                                        }}
                                    >
                                        For those who asked about my crypto taxes - ended up going w
                                        @cointracker_io. Best UX I found after looking at a number
                                        of options! (FWIW I am not an investor in the company, nor is
                                        anyone paying me).
                                    </Typography>
                                </Box>
                                <Box
                                    display="flex"
                                    flexDirection="row"
                                    alignItems="center"
                                    gap={'10px'}
                                    pt={'35px'}
                                >
                                    <img src={secondcard} alt={'ing'} width={'37px'} />
                                    <Stack>
                                        <Typography
                                            fontSize={'9px'}
                                            fontFamily={'Gmarket'}
                                            fontWeight={700}
                                        >
                                            Arianna Simpson
                                        </Typography>

                                        <Typography
                                            fontSize={'7px'}
                                            color={'#888'}
                                            fontFamily={'Gmarket'}
                                            fontWeight={300}
                                        >
                                            @Arianna Simpson
                                        </Typography>
                                    </Stack>
                                </Box>
                            </Box>
                        </Box>
                    </Stack>
                </Grid>
                {/* ==================== */}
                <Grid item lg={4} md={5.5} xs={10} sm={8}>
                    <Stack spacing={10} pb={{ md: 3, xs: 0, sm: 0 }}>
                        <Box pl={{ md: 10, xs: 0, sm: 0 }}>
                            <Box
                                sx={{
                                    background: 'white',
                                    borderRadius: '12px',
                                    boxShadow:
                                        '0px 18.075px 162.675px 0px rgba(184, 215, 235, 0.20);',
                                    padding: '20px',
                                    width: 'fit-content',
                                }}
                            >
                                <Box
                                    sx={{
                                        width: '100%',
                                        [theme.breakpoints.up('sm')]: {
                                            width: '318.75px',
                                        },
                                    }}
                                >
                                    <Typography
                                        fontFamily={'Gmarket'}
                                        sx={{
                                            fontSize: { md: '10px', sm: '11px', xs: '10px' },

                                            fontWeight: 500,
                                            color: '#888',
                                            lineHeight: '24px',
                                        }}
                                    >
                                        For those who asked about my crypto taxes - ended up going w
                                        @cointracker_io. Best UX I found after looking at a number
                                        of options! (FWIW I am not an investor in the company, nor is
                                        anyone paying me).
                                    </Typography>
                                </Box>
                                <Box
                                    display="flex"
                                    flexDirection="row"
                                    alignItems="center"
                                    gap={'10px'}
                                    pt={'35px'}
                                >
                                    <img src={third} alt={'ing'} width={'37px'} />
                                    <Stack>
                                        <Typography
                                            fontSize={'9px'}
                                            fontFamily={'Gmarket'}
                                            fontWeight={700}
                                        >
                                            Arianna Simpson
                                        </Typography>

                                        <Typography
                                            fontSize={'7px'}
                                            color={'#888'}
                                            fontFamily={'Gmarket'}
                                            fontWeight={300}
                                        >
                                            @Arianna Simpson
                                        </Typography>
                                    </Stack>
                                </Box>
                            </Box>
                        </Box>

                        <Box pb={{ md: 15, xs: 0, sm: 0 }} pr={{ md: 10, xs: 0, sm: 0 }}>
                            <Box
                                sx={{
                                    background: 'white',
                                    borderRadius: '12px',
                                    boxShadow:
                                        '0px 18.075px 162.675px 0px rgba(184, 215, 235, 0.20);',
                                    padding: '20px',
                                    width: 'fit-content',
                                }}
                            >
                                <Box
                                    sx={{
                                        width: '100%',
                                        [theme.breakpoints.up('sm')]: {
                                            width: '318.75px',
                                        },
                                    }}
                                >
                                    <Typography
                                        fontFamily={'Gmarket'}
                                        sx={{
                                            fontSize: { md: '10px', sm: '11px', xs: '10px' },

                                            fontWeight: 500,
                                            color: '#888',
                                            lineHeight: '24px',
                                        }}
                                    >
                                        For those who asked about my crypto taxes - ended up going w
                                        @cointracker_io. Best UX I found after looking at a number
                                        of options! (FWIW I am not an investor in the company, nor is
                                        anyone paying me).
                                    </Typography>
                                </Box>
                                <Box
                                    display="flex"
                                    flexDirection="row"
                                    alignItems="center"
                                    gap={'10px'}
                                    pt={'35px'}
                                >
                                    <img src={forth} alt={'ing'} width={'37px'} />
                                    <Stack>
                                        <Typography
                                            fontSize={'9px'}
                                            fontFamily={'Gmarket'}
                                            fontWeight={700}
                                        >
                                            Arianna Simpson
                                        </Typography>

                                        <Typography
                                            fontSize={'7px'}
                                            color={'#888'}
                                            fontFamily={'Gmarket'}
                                            fontWeight={300}
                                        >
                                            @Arianna Simpson
                                        </Typography>
                                    </Stack>
                                </Box>
                            </Box>
                        </Box>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Usercointracker;
