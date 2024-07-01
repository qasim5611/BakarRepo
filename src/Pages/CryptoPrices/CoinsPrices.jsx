import { Box, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledBox = styled(Typography)({
    padding: '0.7em 0',
    borderRadius: '6px',
    background: 'linear-gradient(180deg, #4FA9E3 0%, #A1DAFD 100%)',
    width: '102px',
    textAlign: 'center',
});

const priceBoxes = [
    {
        price: 'PKR 287T',
        title: 'Market Cap',
    },
    {
        price: 'PKR 21.1T',
        title: '24 Hour Volume',
    },
    {
        price: '42%',
        title: 'BTC',
    },
];

const CoinsPrices = () => {
    return (
        <Box sx={{ mt: '1em' }}>
            <Stack
                alignItems={'center'}
                justifyContent={{ xs: 'center', md: 'space-between' }}
                direction="row"
            >
                <Box sx={{ width: { xs: '80%', md: '50%' } }}>
                    <Typography
                        color={'text.darkblue'}
                        sx={{
                            textAlign: { xs: 'center', md: 'unset' },
                            fontFamily: 'Gmarket',
                            fontWeight: 800,
                            fontSize: { xs: '1rem', sm: '1.5rem', md: '1.875rem' },
                            // width: '50%',
                            textTransform: 'uppercase',
                        }}
                    >
                        Top 100 cryptocurrency prices, live charts, and market caps
                    </Typography>
                    <Typography
                        sx={{ textAlign: { xs: 'center', md: 'unset' } }}
                        fontWeight={'500'}
                        color={'text.black'}
                    >
                        Updated 19 minutes ago
                    </Typography>
                </Box>
                <Stack display={{ xs: 'none', md: 'flex' }} direction={'row'} gap={2}>
                    {priceBoxes.map((item, index) => {
                        return (
                            <StyledBox key={index}>
                                <Typography
                                    color="text.white"
                                    sx={{ fontSize: '0.812rem', fontWeight: '600' }}
                                >
                                    {item.price}
                                </Typography>
                                <Typography
                                    color="text.white"
                                    sx={{ fontSize: '0.687rem', fontWeight: '600' }}
                                >
                                    {item.title}
                                </Typography>
                            </StyledBox>
                        );
                    })}
                </Stack>
            </Stack>
        </Box>
    );
};

export default CoinsPrices;
