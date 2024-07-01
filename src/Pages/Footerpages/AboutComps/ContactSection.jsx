import React from 'react';
import { Box, Typography, Grid, Paper, Link } from '@mui/material';
import i18next from '../../../Localization/i18next';

const ContactSection = () => {
  return (
    <Box sx={{ width: {md: '70%',sm: '100%', xs: '100%'} ,textAlign: 'center', margin: '0 auto', backgroundColor: '#fff' }}>
      <Typography variant="h6" component="p" color="#969696">
        {i18next.t('contact.us')}
      </Typography> 
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <Typography variant="h6" component="h3" color="#6DB5D2">
          {i18next.t('contact.location')}
          </Typography>
          <Typography variant="body1" component="p" color="textSecondary">
          {i18next.t('contact.address')}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" component="h3" color="#6DB5D2">
          {i18next.t('contact.email')}
          </Typography>
          <Link href="mailto:contact@crypee.io" color="#969696">
            contact@crypee.io
          </Link>
        </Grid>
        <Grid item xs={12} sm={12} md={8} sx={{ marginTop: 4 , marginBottom: 2}}>
          <Paper elevation={3} sx={{ height: {md:'300px', sm: '500px', xs: '500px'} }}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3165.0557294118857!2d127.05155937555925!3d37.50660372756294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2s!4v1719656490275!5m2!1sen!2s"
           width="100%" height="100%"
          loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
           </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactSection;
