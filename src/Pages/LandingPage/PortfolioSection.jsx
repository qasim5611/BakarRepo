import React from 'react';
import { Box,  Container, Grid, Typography, useTheme } from '@mui/material';
import magnify_man from '../../images/magnify_man.png'
import i18next from "../../Localization/i18next";
import YourPortfolio from './YourPortfolio';
const PortfolioSection = () => {
    const theme = useTheme();
    return (
        <Box py={1} >
            <Box>
                <Container maxWidth="xl" sx={{ px: { xs: 5, sm: 8 }, py: 5 , width: { md: '70%' , sm: '100%', xs: '100%' } }}>
                    <Grid
                        container
                        spacing={2}
                        alignItems="center"
                        justifyContent="center"
                        sx={{ minHeight: '50vh' }}
                    >
                        <Grid item md={6} xs={12} height="100%">
                            <Box textAlign="end">
                                <img src={magnify_man} alt="heroright" width="90%" />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography
                                sx={{
                                    fontFamily: 'Gmarket',
                                    fontWeight: 900,
                                    fontSize: { lg: '30px', sm: '25px', xs: '20px',md:'30px' },
                                    color: '#333333',
                                    textTransform: 'uppercase',
                                    mb: 0.5
                                }}
                            >
                               <span style={{ color: '#6BB4D1' }}>{i18next.t('portfolio.monitor_line1')}</span>  <br/> {i18next.t('portfolio.monitor_line2')}
                            </Typography>
                        </Grid>
                    </Grid>
                    <YourPortfolio />
                </Container>
            </Box>
        </Box>
    );
};

export default PortfolioSection;