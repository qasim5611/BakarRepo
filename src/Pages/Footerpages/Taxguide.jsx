import React from 'react';

import { Box, Container, Typography, useTheme } from '@mui/material';
import getbg from '../../images/getbg.png';
import Header from '../../Components/Header';

const terms = [
    {
        heading: 'Tax Information:',
        body: 'If you share your Crypee account with third-party tax advisors who cannot identify you based on the information we collect during account creation, we may gather additional information from your advisors. This information might include the last four digits of your social security number, which helps your advisors identify your account. Its important to note that we do not collect or store your complete social security number.',
    },
    {
        heading: 'Third-Party Login Information:',
        body: 'When you link, connect, or log in to the Service through third-party services like Google, you authorize these third parties to send us information associated with your account on their services. This information is governed by those third-party services terms and conditions or your privacy settings for those services.',
    },
    {
        heading: 'Personal Information We Generate:',
        body: 'We utilize your cryptocurrency information to create reports related to your capital gains, losses, and tax obligations.',
    },
    {
        heading: 'Personal Information We Handle on Behalf of Partners: ',
        body: 'We occasionally integrate with select third-party partners, such as tax preparation software providers, and provide the Service to their users. In such cases, if the third-party partner maintains the user relationship, we will process the users personal information as a data processor, following our agreements with our partners. This processing will be subject to the terms of our agreements with partners rather than this Privacy Policy. If you fall into this category and have inquiries about the handling of your information or wish to exercise your privacy rights, please directly contact the partner you engage with.',
    },
   
];

const Taxguide = () => {
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
                   Tax Guide
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
                   Collection of Personal Information from Third Parties:
                </Typography>
                {terms.map((item) => (
                    <div key={item}>
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
                            {item.heading}
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
                                dangerouslySetInnerHTML={{ __html: item.body }}
                            ></Typography>
                        </Box>
                    </div>
                ))}
            </Container>
        </Box>
    );
};

export default Taxguide;
