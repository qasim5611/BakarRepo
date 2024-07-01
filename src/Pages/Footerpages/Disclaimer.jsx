import React from 'react';

import { Box, Container, Typography, useTheme } from '@mui/material';
import getbg from '../../images/getbg.png';
import Header from '../../Components/Header';

const disclaimerdata = [
    {
        heading: 'Introduction',
        body: 'This disclaimer governs your use of the Crypee website (the "Website"). By using the Website, you accept this disclaimer in full. If you disagree with any part of this disclaimer, you must not use our Website.',
    },
    {
        heading: 'No Financial Advice',
        body: 'The information provided on the Website is for general informational purposes only and does not constitute financial, investment, or tax advice. The content on the Website should not be considered as a substitute for professional advice tailored to your specific circumstances. Always seek the advice of a qualified financial advisor or tax professional before making any financial decisions.',
    },
    {
        heading: 'Accuracy of Information',
        body: 'We strive to ensure that the information on the Website is accurate and up-to-date. However, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the Website for any purpose. Any reliance you place on such information is strictly at your own risk.',
    },
    {
        heading: 'Investment Risks',
        body: 'Cryptocurrency investments are inherently risky, and the value of cryptocurrencies can be highly volatile. The information provided on the Website does not constitute a recommendation or endorsement of any particular cryptocurrency, investment strategy, or financial product. You should carefully consider your own financial situation and risk tolerance before making any investment decisions.',
    },
    {
        heading: 'Third-Party Links',
        body: 'The Website may contain links to third-party websites or resources. These links are provided for your convenience, and we have no control over the content of these websites or resources. We do not endorse, sponsor, or take responsibility for the accuracy or content of such third-party websites. Accessing these links is at your own risk. ',
    },
    {
        heading: 'No Guarantees',
        body: 'We do not guarantee the performance, availability, or functionality of the Website or any related services. We are not responsible for any technical issues, interruptions, or downtime that may affect your use of the Website.',
    },
    {
        heading: 'Disclaimer Changes',
        body: 'We reserve the right to update or change this disclaimer at any time without prior notice. Your continued use of the Website after any modifications will constitute your acceptance of the revised disclaimer.',
    },
];

const Disclaimer = () => {
    const theme = useTheme();
    return (
        <Box sx={{ background: `url(${getbg})`, height: 'auto', backgroundSize: 'cover' }}>
            <Header />

            <Container maxWidth="xl" sx={{ px: { xs: 5, sm: 10 }, py: 3 }}>
                {disclaimerdata.map((item) => (
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
                            >
                                {item.body}
                            </Typography>
                        </Box>
                    </div>
                ))}
            </Container>
        </Box>
    );
};

export default Disclaimer;
