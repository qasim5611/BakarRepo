import React from 'react';

import { Box, Container, Typography, useTheme } from '@mui/material';
import getbg from '../../images/getbg.png';
import Header from '../../Components/Header';

const Careers = () => {
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
                    Our Promise
                </Typography>
                <Box width={{ xs: '100%', sm: '100%', md: '900px', lg: '900px' }}>
                    <Typography
                        sx={{
                            fontSize: { lg: '14px', sm: '13px', xs: '12px', md: '14px' },
                            fontWeight: 600,
                            fontFamily: 'Gmarket',
                            color: `${theme.palette.text.lightbrown}`,
                            lineHeight: '22.5px',
                            my: 4,
                        }}
                    >
                        We promise to:
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
                        <span>
                            <b>• Put You First: </b>
                        </span>
                        Your needs are our top priority. We will always listen to your feedback and
                        keep improving our tools to make them work better for you.<br></br>
                        <span>
                            <b>• Keep You Safe: </b>
                        </span>
                        We know that security is crucial when it comes to cryptocurrencies. Our
                        platform is built with top-notch security measures to protect your assets
                        and information.<br></br>
                        <span>
                            <b>• Cover Everything: </b>
                        </span>
                        We have got you covered from managing your portfolio to sorting out your
                        taxes. Our platform is a one-stop shop for all things crypto.<br></br>
                        <span>
                            <b>• Stay Innovative: </b>
                        </span>
                        We will stay up to date with the latest in the crypto world and keep our
                        tools fresh and useful for you.
                    </Typography>
                </Box>
                {/* =============communication============= */}
                <Typography
                    sx={{
                        fontSize: { lg: '14px', sm: '13px', xs: '12px', md: '14px' },
                        fontWeight: 800,
                        fontFamily: 'Gmarket',
                        color: `${theme.palette.text.lightbrown}`,
                        lineHeight: '22.5px',
                        my: 3,
                    }}
                >
                    Our Services
                </Typography>
                <Box width={{ xs: '100%', sm: '100%', md: '900px', lg: '900px' }}>
                    <Typography
                        sx={{
                            fontSize: { lg: '14px', sm: '13px', xs: '12px', md: '14px' },
                            fontWeight: 400,
                            fontFamily: 'Gmarket',
                            color: `${theme.palette.text.lightbrown}`,
                            lineHeight: '22.5px',
                        }}
                    >
                        We may contact you to provide updates regarding administrative matters such
                        as alterations to our terms or policies, offering user support, and
                        addressing your inquiries, questions, and feedback. These actions are in the
                        legitimate interest of providing user support and keeping you informed about
                        administrative changes.
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: { lg: '14px', sm: '13px', xs: '12px', md: '14px' },
                            fontWeight: 400,
                            fontFamily: 'Gmarket',
                            color: `${theme.palette.text.lightbrown}`,
                            lineHeight: '22.5px',
                            my: 3,
                        }}
                    >
                        <span>
                            <b>• Grow Your Wealth: </b>
                        </span>
                        Our tools will help you make smart investment choices, keep an eye on how
                        your investments are doing, and spot opportunities to make more.<br></br>
                        <span>
                            <b>• Tax Made Easy: </b>
                        </span>{' '}
                        We have simplified the world of cryptocurrency taxes. You can stay compliant
                        without any headaches.<br></br>
                        <span>
                            <b>• Smart Investments: </b>
                        </span>{' '}
                        Get recommendations and insights to help you make better investment
                        decisions.<br></br>
                        <span>
                            <b>• Learn and Grow: </b>
                        </span>{' '}
                        Access easy-to-understand resources, webinars, and expert tips to help you
                        navigate the world of cryptocurrency.
                        <br></br>Join us in this exciting journey to take control of your
                        cryptocurrency future. We are here to be your trusted partner, guiding you
                        toward your financial goals in the world of cryptocurrency.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Careers;
