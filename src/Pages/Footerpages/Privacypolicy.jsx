import React from 'react';

import { Box, Container, Typography, useTheme } from '@mui/material';
import getbg from '../../images/getbg.png';
import Header from '../../Components/Header';

const terms = [
    {
        heading: 'Article 1 (Purpose of Collection and Use of Personal Information)',
        body: 'The Company collects personal information for the following purposes. The collected personal information will not be used for any other purposes, and if the purpose of use changes, prior consent will be obtained. <ul><li>Performance of contracts related to service provision and settlement of fees related to service provision</li> <li>Member management: Identity verification, personal identification, prevention of unauthorized and fraudulent use by members, confirmation of the intention to join, age verification, verification of legal guardians consent when processing personal information of children under 14, customer consultation, complaint handling, etc</li> <li>Marketing and advertisement: Development and specialization of new services (products), delivery of advertising information such as events, frequency of access, statistical analysis of member service usage</li> </ul>',
    },

    {
        heading:
            'Article 2 (Items of Personal Information Collected and Method of Collection) Items of personal information collected:',
        body: '<ul> <li>Mandatory items: Name, date of birth, login ID, password, mobile phone number, email, access logs, cookies, IP information</li><li>Optional items: Address, payment information (credit card details, bank account information, etc.)</li> <li>Method of collection: Website (during registration), mobile app, fax, telephone, email, event entry, delivery request</li> </ul>',
    },
    {
        heading: 'Article 3 (Period of Retention and Use of Personal Information)',
        body: 'The Company retains and processes personal information within the period of retention and use of personal information agreed upon by the user at the time of collection or as prescribed by law. The retention and processing period for each personal information is as follows: <br/> <ul> <li>Records on contract or subscription withdrawal: 5 years</li> <li>Records on payment and supply of goods: 5 years</li> <li>Records on consumer complaints or dispute handling: 3 years</li> <li>Website visit records: 3 months</li>  </ul>',
    },
    {
        heading: 'Article 4 (Provision of Personal Information to Third Parties)',
        body: 'The Company does not provide users personal information to outside parties in principle. However, personal information may be provided to third parties in exceptional cases with prior consent from users or under special provisions of the law.',
    },

    {
        heading: 'Article 5 (Outsourcing of Personal Information Processing)',
        body: 'The Company may outsource the processing of personal information to external specialists as necessary for smooth personal information processing. When outsourcing personal information processing, the contract specifies strict compliance with instructions related to personal information protection, confidentiality of personal information, prohibition of providing to third parties, and responsibilities in case of incidents, and the contents of the contract are kept in writing or electronically.',
    },

    {
        heading:
            'Article 6 (Rights and Obligations of Data Subjects and Methods of Exercising Rights)',
        body: 'Users can inquire, modify, or request deletion of their registered personal information at any time, and they may withdraw their consent to the collection and use of personal information. These rights can be exercised by contacting the Companys personal information manager in writing, by phone, or via email.',
    },
    {
        heading: 'Article 7 (Measures for Securing Safety of Personal Information)',
        body: 'The Company takes the following technical, managerial, and physical measures to ensure safety as per Article 29 of the Personal Information Protection Act: <ul> <li>Minimization and training of personal information handling staff</li> <li>Establishment and implementation of an internal management plan</li> <li>Encryption of personal information</li> <li>Technical measures against hacking</li> <li>Installation of access control systems</li> <li>Use of locking devices for document security</li> <li>Control of access rights to unauthorized persons</li>    </ul> ',
    },
    {
        heading: 'Article 8 (Personal Information Protection Officer)',
        body: 'The Company has designated the following officer responsible for the overall processing of personal information, who also handles complaints and damage relief related to the processing of personal information. <li>Name: Kyle Choi</li> <li>Contact: hostate247@crypee.io</li> ',
    },
    {
        heading: 'Addendum',
        body: 'This privacy policy will be implemented starting from May 20, 2024. ',
    },
];

const Privacypolicy = () => {
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
                    Crypee Solutions Corp. Privacy Policy
                    <br></br>
                    {/* <br></br>
                    Your Privacy Matters to Us */}
                </Typography>
                <Box width={{ xs: '100%', sm: '100%', md: '900px', lg: '900px' }}>
                    <Typography
                        // sx={{
                        //     fontSize: { lg: '14px', sm: '13px', xs: '12px', md: '14px' },
                        //     fontWeight: 400,
                        //     fontFamily: 'Gmarket',
                        //     color: `${theme.palette.text.lightbrown}`,
                        //     lineHeight: '22.5px',
                        // }}
                        sx={{
                            fontSize: { md: '14px', sm: '13px', xs: '12px' },
                            fontFamily: 'Gmarket',
                            fontWeight: 500,
                            color: '#888',
                            lineHeight: '24px',
                        }}
                    >
                        Crypee Solutions Corp. (hereafter "the Company") complies with the Personal
                        Information Protection Act, the Act on Consumer Protection in Electronic
                        Commerce, the Act on Promotion of Information and Communications Network
                        Utilization and Information Protection, and other related legislations to
                        protect user personal information and to address any related grievances
                        smoothly. If there are any amendments to this Privacy Policy, they will be
                        announced through the website's notices or by individual notification.
                    </Typography>
                </Box>

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
                                    fontSize: { md: '14px', sm: '13px', xs: '12px' },
                                    fontFamily: 'Gmarket',
                                    fontWeight: 500,
                                    color: '#888',
                                    lineHeight: '24px',
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

export default Privacypolicy;
