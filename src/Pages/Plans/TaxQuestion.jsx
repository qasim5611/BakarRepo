import React from 'react';
import { useTheme } from '@emotion/react';
import { Link } from 'react-router-dom';
import { Box, Button, Container, Grid, Typography } from '@mui/material';

import StyledAccordian from './StyledAccordian';
import CustomPlan from '../../images/TaxPlans/customPlanBg.png';
// import qusendbg from '../../images/qusendbg.png';

const TaxQuestion = () => {
    const theme = useTheme();
    const questionArr = [
        {
            qus: 'Do you have to pay taxes on crypto? How is crypto taxed?',
            ans: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
        },
        {
            qus: 'Do you pay taxes on crypto losses? ',
            ans: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
        },
        {
            qus: 'How do you report taxes on crypto',
            ans: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
        },
        {
            qus: 'Can I regenerate my taxes report after I make a change without paying again?',
            ans: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
        },
        {
            qus: 'How is the number of transactions counted? ',
            ans: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
        },
        {
            qus: 'What if I have a transaction count in between tax plans? ',
            ans: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
        },
        {
            qus: 'What happens if I go above the transaction limit after  purchasing a plan?  ',
            ans: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
        },
        {
            qus: 'What’s the difference between portfolio subscriptions and tax plans',
            ans: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
        },
    ];
    return (
        <>
           
                <Typography
                    color={theme.palette.text.darkblue}
                    textAlign={'center'}
                    fontSize={'15px'}
                    fontWeight={600}
                    fontFamily={'Gmarket'}
                    mt={9}
                >
                    KNOWLEDGE BASE
                </Typography>
                <Typography
                    color={theme.palette.text.darkblue}
                    textAlign={'center'}
                    fontSize={{ xs: '20px', md: '25px' }}
                    fontWeight={800}
                    fontFamily={'Orbitron'}
                    textTransform="uppercase"
                >
                    Frequently Asked Questions
                </Typography>
                <Typography
                    textAlign={'center'}
                    fontSize={'15px'}
                    fontFamily={'Gmarket'}
                    color={'theme.lightbrown'}
                >
                    Get advice and answers from the crypee(Tax Software) team.
                </Typography>

                <Grid container spacing={4} my={2}  >
                    {questionArr.map((item, i) => {
                        return (
                            <Grid item xs={12} sm={12} md={6} key={i}>
                                <StyledAccordian item={item} i={i} />
                            </Grid>
                        );
                    })}
                </Grid>
           

            {/* <Box
                sx={{
                    backgroundImage: `url(${CustomPlan})`,
                    backgroundPosition: 'center',
                    backgroundSize: '100% 100%',
                    backgroundRepeat: 'no-repeat',
                    py: 7,
                    mt: 11,
                }}
            >
                <Typography
                    fontFamily={'Poppins'}
                    fontWeight={600}
                    fontSize={'15px'}
                    color={theme.palette.text.darkblue}
                    textAlign={'center'}
                    pt={3}
                >
                    FOR POWER USERS
                </Typography>
                <Typography
                    fontFamily={'Gmarket'}
                    fontWeight={800}
                    fontSize={'25px'}
                    color={theme.palette.text.darkblue}
                    textAlign={'center'}
                    mt={'6px'}
                    textTransform={'uppercase'}
                >
                    Looking for a custom plan?
                </Typography>
                <Typography
                    fontFamily={'Gmarket'}
                    fontSize={'15px'}
                    color={theme.palette.text.black}
                    textAlign={'center'}
                    mt={'6px'}
                >
                    We offer unlimited transactions and custom features for the most power users.
                </Typography>
                <Box display="flex" alignItems="center" justifyContent="center" mt={2}>
                    <Link to="/pricing-details">
                        <Button variant="btn1" sx={{ px: 4, py: 1.5 }}>
                            See Pricing
                        </Button>
                    </Link>
                </Box>
            </Box> */}

            {/* <Box
                sx={{
                    backgroundImage: `url(${qusendbg})`,
                    backgroundPosition: 'center',
                    backgroundSize: '100% 100%',
                    backgroundRepeat: 'no-repeat',
                    py: 7,
                    mt: 11,
                }}
            >
                <Typography
                    fontFamily={'Poppins'}
                    fontSize={'15px'}
                    color={theme.palette.text.white}
                    textAlign={'center'}
                >
                    FOR POWER USERS
                </Typography>
                <Typography
                    fontFamily={'Orbitron'}
                    fontSize={'25px'}
                    color={theme.palette.text.white}
                    textAlign={'center'}
                    textTransform={'uppercase'}
                    mt={1}
                >
                    Looking for a custom plan?
                </Typography>
                <Typography
                    fontFamily={'Poppins'}
                    fontSize={'15px'}
                    color={theme.palette.text.white}
                    textAlign={'center'}
                    textTransform={'uppercase'}
                    mt={1}
                >
                    We offer unlimited transactions and custom features for the most power users.
                </Typography>
                <Box textAlign="center" mt={5}>
                    <Button variant="btn1" padding={'0.7rem 2rem'}>
                        See Pricing
                    </Button>
                </Box>
            </Box> */}
        </>
    );
};

export default TaxQuestion;
