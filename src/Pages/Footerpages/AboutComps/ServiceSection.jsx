import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import i18next from '../../../Localization/i18next';
import icon1 from '../../../images/hand_mission.png';
import icon2 from '../../../images/tax_mission.png';
import icon3 from '../../../images/monitor_mission.png';

const ServiceSection = () => {
  return (
    <Box sx={{ backgroundColor: '#F7F7F7'}}>
    <Box sx={{width: {md:'70%',sm:'100%',xs:'100%'}, margin: '0 auto', padding: 4, textAlign: {md:'left',sm:'center',xs:'center'} }}>
    <Typography
        sx={{
          fontFamily: 'Gmarket',
          fontWeight: 600,
          fontSize: { lg: '18px' },
          color: '#ABAEAE',
          textTransform: 'uppercase',
          mb: 0.5,
      }}
    >
        {i18next.t('service.our')}
      </Typography> 
      <Typography variant="body1" component="p" color="textSecondary" sx={{ marginBottom: 4, marginTop: 2 , fontSize: '20px'}}>
        {i18next.t('service.line_1')}
       </Typography>
      <Grid container spacing={2} sx={{ marginTop: '20px', marginBottom: '5%'}}>
        {
        ['01','02','03','04'].map((data) => <Grid item xs={12} md={6}>
          <Box sx={{width: '100%', textAlign: {md: 'left',sm:'center'} }}>
              <Typography  sx={{
                color: '#7CBCD6', 
                fontWeight: 700,
                fontSize: '40px'
                }}>
                  {data}
              </Typography>
              <Typography  sx={{
                color: '#333333', 
                fontWeight: 500,
                fontSize: '18px'
                }}>
                  {i18next.t(`service.box_${data}`)}
              </Typography> 
              <Typography  sx={{
                color: '#888888', 
                fontSize: '18px',
                paddingTop: '5px'
                }}>
                  {i18next.t(`service.box_line_${data}`)}
              </Typography>
          </Box>
        </Grid>)
        } 
      </Grid>
      </Box>
    </Box>
  );
};

export default ServiceSection;
