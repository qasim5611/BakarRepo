import React from 'react';

import { Box, Container, Typography, useTheme } from '@mui/material';
import getbg from '../../images/getbg.png';
import Header from '../../Components/Header';

const terms = [
    {
        heading: 'Article 1 (Purpose)',
        body: 'These terms are intended to clarify the conditions and procedures for the use of the cryptocurrency tax calculation and management services (hereinafter referred to as "Services") provided by Crypee Solutions Corp. (hereinafter referred to as "Company"), and to define the rights, obligations, and responsibilities between the Company and users related to the Services.',
    },
    {
        heading: 'Article 2 (Definitions)',
        body: 'Definitions of key terms used in these terms are as follows <br/> <ul> <li><b> Services </b> Refers to all cryptocurrency-related tax calculation, tax filing support, tax consulting, and any other online and offline services provided to users by the Company. </li> <li><b>User </b>Refers to all individuals or corporate customers who use the Services.</li> <li><b>Member </b> Refers to individuals or corporations who have provided personal information to the Company and completed member registration, continuously using the services provided by the Company. </li>  <li> <b>Non-Member</b> Refers to those who use the Companys services without a membership registration. </li>    </ul> ',
    },
    {
        heading: 'Article 3 (Provision and Change of Services)',
        body: '1. The Company provides the following services <ul> <li>Cryptocurrency transaction tax calculation services</li> <li>Tax filing support services</li> <li>Tax consulting and related advisory services</li>    </ul> <br/> 2. The Company may change the content, method, and times of services, and will notify such changes on the service page in advance. ',
    },
    {
        heading: 'Article 4 (Service Interruption)',
        body: '1. The Company may temporarily suspend the services for significant reasons such as maintenance, replacement, or malfunction of computer and other information communication facilities, or disruption of communication. <br/> 2. The Company will notify the reasons for service interruption and the expected period of interruption in advance on the service page.',
    },
    {
        heading: 'Article 5 (Membership)',
        body: '1. Users must provide required information such as name, contact details, and email address to register as members. <br/> 2. All members must agree to the Companys Terms of Service and Privacy Policy.',
    },
    {
        heading: 'Article 6 (Change of Member Information)',
        body: 'Members must immediately update their registration details if there are any changes, using the Companys member information editing features. Members bear the responsibility for any issues arising from not updating their information.',
    },
    {
        heading: 'Article 7 (User Obligations)',
        body: '1. Users must comply with these terms, other regulations set by the Company, and any notices, and must not engage in any activity that interferes with the Companys operations. <br/> 2. Users must not allow their ID and password to be used by a third party.',
    },
    {
        heading: 'Article 8 (Service Use Restriction)',
        body: 'The Company may restrict or suspend the service use if users violate any obligations under these terms or interfere with the normal operation of the service.',
    },
    {
        heading: 'Article 9 (Contract Termination and Restriction)',
        body: '1. Members can request to terminate their service use at any time, and the Company will immediately process the termination. <br/> 2. The Company can issue warnings, temporarily suspend, or permanently stop the service if the user violates these terms or related laws.',
    },
    {
        heading: 'Article 10 (Disclaimer)',
        body: '1. The Company is not responsible for any service provision liabilities in the event of force majeure such as natural disasters, war, riots, or technical issues. <br/> 2. The Company is not liable for any service use disturbances caused by the users fault. <br/> 3. The Company is not responsible for the content of data posted or transmitted by users. ',
    },
    {
        heading: 'Article 11 (Copyright and Use Restrictions)',
        body: '1. Copyright and trademark rights related to the services provided by the Company belong to the Company. <br/> 2. Users may not reproduce, transmit, publish, distribute, or broadcast any content provided by the service without prior consent from the Company.',
    },
    {
        heading: 'Article 12 (Dispute Resolution) ',
        body: '1. The Company and users will attempt to amicably resolve any disputes related to the service use. <br/> 2. If not resolved through negotiation, disputes will be settled in accordance with the laws governing the Companys location and under the jurisdiction of the courts located at the Companys headquarters.',
    },
    {
        heading: 'Article 13 (Compensation for Damages)',
        body: 'The Company will compensate for damages only if the damage to the user is caused by the intentional or gross negligence of the Company.',
    },
    {
        heading: 'Article 14 (Advertisements and Notices)',
        body: '1. The Company may place advertisements as necessary within the service. <br/> 2. The Company may provide users with service-related information via SMS, email, etc. Users consent to receive such information by signing up for the service.',
    },
    {
        heading: 'Article 15 (Service-Related Notices)',
        body: 'The Company may notify users of important information via the email address registered or SMS as provided by the members.',
    },
    {
        heading: 'Article 16 (Privacy Protection)',
        body: 'The Company strives to protect users personal information in compliance with relevant laws and regulations, and informs users of how their personal information is used and protected through the Privacy Policy.',
    },
    {
        heading: 'Article 17 (Posting and Revision of Terms)',
        body: '1. The Company will post these terms on the services homepage to notify users. <br/> 2. The Company may revise these terms as needed according to company policy changes or applicable laws, and the revised terms will be immediately announced through the notice board.',
    },
    {
        heading: 'Appendix',
        body: '1. These terms will be effective from May 20, 2024.',
    },
];

const Termsofservices = () => {
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
                    Crypee - Terms of Service
                </Typography>

                {/* <Typography
                    sx={{
                        fontSize: { lg: '14px', sm: '13px', xs: '12px', md: '14px' },
                        fontWeight: 400,
                        fontFamily: 'Gmarket',
                        color: `${theme.palette.text.lightbrown}`,
                        lineHeight: '22.5px',
                    }}
                >
                    Effective Date: [Date]
                </Typography> */}
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

export default Termsofservices;
