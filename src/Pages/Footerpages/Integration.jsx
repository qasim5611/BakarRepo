import React from 'react';

import { Box, Container, Typography, useTheme } from '@mui/material';
import getbg from '../../images/getbg.png';
import Header from '../../Components/Header';



const Integration = () => {
    const theme = useTheme();
    return (
        <Box sx={{ background: `url(${getbg})`, height: 'auto', backgroundSize: 'cover' }}>
            <Header />

            <Container maxWidth="xl" sx={{ px: { xs: 5, sm: 10 }, py: 3 }}>
                <Typography
                    py={2.5}
                    sx={{
                        fontSize: { md: '20px', sm: '15px', xs: '14px' },
                        fontWeight: 800,
                        fontFamily: 'Gmarket',
                        color: `${theme.palette.text.darkblue}`,
                        textTransform: 'uppercase',
                    }}
                >
                  Use of Personal Information
                </Typography>
                <Typography
                    sx={{
                        fontSize: { lg: '14px', sm: '13px', xs: '12px', md: '14px' },
                        fontWeight: 400,
                        fontFamily: 'Gmarket',
                        color: `${theme.palette.text.lightbrown}`,
                        lineHeight: '22.5px',
                    }}
                >
                  We utilize your personal information for the following purposes:

                </Typography>
               <Typography sx={{
                        fontSize: { lg: '14px', sm: '13px', xs: '12px', md: '14px' },
                        fontWeight: 800,
                        fontFamily: 'Gmarket',
                        color: `${theme.palette.text.lightbrown}`,
                        lineHeight: '22.5px',
                        my:4
                    }}>Service Delivery, Including:</Typography>
                    <Typography   sx={{
                        fontSize: { lg: '14px', sm: '13px', xs: '12px', md: '14px' },
                        fontWeight: 400,
                        fontFamily: 'Gmarket',
                        color: `${theme.palette.text.lightbrown}`,
                        lineHeight: '22.5px',
                    }}>
                    • Tracking your cryptocurrency portfolios performance and calculating related capital gains and losses.<br></br>
                    • Providing and securing the Service.<br></br>
                    • Establishing, maintaining, and authenticating your account.<br></br>
                    • Granting your tax advisors access to your account with your consent.<br></br>
                    • Processing transactions via our third-party payment processors.<br></br>
                    • These activities are essential for the fulfillment of our contractual obligations to you.<br></br>
                    </Typography>
                    {/* =============communication============= */}
                    <Typography
                    sx={{
                        fontSize: { lg: '14px', sm: '13px', xs: '12px', md: '14px' },
                        fontWeight: 800,
                        fontFamily: 'Gmarket',
                        color: `${theme.palette.text.lightbrown}`,
                        lineHeight: '22.5px',
                        my:3
                    }}
                >
                 Communication with You:
                </Typography>
                <Box width={{ xs: '100%', sm: '100%', md: '900px', lg: '900px' }}>
                <Typography sx={{
                       
                       fontSize: { lg: '14px', sm: '13px', xs: '12px', md: '14px' },
                       fontWeight: 400,
                       fontFamily: 'Gmarket',
                       color: `${theme.palette.text.lightbrown}`,
                       lineHeight: '22.5px',
                   }}>We may contact you to provide updates regarding administrative matters such as alterations to our terms or policies, offering user support, and addressing your inquiries, questions, and feedback. These actions are in the legitimate interest of providing user support and keeping you informed about administrative changes.
                   </Typography>
                   <Typography   sx={{
                        fontSize: { lg: '14px', sm: '13px', xs: '12px', md: '14px' },
                        fontWeight: 400,
                        fontFamily: 'Gmarket',
                        color: `${theme.palette.text.lightbrown}`,
                        lineHeight: '22.5px',
                        my:3
                    }}>
                    • Enhancing the Service and introducing new features.<br></br>
                    • Personalizing your user experience.<br></br>
                    • Crafting insights from de-identified and aggregated data.<br></br>
                    • These activities are vital for our legitimate interest in analyzing Service usage, enhancing and customizing user experiences, improving the Service, and developing new features and services.
                    </Typography>
                </Box>
              
            </Container>
        </Box>
    );
};

export default Integration;
