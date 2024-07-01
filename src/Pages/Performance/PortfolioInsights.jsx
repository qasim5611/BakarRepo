import { Typography, Box, Button, Stack, LinearProgress, Grid } from '@mui/material';

// import portfolioInsightsBg from '../../images/portfolio_insights_bg.png';
// import portfoliobg from '../../images/portfoliobg.png';
import { AssetsDropdown } from '../../Components/DropdownMenus';
import portfoliocart from '../../images/portfoliocart.png';

const assetsCategories = ['All time', 'Most Recent', 'Oldest'];

const insightDetails = [
    {
        title: 'Tax Loss Harvesting',
        description: 'You currently dont have opportunities to harvest tax losses.',
        btnText: 'See Insights',
    },
    {
        title: 'Tax Impact',
        description:
            'If you are considering executing a transaction, use CoinTracker to preview the tax impact.',
        btnText: 'Preview Impact',
    },
    {
        title: 'Funds on Exchanges',
        description: 'You keep 0% of your assets on exchanges.Their current value is 0.00 PKR.',
        btnText: 'Learn More',
    },
];

const coinDiversityDetails = [
    {
        val: '0.8',
        progressVal: 80,
    },
    {
        val: '0.6',
        progressVal: 60,
    },
    {
        val: '0.4',
        progressVal: 40,
    },
    {
        val: '0.2',
        progressVal: 20,
    },
    {
        val: '0',
        progressVal: 0,
    },
];

const PortfolioInsights = () => {
    return (
        <>
            <Box my={10}>
                <Typography
                    color={'text.darkblue'}
                    px={3}
                    sx={{
                        my: 4,
                        fontSize: { xs: '20px', sm: '24px', lg: '32px', md: '30px' },
                        fontWeight: 700,
                    }}
                >
                    Portfolio Insights
                </Typography>

                {/* ==============cards===================== */}
                <Grid container gap={5} justifyContent={'center'} alignItems={'center'}>
                    {insightDetails.map((item, i) => (
                        <Grid item lg={3.5} md={5} xs={12} sm={11} key={i}>
                            <Box
                                sx={{
                                    boxShadow: '0px 0px 60px 0px rgba(0, 0, 0, 0.05)',
                                    border: '2px solid #E7F4FF',
                                    borderRadius: '15px',
                                    background: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                }}
                            >
                                <Box
                                    sx={{
                                        backgroundImage: `url(${portfoliocart})`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: '100% 100%',
                                        py: 2,
                                        borderTopLeftRadius: '15px',
                                        borderTopRightRadius: '15px',
                                        width: '100%',
                                    }}
                                >
                                    <Typography
                                        fontSize={'14px'}
                                        color={'white'}
                                        fontWeight={700}
                                        px={2}
                                    >
                                        {item.title}
                                    </Typography>
                                </Box>
                                <Typography
                                    fontSize={'12px'}
                                    fontWeight={500}
                                    color={'black'}
                                    textAlign={'center'}
                                    lineHeight={'20px'}
                                    fontStyle={'normal'}
                                    py={2}
                                    width={{ lg: '280px', xs: '90%', sm: '100%', md: '300px' }}
                                >
                                    {item.description}
                                </Typography>

                                <Button
                                    sx={{
                                        color: 'white',
                                        borderRadius: '6px',
                                        fontSize: '13px',
                                        fontWeight: 700,
                                        background:
                                            'linear-gradient(180deg, #29A3F1 -27.01%, #2896DC 36.23%, #0B7AC1 110.95%)',
                                        boxShadow: '0px 5px 20px 0px #0B7BC3 inset',
                                        mb: 6,
                                    }}
                                >
                                    {item.btnText}
                                </Button>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Stack
                sx={{ mt: '3em' }}
                direction={{ xs: 'column', md: 'row' }}
                justifyContent={'space-around'}
                alignItems={'center'}
            >
                <Box sx={{ width: { md: '25%' }, mt: '2em' }}>
                    <Typography
                        color={'text.darkblue'}
                        sx={{
                            textAlign: { xs: 'center', md: 'unset' },
                            fontSize: '20px',
                            fontWeight: 600,
                        }}
                    >
                        Your Assets
                    </Typography>
                    <Typography
                        color={'text.darkblue'}
                        sx={{
                            fontSize: '15px',
                            margin: '0.812em 0 2.06em 0',
                            textAlign: { xs: 'center', md: 'unset' },
                            fontFamily: 'Gmarket',
                        }}
                    >
                        Add some wallets or transactions to display the summary
                    </Typography>
                    <Box sx={{ textAlign: { xs: 'center', md: 'unset' } }}>
                        <AssetsDropdown categories={assetsCategories} />
                    </Box>
                </Box>
                <Box
                    sx={{
                        mt: '2em',
                        width: {
                            xs: '95%',
                            sm: '90%',
                            md: '495px',
                        },
                        height: {
                            xs: '186px',
                            sm: '307px',
                        },
                        backgroundColor: 'white',
                        boxShadow: '0px 0px 60px 0px rgba(0, 0, 0, 0.05)',
                        border: '2px solid #E7F4FF',
                        borderRadius: '15px',
                    }}
                >
                    <Typography
                        color={'text.darkblue'}
                        sx={{
                            padding: '1em 2em',
                            fontSize: { xs: '12px', sm: '20px' },
                            fontWeight: 600,
                        }}
                    >
                        Coin Diversity
                    </Typography>
                    <Box>
                        {coinDiversityDetails.map((item, i) => {
                            return (
                                <Stack
                                    key={i}
                                    justifyContent={'flex-end'}
                                    direction={'row'}
                                    alignItems={'baseline'}
                                    sx={{ py: '.3em', px: { xs: '1.5em', sm: '2.7em' } }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: {
                                                xs: '9px',
                                                sm: 'unset',
                                                marginRight: '1em',
                                                fontFamily: 'Gmarket',
                                            },
                                        }}
                                    >
                                        {item.val}%
                                    </Typography>
                                    <LinearProgress
                                        variant="determinate"
                                        value={item.progressVal}
                                        sx={{
                                            width: '90%',
                                            height: { xs: '4.3px', sm: '7px' },
                                            bgcolor: 'lightblue',
                                        }}
                                    />
                                </Stack>
                            );
                        })}
                    </Box>
                </Box>
            </Stack>
        </>
    );
};

export default PortfolioInsights;
