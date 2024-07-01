import React from 'react';

import { Box, Container, Typography, useTheme } from '@mui/material';
import getbg from '../../images/getbg.png';
import Header from '../../Components/Header';

const rightsData = [
    {
        heading: 'Knowledge:',
        body: 'You may request information regarding the categories of personal information that Crypee has collected about you, the business purpose behind collecting your personal information, the sources from which this information was obtained, whether your personal information has been shared for business purposes, the categories of personal information shared, and the third parties with whom we have shared your personal information. Detailed information on this topic can be found in the Personal Information Collection, Use, and Sharing sections above.',
    },
    {
        heading: 'Access and Data Portability:',
        body: 'You have the right to request a copy of the personal information we have on file about you in a structured, commonly used, and machine-readable format.',
    },
    {
        heading:'Deletion and Correction:',
        body:'You can request the deletion or correction of personal information we hold about you.'
    },
    {
        heading:'Objection:',
        body:'You may object to how we use your personal information.'
    },
    {
        heading:'Restrict Processing:',
        body:'You can request the suspension of our processing of your personal information, for example, if you want us to verify its accuracy or the basis for processing.        '
    },
    {
        heading:'Opt-Out:',
        body:'You have the option to opt out of receiving marketing communications. Instructions on how to do so can be found in our marketing communications or your settings page.'
    },
    {
        heading:'Withdraw Consent:',
        body:'If we rely on your consent to process your personal information, you have the right to withdraw that consent, as indicated when you originally consented or by contacting us as outlined in this Privacy Policy.<br>Please contact us to exercise your rights. If you have an authorized agent, they can make requests on your behalf following the same process. After receiving your request, we may require additional information to confirm your identity. We will not discriminate against you for exercising your rights.'
    },
    {
        heading:'Do Not Track:',
        body:'We respect "Do Not Track" signals and do not track, use advertising cookies, or deploy advertising when we receive such signals.'
    },
    {
       heading:'Children',
       body:'Our Service is not intended for use by children under the age of 18. Crypee does not knowingly collect personal information from individuals under the age of 18. If you believe that a child under the age of 18 has provided personal information to Crypee, please contact us, and we will promptly delete the information.'
    },
    {
        heading:' Links to Other Websites',
        body:'The Service may include links to websites not operated or controlled by Crypee, including social media services ("Third Party Sites"). Any information you share with Third Party Sites will be governed by their specific privacy policies and terms of service, not by this Privacy Policy. These links are provided for informational purposes and do not imply endorsement or review of these sites by Crypee. For information on the privacy practices and policies of Third Party Sites, please contact them directly.'
    },
    {
        heading:'Security',
        body:'We employ various technical, organizational, and physical safeguards to protect the personal information we collect. However, no security measures are entirely foolproof, and we cannot guarantee the absolute security of your personal information. Therefore, you use the Service at your own risk.'
    },
    {
        heading:'Changes to the Privacy Policy',
        body:'The Service and our business may evolve over time, resulting in potential changes to this Privacy Policy. When such changes occur, we will post an updated version on this page, unless applicable law requires an alternative form of notice. By continuing to use our Service or providing us with personal information after we have posted an updated Privacy Policy or notified you by other means where applicable, you consent to the revised Privacy Policy and its described practices.'
    }

];

const Security = () => {
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
                    Sharing of Personal Information
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
                        We do not engage in the sale, rental, licensing, or leasing of your personal
                        information to third parties. However, under certain circumstances, and
                        unless prohibited by law, we may share the categories of personal
                        information detailed above with the following categories of third parties:
                    </Typography>
                </Box>
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
                    Service Providers:
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
                        In order to meet our operational needs and fulfill specific services and
                        functions, we may share personal information with service providers. These
                        providers may include hosting services, cloud services, other information
                        technology services, email communication software, email newsletter
                        services, advertising and marketing services, payment processors, customer
                        relationship management, customer support services, and analytics services.
                        These third parties will access, process, or store personal information as
                        required to carry out their responsibilities on our behalf. We take
                        reasonable measures to ensure that our service providers adhere to the
                        security standards we apply to your personal information.
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
                    Professional Advisors:
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
                    We may share personal information with our professional advisors, such as
                    lawyers and accountants, when such sharing is necessary to facilitate the
                    services they provide to us. If you opt to share your Crypee account with one of
                    your tax or other advisors, we will share your personal information with them as
                    needed.
                </Box>
                {/* =====Business============ */}
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
                    Business Transfers:
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
                    If we are involved in a merger, acquisition, financing, reorganization,
                    bankruptcy, receivership, dissolution, sale of all or part of our assets, or the
                    transition of our service to another provider (collectively referred to as a
                    Transaction), your personal information may be shared during the due diligence
                    process with involved parties and others assisting in the Transaction.
                    Additionally, your personal information may be transferred to a successor or
                    affiliate as part of or after the Transaction, along with other assets.
                </Box>
                {/* =========legal=========== */}

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
                    Legal Requirements:
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
                    We do not proactively disclose your personal information to government
                    authorities or regulators, but we may disclose such information when required
                    for compliance and protection purposes as described above.
                </Box>
                {/* ========retension========= */}
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
                    Retention of Personal Information
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
                    We retain personal information for a reasonable duration, as long as necessary
                    to fulfill the purposes outlined in this Privacy Policy, to meet our business
                    requirements, or as mandated by law (e.g., for tax, legal, accounting, or other
                    obligations), whichever is the longer duration.<br></br>
                    In determining the appropriate retention period, we take into account factors
                    such as the quantity, nature, and sensitivity of the personal information,
                    potential risks of unauthorized use or disclosure, the objectives for which we
                    use the personal information, and whether we can achieve those objectives
                    through alternative means, as well as applicable legal requirements.
                </Box>
                {/* =============right and choices================ */}
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
                    Your Rights and Choices
                </Typography>
                <Typography>As a user of Crypee, you possess the following rights:</Typography>

                {rightsData.map((item) => (
                    <Box key={item} width={{ xs: '100%', sm: '100%', md: '900px', lg: '900px' }}>
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
                            {item.heading}
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: { lg: '14px', sm: '13px', xs: '12px', md: '14px' },
                                fontWeight: 400,
                                fontFamily: 'Gmarket',
                                color: `${theme.palette.text.lightbrown}`,
                                lineHeight: '22.5px',
                            }}
                            dangerouslySetInnerHTML={{ __html: item.body }}
                        >
                            
                        </Typography>
                        
                    </Box>
                ))}
            </Container>
        </Box>
    );
};

export default Security;
