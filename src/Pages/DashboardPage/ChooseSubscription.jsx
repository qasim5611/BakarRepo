import { Stack, Typography, Button, Container } from '@mui/material';
const ChooseSubscription = () => {
   
    return (
        <Container>
            <Stack sx={{py:'2em'}} direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Typography sx={{fontSize:'1.5rem',}}>Your Portfolio</Typography>
                <Stack direction={'row'} gap={2}>
                    <Button>1D</Button>
                    <Button>1W</Button>
                    <Button>1M</Button>
                    <Button>3M</Button>
                    <Button>1Y</Button>
                    <Button>ALL</Button>
                </Stack>
            </Stack>
        </Container>
    );
};

export default ChooseSubscription;
