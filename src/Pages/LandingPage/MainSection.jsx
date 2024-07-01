import React from 'react';

import { Box,  Container, Grid, Typography, useTheme } from '@mui/material';
// import heroright from '../../images/heroright.png';
import monitor_main from '../../images/monitor_main.png'
import mainBg from '../../images/mainBg.png';
import Header from '../../Components/Header';
 import i18next from "../../Localization/i18next";
// import Navigation from '../../Components/Navigation';

const MainSection = () => {
    const theme = useTheme();
    return (
        <Box
            sx={{
                background: `url(${mainBg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%',
            }}
            py={1}
        >
            <Box sx={{ width: { md: '70%', sm: '100%', xs: '100%' }, margin: '0 auto', p: '0  0 20px 0' }}>
            <Header/>
            </Box>
            <Box>
                <Container maxWidth="xl" sx={{ px: { xs: 5, sm: 8 }, py: 5 , width: { md: '70%' , sm: '100%', xs: '100%' } }}>
                    <Grid
                        container
                        spacing={2}
                        alignItems="center"
                        justifyContent="center"
                        sx={{ minHeight: '50vh' }}
                    >

                        <Grid item xs={12}>
                            <Typography
                                sx={{
                                    fontFamily: 'Gmarket',
                                    fontWeight: 700,
                                    fontSize: { lg: '30px', sm: '25px', xs: '20px',md:'30px' },
                                    color: '#333333',
                                    textTransform: 'uppercase',
                                    mb: 0.5,
                                    width: { md: '60%', sm: '100%', xs: '100%'}
                                }}
                            >
                                {i18next.t('mainsection.tagline')} <span style={{ color: '#6BB4D1' }}>{i18next.t('mainsection.tag_line_color')}</span>
                            </Typography>
                        </Grid>
                            <Grid item xs={12} md={6}>
                            <Box height="100%">
                                <Typography
                                    sx={{
                                        fontSize: { md: '16px', xs: '13px' },
                                        mb: 3,
                                        fontFamily: 'Gmarket',
                                        color: '#888888',
                                    }}
                                >
                                    {i18next.t('mainsection.sub_tagline')}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item md={6} xs={12} height="100%">
                            <Box textAlign="end">
                                <img src={monitor_main} alt="heroright" width="90%" />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default MainSection;