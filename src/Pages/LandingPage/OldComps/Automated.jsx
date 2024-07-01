import React from 'react';

import { Box, Grid, Typography, useTheme } from '@mui/material';



import automatedimg from '../../../images/automatedimg.png';


const Automated = () => {
    const theme = useTheme();
    return (
        <Box >
            <Grid container justifyContent={'center'}   alignItems={'center'}>
                <Grid item xs={10} lg={5} md={6}>
                    <Typography
                        pb={'20px'}
                        color= {`${theme.palette.text.darkblue}`}
                        fontSize={{md:'24px',xs:'18px',sm:'20px',lg:'30px'}}
                        fontWeight={700}
                        fontFamily={'Gmarket'}
                    >
                       Automated portfolio tracking
                    </Typography>
                 
                    <Box width={{ xs: '100%', lg: '540px' }} >
            <Typography
              color="var(--Text-Black, #333)"
              fontSize={{ xs: '13px', lg: '18px' ,sm:'14px',md:'16px'}}
              fontWeight={500}
              fontFamily={'Gmarket'}
              lineHeight={{xs:'20px',sm:'25px',md:'30px',lg:'35px'}}
              
            >
              View your market value, investment performance, and 
portfolio allocation in real time and for tax purposes. We
unify your transaction history across every crypto service
and make it searchable and filterable. We support 500+
 exchanges & 10,000+ cryptocurrencies.
            </Typography>
          </Box>
                  
                </Grid>

                <Grid item xs={11} lg={5} md={4}>
                    <img src={automatedimg} width={'100%'} alt='automated'></img>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Automated;
