import React from 'react';
import savemoney from '../../../images/savemoney.png';
import { Box, Grid, Typography, useTheme } from '@mui/material';

const SaveMoney = () => {
    const theme = useTheme();
    return (
        <Box my={5}>
            <Grid container justifyContent={'center'} alignItems={'center'}>
                <Grid item xs={10} lg={6} md={5}>
                    <img src={savemoney} width={'100%'} alt='savemoney'></img>
                </Grid>

                <Grid item xs={10} lg={6} md={7}>
                    <Typography
                        pb={'20px'}
                      sx={{  color: `${theme.palette.text.darkblue}`}}
                        fontSize={{xs:'20px',sm:'22px',md:'28px',lg:'30px'}}
                        fontWeight={700}
                        fontFamily={'Gmarket'}
                    >
                        Save money year-round
                    </Typography>
                 
                    <Box width={{ xs: '100%', lg: '540px',md:'540px' }}>
            <Typography
              color="var(--Text-Black, #333)"
              fontSize={{ xs: '13px', lg: '18px' ,sm:'14px',md:'16px'}}
              fontWeight={500}
              fontFamily={'Gmarket'}
              lineHeight={{xs:'20px',sm:'25px',md:'30px',lg:'35px'}}
            >
              Crypee(Tax Software) automatically optimizes cost basis accounting methods and enables you to tax-loss harvest your portfolio to save thousands per year. Additional visibility into tax lots helps you make better trades.
            </Typography>
          </Box>
                  
                </Grid>
            </Grid>
        </Box>
    );
};

export default SaveMoney;
