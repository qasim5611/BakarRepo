import React from 'react';

import { Box, Container, Grid,  Typography, useTheme } from '@mui/material';
import Marquee from 'react-fast-marquee';

import coinbase from '../../../images/coinbase.png';
import binance from '../../../images/binance.png';
import Kroken from '../../../images/kroken.png';
import bitfinix from '../../../images/bitfinix.png';
import asset1 from '../../../images/asset1.png';
import asset2 from '../../../images/asset2.png';
import asset3 from '../../../images/asset3.png';
import asset4 from '../../../images/asset4.png';
import asset5 from '../../../images/asset5.png';
import asset7 from '../../../images/asset7.png';
import asset8 from '../../../images/asset8.png';
import asset9 from '../../../images/asset9.png';
import asset10 from '../../../images/asset10.png';

const logos1 = [asset1, asset2, asset3, asset4, asset5,  asset7, asset8, asset9, asset10];

const logo = [coinbase, binance, Kroken, bitfinix];

const Assest = () => {
    const theme = useTheme();
    return (
        <Box my={5}>
            <Container maxWidth="xl" sx={{ px: { xs: 5, sm: 10 }, py: 5 }}>
                <Typography
                    fontFamily={'Gmarket'}
                    sx={{
                        fontSize: { md: '30px', sm: '25px', xs: '20px' },
                        fontWeight: 800,
                        color: `${theme.palette.text.darkblue}`,
                        lineHeight: '44px',
                        textAlign: 'center',
                        textTransform: 'uppercase',
                    }}
                >
                    Powerful integrations
                </Typography>
                <Typography
                    my={3}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    fontSize={{ md: '16px', xs: '12px', sm: '14px' }}
                    gap={'3px'}
                    fontFamily={'Gmarket'}
                >
                    We support 500+ exchanges, wallets and blockchains. See them all{' '}
                    <Typography
                        fontFamily={'Gmarket'}
                        color={'#0B7BC3'}
                        fontSize={{ md: '16px', xs: '12px', sm: '14px' }}
                    >
                        {' '}
                        here
                    </Typography>
                </Typography>

                <Box mt={3}>
                    <Marquee pauseOnHover="true" speed="40" gradientColor="false" gradient="false">
                        <Box
                            mt={4}
                            display="flex"
                            justifyContent="space-evenly"
                            gap="15px"
                            width="100%"
                        >
                            {logo.map((logo, i) => {
                                return (
                                    <Box key={i} px={1}>
                                        <img src={logo} alt="LogoText1" width="60%" />
                                    </Box>
                                );
                            })}
                        </Box>
                    </Marquee>
                </Box>

                {/* ==========cryptoassets============== */}

                <Box pt={15}>
                    <Grid
                        container
                        justifyContent={'space-evenly'}
                        alignItems={'center'}
                        spacing={4}
                    >
                        <Grid item lg={3} xs={10} md={5}>
                            <Typography
                                color={'#0B7BC3'}
                                fontSize={{ md: '30px', xs: '12px', sm: '14px' }}
                                fontWeight={700}
                                textTransform={'capital'}
                                fontFamily={'Gmarket'}
                            >
                                We support 10,000+ crypto assets
                            </Typography>
                        </Grid>
                        <Grid item lg={4} xs={10} md={5}>
                            <Box display={'flex'} flexWrap={'wrap'}>
                                {logos1.map((logo, i) => {
                                    return (
                                        <Box key={i} px={1}>
                                            <img
                                                src={logo}
                                                alt="LogoText1"
                                                width="64px"
                                                height="64px"
                                            />
                                        </Box>
                                    );
                                })}
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default Assest;
