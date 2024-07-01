import React from 'react';

import { Box, Container, Typography, useTheme } from '@mui/material';
import getbg from '../../images/getbg.png';
import Header from '../../Components/Header';

const Blog = () => {
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
                    Marketing and Advertising:
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
                    We and our advertising partners may use your personal information for marketing
                    and advertising purposes, including:
                </Typography>
                <Typography
                    sx={{
                        fontSize: { lg: '14px', sm: '13px', xs: '12px', md: '14px' },
                        fontWeight: 800,
                        fontFamily: 'Gmarket',
                        color: `${theme.palette.text.lightbrown}`,
                        lineHeight: '22.5px',
                        my: 4,
                    }}
                >
                    Service Delivery, Including:
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
                        <span>
                            <b>Direct Marketing: </b>
                        </span>
                        Sending you direct marketing communications in accordance with legal
                        regulations, such as notifying you about special promotions, offers, and
                        events via email. Interest-Based Advertising: Collaborating with advertising
                        partners, including third-party advertising firms and social media
                        companies, to display ads on the Service and other online platforms. These
                        companies may employ cookies and similar technologies to collect information
                        about your interactions over time across the Service, our communications,
                        and other online services. They may use this data to deliver online ads they
                        believe are relevant to you, known as interest-based advertising. We may
                        also share user information with these companies to facilitate
                        interest-based advertising to our users or similar audiences (known as a
                        &ldquo;lookalike audience&rdquo;) on other online platforms. When necessary,
                        we will seek your consent for marketing activities.
                    </Typography>
                </Box>
                {/* =============Compliance============= */}
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
                    Compliance and Protection, Including:
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
                    ></Typography>
                    • Adhering to applicable laws, lawful requests, and legal procedures, such as
                    responding to subpoenas or government authority requests.<br></br>• Safeguarding
                    our, your, or others rights, privacy, safety, or property, including making and
                    defending legal claims.<br></br>• Auditing our compliance with legal and
                    contractual requirements, as well as internal policies.<br></br>• Preventing,
                    identifying, investigating, and deterring fraudulent, harmful, unauthorized,
                    unethical, or illegal activities, such as cyberattacks and identity theft.
                    <br></br>• These actions are necessary to fulfill our legal obligations and
                    serve our legitimate interests in exercising or safeguarding rights, ensuring
                    safety and security.
                </Box>
            </Container>
        </Box>
    );
};

export default Blog;
