import React from 'react';

import { Box, Grid, Typography, useTheme } from '@mui/material';


import LockIcon from '@mui/icons-material/Lock';
import startcard3 from '../../../images/startcard3.png';
import startcard1 from '../../../images/startcard1.png';
import startcard2 from '../../../images/startcarrd2.png';

const Getstarted = () => {
    const theme = useTheme();
    return (
        <Box py={5}>
            <Typography
                textAlign={'center'}
                fontSize={{md: '30px', sm: '25px', xs: '20px'}}
                fontWeight={700}
                textTransform={'capitalize'}
               sx={{color: `${theme.palette.text.darkblue}`}}
               fontFamily={'Gmarket'}
            >
                Get Easily Started
            </Typography>
            <Box
                py={2}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                gap={'5px'}
                fontFamily={'Gmarket'}
            >
                <LockIcon sx={{ color: '#0B7BC3' ,width:'24px'}} />
                <Typography display={'flex'} fontSize={{lg:'16px',md:'14px',sm:'13px',xs:'12px'}}>
                    We take security very seriously.
                    <Typography
                        sx={{ textDecoration: 'underline' }}
                        color={' var(--Text-Black, #0B7BC3)'}
                        fontSize={{lg:'16px',md:'14px',sm:'13px',xs:'12px'}}
                    >
                        Learn more.
                    </Typography>
                </Typography>
            </Box>
            {/* =============cards=================== */}

            <Grid container justifyContent={'center'} alignItems={'center'} py={5}>
                <Grid item lg={4} md={5} xs={11} sm={8}>
                    <Box
                        sx={{
                            background: `url(${startcard1})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'contain',
                            py: 10,
                            px: 10,
                        }}
                    >
                        <Typography     fontFamily={'Gmarket'} sx={{fontSize:{lg:'18px',xs:'12px',sm:'14px',md:'16px'}}}>
                        Connect Wallets &<br></br>
Exchanges
                        </Typography>
                    </Box>
                </Grid>
                <Grid item lg={4} md={5} xs={11} sm={8}>
                    <Box
                        sx={{
                            background: `url(${startcard2})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'contain',
                            py: 10,
                            px: 10,
                            fontSize:{lg:'18px',xs:'12px',sm:'14px',md:'16px'}
                        }}
                    >
                        <Typography     fontFamily={'Gmarket'} sx={{fontSize:{lg:'18px',xs:'12px',sm:'14px',md:'16px'}}}>
                        Review <br></br>
Transactions
                        </Typography>
                    </Box>
                </Grid>
                <Grid item lg={4} md={5} xs={11} sm={8}>
                    <Box
                        sx={{
                            background: `url(${startcard3})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'contain',
                            py: 10,
                            px: 10,
                        }}
                        fontFamily={'Gmarket'}
                    >
                        <Typography sx={{  fontSize:{lg:'18px',xs:'12px',sm:'14px',md:'16px'}}}>
                            Get portfolio insights<br></br>& tax reports
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Getstarted;
