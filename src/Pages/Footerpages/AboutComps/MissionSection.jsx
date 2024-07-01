import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import i18next from '../../../Localization/i18next';
import icon1 from '../../../images/hand_mission.png';
import icon2 from '../../../images/tax_mission.png';
import icon3 from '../../../images/monitor_mission.png';

const MissionSection = () => {
  return (
    <Box sx={{width: { md:'70%' , xs: '100%'}, margin: '0 auto', textAlign: { sm: 'center', xs: 'center', md:'left'},}}>
    <Box sx={{ padding: 4, textAlign: 'left' }}>
    <Typography
                                    sx={{
                                        fontFamily: 'Gmarket',
                                        fontWeight: 600,
                                        fontSize: { lg: '18px' },
                                        color: '#ABAEAE',
                                        textTransform: 'uppercase',
                                        mb: 0.5,
                                        textAlign: { sm: 'center', xs: 'center', md:'left'},
                                    }}
                                >
        {i18next.t('mission.our')}
      </Typography>
      <Typography variant="body1" component="p" color="textSecondary"
      sx={{ marginBottom: 4, marginTop: 2 , fontSize: '20px', textAlign: { sm: 'center', xs: 'center', md:'left'}}}>
        {i18next.t('mission.line_1')}
       </Typography>
      <Grid container spacing={2} sx={{ marginTop: '20px' }} justifyContent="center">
        <Grid item xs={4} md={4}>
          <Card sx={{backgroundColor: '#e0f0f6', textAlign:'center'}}>
            <CardContent>
              <Typography sx={{ fontSize: { md:'18px', sm:'10px', xs:'10px'} , fontWeight: 500}} color={'#6BB4D1'}>
              {i18next.t('mission.icon_1')}
              </Typography>
              <Box component={'img'} src={icon1} alt="The house" sx={{ width:{ md:'100px', sm:'40px', xs:'40px'}, height: { md:'100px', sm:'40px', xs:'40px'}  , marginTop: '20px'}} ></Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4} md={4}>
          <Card sx={{backgroundColor: '#e0f0f6', textAlign:'center'}}>
            <CardContent>
              <Typography sx={{ fontSize: { md:'18px', sm:'10px', xs:'10px'} , fontWeight: 500}} color={'#6BB4D1'}>
              {i18next.t('mission.icon_2')}
              </Typography>
              <Box component={'img'} src={icon2} alt="The house" sx={{ width:{ md:'100px', sm:'40px', xs:'40px'}, height: { md:'100px', sm:'40px', xs:'40px'} , marginTop: '20px'}}></Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4} md={4}>
          <Card sx={{backgroundColor: '#e0f0f6', textAlign:'center'}}>
            <CardContent>
            <Typography color={'#6BB4D1'} sx={{ fontSize: { md:'18px', sm:'10px', xs:'10px'} , fontWeight: 500}}>
              {i18next.t('mission.icon_3')}
              </Typography>
                <Box component={'img'} src={icon3}  alt="The house"
             sx={{ width:{ md:'100px', sm:'40px', xs:'40px'}, height: { md:'100px', sm:'40px', xs:'40px'}, marginTop: '20px'}} ></Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      </Box>
    </Box>
  );
};

export default MissionSection;
