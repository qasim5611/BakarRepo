import React from 'react';

import { Box, Button, Container, Grid, Typography } from '@mui/material';
import crplogo from '../../images/crplogo.png';
import signinbg from './../../images/signinbg.png';
import Header from '../../Components/Header';
import { Link } from 'react-router-dom';

const Cointracker = () => {
    return (
        <Box
            sx={{
                background: `url(${signinbg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%',
                backgroundPosition: 'top center',
            }}
        >
            <Header />
            <Container maxWidth="lg">
                <Box
                    pt={{ md: 15, xs: 4 }}
                   
                >
                    <Grid container spacing={{ md: 0, xs: 2 }} >
                        <Grid item md={6} xs={12} mx="auto" >
                        <Box  sx={{
                        background: 'white',
                        boxShadow: ' 0px 0px 60px 0px rgba(0, 0, 0, 0.05)',
                        borderRadius: '15px',
                       px:2,
                       py:2
                    }}>
                          <Box
                                sx={{
                                    background: '#F2FAFF',
                                    borderRadius: '6px',
                                    padding: {
                                        md: '3rem 6rem ',
                                        sm: '3rem 4rem ',
                                        xs: '2rem 2rem',
                                    },
                                    // padding: '3rem 6rem',
                                }}
                            >
                                <Box textAlign="center">
                                    <Box
                                        component="img"
                                        src={crplogo}
                                        alt="logo2"
                                        maxWidth="137px"
                                        width="100%"
                                    />
                                </Box>
                                <Typography
                                    sx={{
                                        fontFamily: 'Gmarket',
                                        fontWeight: 800,
                                        fontSize: '30px',
                                        textAlign: 'center',
                                        color: '#00000',
                                        mt: 3,
                                    }}
                                >
                                    Log in
                                </Typography>
                                <Typography
                                    sx={{
                                        fontFamily: 'Gmarket',
                                        fontWeight: 400,
                                        fontSize: '13px',
                                        textAlign: 'center',
                                        color: '#00000',
                                        mt: 1,
                                    }}
                                >
                                    Faster with fingerprint or face recognition
                                    <br />
                                    Log in quickly and securely using this device’s fingerprint or
                                    facial recognition.
                                </Typography>
                                <Box mt={4}>
                                 <Link style={{textdecoration:'none',}} to='/dashboard'>
                                 <Button   variant="btn1" fullWidth sx={{ py: 2 }}>
                                        Continue
                                    </Button>
                                 </Link>
                                </Box>
                                <Box mt={4}>
                                    <Button variant="btn3" fullWidth sx={{ py: 2 }}>
                                        Remind me later
                                    </Button>
                                </Box>
                                <Typography
                                    sx={{
                                        fontFamily: 'Gmarket',
                                        fontWeight: 600,
                                        fontSize: '15px',
                                        textAlign: 'center',
                                        color: '#00000',
                                        mt: 3,
                                    }}
                                >
                                    Not on this device
                                </Typography>
                                <Typography
                                    sx={{
                                        fontFamily: 'Gmarket',
                                        fontWeight: 400,
                                        fontSize: '11px',
                                        textAlign: 'center',
                                        color: '#00000',
                                        mt: 3,
                                    }}
                                >
                                    When you create a crypee(Tax Software) account, you agree to the
                                    Terms and Privacy Policy.
                                </Typography>
                            </Box>
                    </Box>
                          
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default Cointracker;
