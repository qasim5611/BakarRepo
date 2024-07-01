import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import laptop_img from '../../../images/laptop_img.png';
import Header from '../../../Components/Header';
import i18next from '../../../Localization/i18next';

const Herosection = () => {
    return (
        <Box
            sx={{
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%',
                py: 1,
                textAlign: { sm: 'center', xs: 'center', md: 'left' },
            }}
        >
            <Box sx={{ width: { md: '70%', sm: '100%', xs: '100%' }, margin: '0 auto', p: '0 0 20px 0' }}>
                <Header />
            </Box>
            <Box sx={{ width: { md: '70%', sm: '100%', xs: '100%' }, margin: '0 auto', background: 'linear-gradient(to top, #E9FCFB, #FFFFFF)' }}>
                <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 8 }, py: 5 }}>
                    <Grid
                        container
                        spacing={2}
                        alignItems="center"
                        justifyContent="center"
                        sx={{ minHeight: '50vh' }}
                    >
                        <Grid item xs={12} md={8}>
                            <Box height="100%">
                                <Typography
                                    sx={{
                                        fontFamily: 'Gmarket',
                                        fontWeight: 700,
                                        fontSize: { xs: '16px', sm: '20px' },
                                        color: '#ABAEAE',
                                        textTransform: 'uppercase',
                                        mb: 0.5,
                                    }}
                                >
                                    {i18next.t('herosection.crypto_nft_taxes')} <br /> {i18next.t('herosection.done_fast')}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: { md: '40px', xs: '24px' },
                                        mb: 3,
                                        fontFamily: 'Gmarket',
                                        color: '#6BB4D1',
                                    }}
                                >
                                    {i18next.t('herosection.the_line')}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item md={4} xs={12} sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'center', md: 'flex-start' }, textAlign: { sm: 'center', xs: 'center', md: 'left' } }}>
                            <Box>
                                <img src={laptop_img} alt="heroright" style={{ width: '100%', maxWidth: '500px', height: 'auto' }} />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default Herosection;