import React from 'react';

import { Box, Container, Grid, Typography, styled, useMediaQuery, useTheme } from '@mui/material';
import { NavLink } from 'react-router-dom';

import footerbg from '../images/footerbg.svg';
import logo from '../images/logo.svg';
import footermob from '../images/footermob.png';

const StyledLink = styled(NavLink)(() => ({
    textDecoration: 'none',

    '&:focus, &:hover, &:visited, &:link, &:active': {
        textDecoration: 'none',
        color: '#585858',
    },
}));

const Footer = () => {
    const theme = useTheme();
    const matchesMeida = useMediaQuery('(  max-width:900px  )');
    return (
        <Box
            sx={{
                background: matchesMeida ? `url(${footermob})` : `url(${footerbg})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                minHeight: '430px',
                height: '100%',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mt: 10,
            }}
        >
            <Container maxWidth="xl">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={3}>
                        <Box
                            display="flex"
                            justifyContent={{ md: 'center', xs: 'left' }}
                            alignItems="center"
                            ml={{ md: 0, sm: 2, xs: 0 }}
                            sx={{ px: { md: 4, xs: 0 } }}
                        >
                            <Box>
                                <Box>
                                    <img src={logo} alt="" />
                                </Box>
                                <Typography
                                    sx={{
                                        fontSize: { md: '16px', xs: '15px' },
                                        fontFamily: 'Poppins',
                                        fontWeight: 500,
                                        mb: 1,
                                        mt: 1,
                                        color: `${theme.palette.text.lightbrown}`,
                                    }}
                                >
                                    Connect your cryptocurrency wallets and exchanges. Get your
                                    crypto and bitcoin taxes done in minutes
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={4} sm={4} md={3}>
                        <Box
                            display="flex"
                            justifyContent={{ sm: 'center', xs: 'left' }}
                            alignItems="center"
                        >
                            <Box>
                                <Typography
                                    sx={{ color: `${theme.palette.text.darkblue}` }}
                                    fontWeight="700"
                                    fontSize={{ md: '19px', xs: '15px' }}
                                    fontFamily="Poppins"
                                >
                                    Platform
                                </Typography>
                                <Box
                                    sx={{
                                        fontFamily: 'Poppins',

                                        fontSize: { md: '19px', sm: '15px', xs: '10px' },
                                        fontWeight: 500,
                                        color: `${theme.palette.text.lightbrown}`,
                                    }}
                                >
                                    <li>
                                        <StyledLink to="/loss-harvesting">Pricing</StyledLink>
                                    </li>
                                    <li>
                                        <StyledLink to="/crypto-prices"> Crypto Prices</StyledLink>
                                    </li>
                                    <li>
                                        <StyledLink to="/integration"> Integration</StyledLink>
                                    </li>
                                    <li>
                                        <StyledLink to="/Termsofservices">Terms of Use</StyledLink>
                                    </li>
                                    <li>
                                        <StyledLink to="/Privacypolicy"> Privacy Policy</StyledLink>
                                    </li>
                                    <li>
                                        <StyledLink to="/disclaimer">Disclaimer</StyledLink>
                                    </li>
                                    <li>
                                        <StyledLink to="/security">Security</StyledLink>
                                    </li>
                                    <li>
                                        <StyledLink to="/careers">Status</StyledLink>
                                    </li>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={4} sm={4} md={3}>
                        <Box
                            display="flex"
                            justifyContent={{ sm: 'center', xs: 'left' }}
                            alignItems="center"
                        >
                            <Box>
                                <Typography
                                    sx={{ color: `${theme.palette.text.darkblue}` }}
                                    fontWeight="700"
                                    fontSize={{ md: '19px', xs: '15px' }}
                                    fontFamily="Poppins"
                                >
                                    Company
                                </Typography>

                                <Box
                                    sx={{
                                        fontFamily: 'Poppins',
                                        fontSize: { md: '19px', sm: '15px', xs: '10px' },
                                        fontWeight: 500,
                                    }}
                                >
                                    <li>
                                        <StyledLink to="/about">About</StyledLink>
                                    </li>
                                    <li>
                                        <StyledLink to="/careers"> Careers</StyledLink>
                                    </li>
                                    <li>
                                        <StyledLink to="/pricing-details">Press</StyledLink>
                                    </li>
                                    <li>
                                        <StyledLink to="/previewtaximpact">Deals</StyledLink>
                                    </li>
                                    <li>
                                        <StyledLink to="/taxes">For tax</StyledLink>
                                    </li>
                                </Box>
                            </Box>
                        </Box> 
                    </Grid>
                    <Grid item xs={4} sm={4} md={3}>
                        <Box
                            display="flex"
                            justifyContent={{ sm: 'center', xs: 'left' }}
                            alignItems="center"
                        >
                            <Box>
                                <Typography
                                    sx={{ color: `${theme.palette.text.darkblue}` }}
                                    fontWeight="700"
                                    fontSize={{ md: '19px', xs: '15px' }}
                                    fontFamily="Poppins"
                                >
                                    Resources
                                </Typography>

                                <Box
                                    sx={{
                                        fontFamily: 'Poppins',

                                        fontSize: { md: '19px', sm: '15px', xs: '10px' },
                                        fontWeight: 500,
                                    }}
                                >
                                    <li>
                                        <StyledLink to='/Taxguide'>Crypto tax guide</StyledLink>
                                    </li>
                                    <li>
                                        <StyledLink to='/blog'>Blog</StyledLink>
                                    </li>
                                    <li>
                                        <StyledLink>Support</StyledLink>
                                    </li>
                                    <li>
                                        <StyledLink to='/cointracker'>Donate</StyledLink>
                                    </li>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                <Box
                    sx={{ marginTop: { md: '2rem', xs: '2rem' } }}
                    mr={{ md: 8, xs: 0 }}
                    mb={{ md: 1, xs: 1 }}
                >
                    <Typography sx={{ textAlign: 'right' }}>© crypee(Tax Software) 2023</Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
