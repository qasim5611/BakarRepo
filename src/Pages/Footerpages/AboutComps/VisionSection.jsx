import React from 'react';

import { Box, Button, Container, Grid, Typography, useTheme } from '@mui/material';
// import heroright from '../../images/heroright.png';
// import cointracker from '../../images/cointracker.png'
import vision_img from '../../../images/vision_img.png'
import i18next from '../../../Localization/i18next';

const VisionSection = () => {
    const theme = useTheme();
    return (
        <Box
            sx={{ 
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%', backgroundColor: {md:'#E9FCFB'},
                textAlign: { sm: 'center', xs: 'center',  md: 'left' },
                marginBottom: 5
            }}
            py={ { md: 8, sm: 5, xs: 5 }}
        > 
            <Box sx={{width: '70%', margin:' 0 auto', textAlign: { md: 'left'  , sm: 'center', xs: 'center'}}}>
                <Container>
                    <Grid
                        container
                        spacing={2}
                        alignItems="center"
                        justifyContent="center" 
                    >
                        <Grid item xs={12} md={6}>
                            
                <Typography
                                    sx={{
                                      fontFamily: 'Gmarket',
                                      fontWeight: 600,
                                      fontSize: { lg: '18px' },
                                      color: '#ABAEAE',
                                      textTransform: 'uppercase', 
                                      mt: 2,
                                      mb:1,
                                      textAlign: { sm: 'center', xs: 'center', md: 'left'}
                                  }}
                                >
                                {i18next.t('vision.our')}
                            </Typography> 
                            <Box height="100%">
                                {['1','2','3'].map((no) => <Typography
                                    sx={{
                                        fontSize: '16px',
                                        mb: 3,
                                        fontFamily: 'Gmarket', 
                                        color: '#868C8E',
                                    }}
                                >
                                    {i18next.t(`vision.the_line_${no}`)}
                                </Typography>)} 
                            </Box>  
                        </Grid>
                        <Grid item md={6} xs={12} sx={{ width: { md: '500px', sm: '200px' , xs: '200px' }, height: { md: '500px', sm: '200px' , xs: '200px' } }}>
                            <img src={vision_img} alt="heroright" width={'100%'} height={'100%'} />
                        </Grid>

                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default VisionSection;
