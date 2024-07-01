import React from 'react';
import { Box, Button, Container, Grid, Typography, useTheme } from '@mui/material';
import LossMainImg from '../../images/TaxLoss/lossImg.png';
import TaxLossBg from '../../images/TaxLoss/lossBg.png';
import Ellipse1 from '../../images/TaxLoss/Ellipse1.png';
import Ellipse2 from '../../images/TaxLoss/Ellipse2.png';
import { Done } from '@mui/icons-material/';
import Navigation from '../../Components/Navigation';

const LossHarvesting = () => {
    const theme = useTheme();
    let taxArray = [
        { text: 'Optimize your 2023 taxes by claiming losses' },
        { text: 'Offset non-crypto capital gains' },
        { text: 'Rollover capital losses to future years' },
        { text: 'Maximize performance & build wealth' },
    ];
    return (
        <Box  sx={{
            position: 'relative',
            backgroundImage: `url(${TaxLossBg})`,
            backgroundSize: '100%  100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            py: 1,
        }}>
           
            <Box
              mx={{lg:7,xs:2,md:4,sm:3}}
               
            >
                 <Navigation />
                <img
                    src={Ellipse1}
                    alt=""
                    style={{
                        position: 'absolute',
                        top: '25rem',
                        left: '0rem',
                        transform: ' translateY(-40%) translateX(-10%)',
                        width: '25%',
                    }}
                />
                <img
                    src={Ellipse2}
                    alt=""
                    style={{
                        position: 'absolute',
                        top: '20rem',
                        right: '1rem',
                        transform: 'translateY(-40%) translateX(5%)',
                        width: '20%',
                    }}
                />
                <Container maxWidth="xl" sx={{ mt: 7, px: { xs: 5, sm: 10 } }}>
                    <Grid
                        container
                        sx={{
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Grid item xs={12} sm={6} md={5}>
                            <Typography
                                sx={{
                                    color: `${theme.palette.text.darkblue}`,
                                    fontStyle: 'normal',
                                    fontWeight: 800,
                                    fontSize: { xs: '18px', md: '30px' },
                                    py: { xs: 1.3, md: 4 },
                                    fontFamily: 'Gmarket',

                                    textAlign: { xs: 'center', md: 'left' },
                                    textTransform: 'uppercase',
                                }}
                            >
                                Tax-Loss Harvesting
                            </Typography>
                            <Typography
                                fontSize={{ xs: '15px', md: '20px' }}
                                fontStyle={'normal'}
                                fontWeight={600}
                                color={theme.palette.text.darkblue}
                                textAlign={{ xs: 'center', md: 'left' }}
                                fontFamily={'Gmarket'}
                            >
                                Save up to 0.00 PKR in taxes
                            </Typography>
                            <Typography
                                fontSize={{ xs: '11px', md: '15px' }}
                                fontStyle={'normal'}
                                textAlign={{ xs: 'center', md: 'left' }}
                                fontFamily={'Gmarket'}
                            >
                                Get a Pro portfolio subscription to <br /> unlock tax-loss
                                harvesting
                            </Typography>

                            <Box
                                sx={{
                                    border: '2px solid #E7F4FF',
                                    p: { xs: 2, md: 5 },
                                    background: 'white',
                                    boxShadow: ' 0px 0px 60px 0px rgba(0, 0, 0, 0.05)',
                                    borderRadius: '15px',
                                    mt: 3,
                                }}
                            >
                                {taxArray.map((item, i) => {
                                    return (
                                        <Box key={i} sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Done sx={{ color: '#0B7BC4' }} />
                                            <Typography
                                                sx={{
                                                    margin: '7px',
                                                    fontSize: { xs: '13px', md: '16px' },
                                                }}
                                            >
                                                {item.text}
                                            </Typography>
                                        </Box>
                                    );
                                })}
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    mt={2}
                                >
                                    <Button
                                        variant="btn1"
                                        sx={{ px: { xs: 1.8, md: 2.5 }, py: { xs: 1.2, md: 2 } }}
                                    >
                                        Upgrade now
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <Box
                                component="img"
                                mt={{ md: '0', xs: '2rem' }}
                                src={LossMainImg}
                                alt=""
                                style={{ width: '100%' }}
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default LossHarvesting;
