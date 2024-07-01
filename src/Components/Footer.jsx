import React from 'react';

import { Box, Container, Grid, Typography, styled, useMediaQuery, useTheme } from '@mui/material';
import { NavLink } from 'react-router-dom';

import footerbg from '../images/footerbg.svg';
import logo from '../images/logo.svg'; 
import i18next from '../Localization/i18next'; 

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
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#F8F8F8',
                minHeight: '200px',
                height: '50%',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Container sx={{ width: '70%' }}>
                <Grid container spacing={2}>
                    <Grid item xs={6} sm={4} md={4}>
                        <Box
                            display="flex"
                            justifyContent={{ md: 'center', xs: 'left' }}
                            alignItems="center"
                            ml={{ md: 0, sm: 2, xs: 0 }}
                            sx={{ px: { md: 4, xs: 0 } }}
                            mt={2}
                        >
                        <Box>
                                <Box>
                                    <img src={logo} alt="" />
                                </Box>
                            </Box>
                        </Box>
                                </Grid>
                                <Grid item xs={6} sm={8} md={8} mt={2}>
                                <Typography
                                    sx={{
                                        fontSize: { md: '16px', xs: '15px' },
                                        fontFamily: 'Poppins',
                                        fontWeight: 500,
                                        mb: 1, 
                                        color: '#333333' ,
                                    }}
                                >
                                    {i18next.t('footer.tos')} &nbsp;{i18next.t('footer.pp')}
                                </Typography> 
                                <Typography
                                    sx={{
                                        fontSize: { md: '12px', xs: '15px' },
                                        fontFamily: 'Poppins',
                                        fontWeight: 400,
                                        mb: 1,
                                        mt: 1,
                                        color: '#333333' ,
                                        lineHeight: '30px'
                                    }}
                                >
                                    {i18next.t('footer.line_1')} <br/>
                                    {i18next.t('footer.line_2')} <br/>
                                    {i18next.t('footer.line_3')}
                                    <br/> {i18next.t('footer.line_4')}

                                </Typography> 
                    </Grid> 
                </Grid>

                {/* <Box
                    sx={{ marginTop: { md: '2rem', xs: '2rem' } }}
                    mr={{ md: 8, xs: 0 }}
                    mb={{ md: 1, xs: 1 }}
                >
                    <Typography sx={{ textAlign: 'right' }}>© crypee(Tax Software) 2023</Typography>
                </Box> */}
            </Container>
        </Box>
    );
};

export default Footer;
