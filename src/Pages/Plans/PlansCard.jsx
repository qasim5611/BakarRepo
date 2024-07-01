import React from 'react';
import {
    Box,
    Button,
    Dialog,
    Divider,
    Grid,
    InputBase,
    Stack,
    Typography,
    useTheme,
} from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';

import cardbgc from '../../images/TaxPlans/taxxsoftcards.png'
// import LossDialogBox from '../../images/TaxPlans/lossDialog.png';

const PlansCard = ({ plansCard, introDetails }) => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            {!introDetails?.title ? (
                <Typography
                    color={theme.palette.text.darkblue}
                    textAlign={'center'}
                    fontSize={{ xs: '25px', md: '30px' }}
                    fontFamily={'Gmarket'}
                    mt={3}
                    textTransform="uppercase"
                >
                    Get started today with crypee(Tax Software)
                </Typography>
            ) : (
                <Typography
                    color={theme.palette.text.lightbrown}
                    textAlign={'center'}
                    fontSize="1rem"
                    fontFamily={'Gmarket'}
                    fontWeight="600"
                    mt={1}
                    textTransform="uppercase"
                >
                    {introDetails.title}
                </Typography>
            )}

            {introDetails?.offer ? (
                <Typography
                    color={theme.palette.text.darkblue}
                    textAlign={'center'}
                    fontSize={{ xs: '25px', md: '30px' }}
                    fontFamily={'Gmarket'}
                    fontWeight="800"
                    textTransform="uppercase"
                    mt={1}
                >
                    {introDetails.offer}
                </Typography>
            ) : null}

            {introDetails?.status ? (
                <Typography
                    color={theme.palette.text.lightbrown}
                    textAlign={'center'}
                    fontSize="1rem"
                    fontFamily={'Gmarket'}
                    mt={1}
                >
                    {introDetails.status}
                </Typography>
            ) : null}

            {!introDetails ? (
                <Typography
                    sx={{
                        fontFamily: 'Gmarket',
                        fontSize: { xs: '15px', md: '18px' },
                        fontWeight: 500,
                        lineHeight: '24px',
                        color: `${theme.palette.text.lightbrown}`,
                        textAlign: 'center',
                        mt: 1,
                    }}
                >
                    Automatic crypto portfolio management and tax software
                </Typography>
            ) : null}

            <Grid justifyContent={'center'} align="center" container my={1}>
                {plansCard.map((item, i) => {
                    return (
                        <Grid sx={{ mt: '1em' }} item xs={12} sm={6} md={4} lg={3} key={i}>
                            <Stack
                                // border={1}

                                justifyContent={'space-between'}
                                sx={{
                                    backgroundImage: `url(${cardbgc})`,
                                    backgroundSize: '100%  100%',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    px: 1.7,
                                    py: 1,
                                    height: '100%',
                                    width: { xs: '100%', sm: '90%', md: '250px', lg: '250px' },
                                }}
                            >
                                <Box>
                                    <Typography
                                        fontFamily={'Gmarket'}
                                        fontWeight={700}
                                        fontSize={'17px'}
                                        fontStyle={'normal'}
                                        textAlign={'center'}
                                        color={theme.palette.text.darkblue}
                                    >
                                        {item.plans}
                                    </Typography>
                                    <Typography
                                        fontFamily={'Gmarket'}
                                        fontWeight={500}
                                        fontSize={
                                            item.amount?.toLowerCase() == 'priced individually'
                                                ? '14px'
                                                : '22px'
                                        }
                                        fontStyle={'normal'}
                                        textAlign={'center'}
                                        color={theme.palette.text.black}
                                    >
                                        <sup
                                            style={{
                                                fontFamily: 'Gmarket',
                                                fontSize: '10px',
                                                color: `${theme.palette.text.black}`,
                                            }}
                                        >
                                            {item.type}
                                        </sup>
                                        {item.amount}
                                        <span
                                            style={{
                                                fontFamily: 'Gmarket',
                                                fontSize: '10px',
                                                color: `${theme.palette.text.black}`,
                                            }}
                                        >
                                            {item.validity}
                                        </span>
                                    </Typography>
                                    <Divider sx={{ bgcolor: 'white', mt: 0.4 }} />

                                    <Typography
                                        fontFamily={'Poppins'}
                                        fontWeight={400}
                                        fontSize={'12px'}
                                        fontStyle={'normal'}
                                        textAlign={'center'}
                                        color={theme.palette.text.black}
                                        mt={3}
                                    >
                                        {item.heading}
                                    </Typography>
                                    <Stack justifyContent={'space-between'}>
                                        {item.details ? (
                                            item.details?.map((detail, i) => {
                                                return (
                                                    <Stack
                                                        sx={{
                                                            '&:first-of-type div': {
                                                                fontWeight: 700,
                                                            },
                                                        }}
                                                        gap={1}
                                                        alignItems={'baseline'}
                                                        direction={'row'}
                                                        key={i}
                                                    >
                                                        <DoneIcon
                                                            fontSize="5px"
                                                            sx={{ color: 'white' }}
                                                        />
                                                        <Typography
                                                            component="div"
                                                            fontFamily={'Gmarket'}
                                                            // fontWeight={400}
                                                            fontSize={'14px'}
                                                            fontStyle={'normal'}
                                                            textAlign={'justify'}
                                                            color={theme.palette.text.black}
                                                            mt={1}
                                                        >
                                                            {detail}
                                                        </Typography>
                                                    </Stack>
                                                );
                                            })
                                        ) : (
                                            <Typography
                                                fontFamily={'Gmarket'}
                                                // fontWeight={400}
                                                fontSize={'14px'}
                                                fontStyle={'normal'}
                                                textAlign={'justify'}
                                                color={theme.palette.text.black}
                                                mt={2}
                                            >
                                                {item.text}
                                            </Typography>
                                        )}
                                    </Stack>
                                </Box>
                                <Stack justifyContent={'flex-end'} alignItems={'center'}>
                                    <Typography
                                        color={theme.palette.text.black}
                                        fontSize={'12px'}
                                        fontWeight={500}
                                        textAlign={'center'}
                                    >
                                        {item.trial}
                                    </Typography>
                                    <Button
                                        sx={{ my: '0.5em' }}
                                        variant="btn1"
                                        onClick={handleClickOpen}
                                    >
                                        {item.btn}
                                    </Button>
                                    <Typography
                                        color={theme.palette.text.darkblue}
                                        fontSize={'10px'}
                                        fontWeight={500}
                                        textAlign={'center'}
                                    >
                                        {item.wallet}
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Grid>
                    );
                })}
            </Grid>

            {/* dailog boxx */}
            <div>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    maxWidth="lg"
                    sx={{
                        '.MuiDialog-paperScrollPaper': {
                            borderRadius: '10px',
                            background: 'white',
                            p: 2,
                        },
                    }}
                >
                    <Box
                        sx={{
                           boxShadow:'0px 0px 60px 0px rgba(0, 0, 0, 0.05)',
                           borderRadius:'15px',
                            px: { md: 4, xs: 2 },
                            py: 7,
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: '23px',
                                fontWeight: 600,
                                fontFamily: 'Gmarket',
                                color: `${theme.palette.text.darkblue}`,
                                textTransform: 'uppercase',
                            }}
                        >
                            Enthusiast Portfolio Assistant Plan
                        </Typography>
                        <Box
                            display={'flex'}
                            alignItems={'center'}
                            justifyContent={'space-between'}
                            width={'90%'}
                        >
                            <Typography
                                sx={{
                                    fontSize: '15px',
                                    fontFamily: 'Gmarket',
                                    color: `${theme.palette.text.black}`,
                                }}
                            >
                                Billed monthly, 30-day money-back guarantee
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: '20px',
                                    fontWeight: 600,
                                    fontFamily: 'Gmarket',
                                    color: `${theme.palette.text.black}`,
                                }}
                            >
                                PKR2,248.00
                            </Typography>
                        </Box>

                        <Typography
                            sx={{
                                fontSize: '15px',
                                fontWeight: 500,
                                fontFamily: 'Gmarket',
                                color: `${theme.palette.text.black}`,
                                mb: 1.3,
                                mt: 3,
                            }}
                        >
                            Payment info
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                background:
                                    'linear-gradient(180deg, rgba(11, 123, 196, 0.35) 0%, rgba(91, 172, 222, 0.35) 100%)',
                                border: '1px solid #FFFFFF',
                                borderRadius: '10px',
                                width: '100%',
                                p: 2,
                                color: 'white',
                            }}
                        >
                            <InputBase
                                placeholder="Card Number"
                                type="number"
                                sx={{
                                    '& input::placeholder': {
                                        color: '#A1A1A1', // replace with desired color
                                        opacity: 1,
                                    },
                                }}
                            />
                            <Typography fontSize={'15px'} color={'#A1A1A1'}>
                                MM / YY / CVC
                            </Typography>
                        </Box>

                        <Typography
                            sx={{
                                fontSize: '15px',
                                fontFamily: 'Gmarket',
                                color: `${theme.palette.text.black}`,
                                mt: 2,
                            }}
                        >
                            You are eligible for a free 7-day trial for this subscription.
                            <br /> Your first payment will process on Mar 21, 2023.
                        </Typography>

                        <Button variant="btn1" sx={{ mt: 3, px: 2.5, py: 1.4 , color: `${theme.palette.text.white}`}} >
                            Start free trial
                        </Button>
                        <Button
                            variant="btn3"
                            sx={{ mt: 3, px: 4, py: 1.4, ml: 4 , color: `${theme.palette.text.black}`}}
                            onClick={handleClose}
                            
                        >
                            Cancel
                        </Button>
                    </Box>
                </Dialog>
            </div>
        </>
    );
};

export default PlansCard;
