import { Box, Grid, IconButton, Typography } from '@mui/material';
import React from 'react';
import trackback from '../../../images/trackback.png';
import cryptombl from '../../../images/cryptombl.png';
import AppStore from '../../../images/App Store.png';
import play from '../../../images/play.png';

const Trackcrypto = () => {
    return (
        <Box
            sx={{
                background: `url(${trackback})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%',
                backgroundColor: 'rgba(173, 216, 230, 0.5)',
              
            }}
          
        >
            <Grid container justifyContent={'space-evenly'} alignItems={'center'} py={10}>
                <Grid item xs={10} lg={4} sm={8} md={5}>
                    <Typography
                        pb={'20px'}
                        color={'#0B7BC3'}
                        fontSize={{ xs: '18px', lg: '30px' ,sm:'24px',md:'28px'}}
                        fontWeight={700}
                        fontFamily={'Gmarket'}
                        textTransform={'capitalize'}
                    lineHeight={{lg:'50px',md:'40px',sm:'35px',xs:'25px'}}
                    >
                        Track your crypto portfolio on the go
                    </Typography>

                    <Box
                        width={{ xs: '100%', lg: '540px' }}
                     
                    >
                        <Typography
                            color=" var(--Text-Black, #333)"
                            fontSize={{ xs: '14px', lg: '18px' ,md:'15px',sm:'13px'}}
                            fontWeight={500}
                            py={3}
                            fontFamily={'Gmarket'}
                            lineHeight={{xs:'20px',sm:'25px',md:'30px',lg:'35px'}}
                        >
                            Our mobile app empowers users to keep an eye on their portfolio and
                            crypto prices. Never lose track of your assets, no matter where you are.
                        </Typography>
                    </Box>

                    <Box display="flex" gap={2} flexWrap={'wrap'} justifyContent={{lg:'flex-start',xs:'center',md:'flex-start'}}>
                        <IconButton>
                            <img src={AppStore} alt="App Store" />
                        </IconButton>
                        <IconButton>
                            <img src={play} alt="Play Store" />
                        </IconButton>
                    </Box>
                </Grid>
                <Grid item xs={10} lg={4.5} sm={8} md={5} >
                    <img src={cryptombl} width={'100%'}></img>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Trackcrypto;
