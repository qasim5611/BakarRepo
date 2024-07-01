import { Box, Button, Stack, Typography } from '@mui/material';

import taxPlanBg from '../../images/tax_plan_bg.png';

const OffersCards = ({ plansCard }) => {
    return (
        <>
            <Typography
                color="text.darkblue"
                textAlign={'center'}
                fontSize={{ xs: '25px', md: '30px' }}
                fontFamily={'Gmarket'}
                fontWeight="800"
                textTransform="uppercase"
                mt={10}
                mb={7}
            >
                Tax Plans
            </Typography>
            <Stack direction={'row'} flexWrap={'wrap'} gap={6} justifyContent={'center'}>
                {plansCard?.map((item, i) => {
                    return (
                        <Box
                            key={i}
                            sx={{
                                backgroundImage: `url(${taxPlanBg})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: '100% 100%',
                                width: '240px',
                                minHeight: '252px',
                                padding: '1.3rem 1rem',
                            }}
                        >
                            <Box sx={{ py: '.7em' }}>
                                <Typography
                                    color={'text.darkblue'}
                                    sx={{ textAlign: 'center', fontSize: '1rem', fontWeight: 600 }}
                                >
                                    {item.plans}
                                </Typography>
                                <Typography
                                    color={'text.darkblue'}
                                    sx={{ textAlign: 'center', fontSize: '1rem', fontWeight: 600 }}
                                >
                                    ${item.amount}
                                </Typography>
                            </Box>

                            <Typography
                                color="text.lightbrown"
                                sx={{
                                    padding: '1em',
                                    textAlign: 'center',
                                    minHeight: '80px',
                                }}
                                fontSize={'14px'}
                            >
                                {item.heading}
                            </Typography>

                            <Box sx={{ textAlign: 'center' }}>
                                <Button
                                    variant="btn1"
                                    sx={{ fontSize: '0.67rem', fontWeight: 600 }}
                                >
                                    {item.btn}
                                </Button>
                                <Typography
                                    sx={{ color: '#969595' }}
                                    fontSize={'11px'}
                                    fontWeight={500}
                                    mt={1}
                                    textAlign={'center'}
                                >
                                    {item.wallet}
                                </Typography>
                            </Box>
                        </Box>
                    );
                })}
            </Stack>
        </>
    );
};

export default OffersCards;
