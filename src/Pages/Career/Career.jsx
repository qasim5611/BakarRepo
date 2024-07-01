import React from 'react';

import {
    Box,
    Button,
    Container,
    Grid,
    Menu,
    MenuItem,
    Stack,
    Typography,
    alpha,
    styled,
    useTheme,
} from '@mui/material';

import { KeyboardArrowDown } from '@mui/icons-material';

import careercard from '../../images/careercard.png';
import click from '../../images/click.png';
import rightangle from '../../images/rightangle.png';
import Navigation from '../../Components/Navigation';

const stepperDetails = [
    {
        num: '1',
        title: 'Department',
        img: rightangle,
    },
    {
        num: '2',
        title: 'Location',
        img: rightangle,
    },
    {
        num: '3',
        title: 'Employement Type',
    },
];

const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,

        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));

const Career = () => {
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box  mx={{lg:7,xs:2,md:4,sm:3}}>
            <Navigation />

        
                <Box
                    sx={{
                        border: '2px solid #4FA9E3',
                        width: { sm: '100%', md: '80%', lg: '70%' },
                        background:
                            'linear-gradient(180deg, rgba(11, 123, 196, 0.1) 0%, rgba(91, 172, 222, 0.1) 100%)',
                        borderRadius: { xs: '10px', sm: '48px' },
                        minHeight: '55px',

                        mx: 'auto',
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },

                        justifyContent: { xs: 'center', sm: 'space-around' },
                        alignItems: { xs: 'center' },

                        mb: 8,
                        overflowX: 'scroll',
                        '::-webkit-scrollbar': {
                            display: 'none',
                        },
                    }}
                >
                    {stepperDetails.map((item, i) => {
                        return (
                            <Stack
                                key={i}
                                width={{ xs: '220px', sm: '28%' }}
                                sx={{
                                    justifyContent: {
                                        xs: 'space-between',
                                        sm: !item.img ? 'space-around' : 'space-between',
                                    },
                                }}
                                direction={'row'}
                                alignItems="center"
                            >
                                <Box
                                    sx={{
                                        minWidth: { md: '30px', xs: '19px' },
                                        minHeight: { md: '30px', xs: '19px' },
                                        background:
                                            'linear-gradient(180deg, #0B7BC4 0%, #5BACDE 100%)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        color: 'white',
                                        alignItems: 'center',
                                        fontSize: { md: '10px', xs: '7px' },
                                    }}
                                >
                                    {item.num}
                                </Box>

                                <Box>
                                    <Button
                                        id="demo-customized-button"
                                        aria-controls={open ? 'demo-customized-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        sx={{
                                            bgcolor: 'transparent !important',
                                            color: 'black',

                                            textTransform: 'none',
                                            fontSize: { md: '12px', xs: '10px' },
                                        }}
                                        disableElevation
                                        onClick={handleClick}
                                        endIcon={<KeyboardArrowDown />}
                                    >
                                        {item.title}
                                    </Button>
                                    <StyledMenu
                                        id="demo-customized-menu"
                                        MenuListProps={{
                                            'aria-labelledby': 'demo-customized-button',
                                        }}
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                    >
                                        <MenuItem onClick={handleClose} disableRipple>
                                            Edit
                                        </MenuItem>
                                        <MenuItem onClick={handleClose} disableRipple>
                                            Duplicate
                                        </MenuItem>
                                    </StyledMenu>
                                </Box>
                                <Box
                                    component="img"
                                    src={item.img}
                                    width="27px"
                                    display={{ xs: 'none', sm: 'block' } || (!item.img && 'none')}
                                />
                            </Stack>
                        );
                    })}
                </Box>
                <Typography
                    sx={{
                        fontSize: { md: { md: '30px', xs: '20px' }, sm: '25px', xs: '20px' },
                        fontWeight: 800,
                        fontFamily: 'Gmarket',
                        color: `${theme.palette.text.darkblue}`,
                        textAlign: 'center',
                        textTransform: 'uppercase',
                    }}
                >
                    Careers
                </Typography>
                <Typography
                    sx={{
                        fontSize: { md: '15px', sm: '13px', xs: '12px' },
                        fontWeight: 400,
                        fontFamily: 'Gmarket',
                        mt: 2,
                        textAlign: 'center',
                        color: `${theme.palette.text.lightbrown}`,
                    }}
                >
                    crypee(Tax Software) makes cryptocurrency portfolio tracking and tax compliance
                    simple. Beyond <br /> cryptocurrency, we are building a general automated
                    financial assistant for all financial assets. Our mission <br /> is to increase
                    the financial freedom and prosperity of the world.
                </Typography>

                <Box mt={10}>
                    <Grid container spacing={4}>
                        {[1, 2, 3, 4].map((item, i) => {
                            return (
                                <Grid item xs={12} lg={3} sm={6} md={4} key={i}>
                                    <Box
                                        sx={{
                                            padding: '2rem 3rem',
                                            background: `url(${careercard}) `,
                                            backgroundSize: '100% 100%',
                                            minHeight: '300px',
                                            height: '100%',
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontSize: { md: '15px', sm: '13px', xs: '12px' },
                                                fontWeight: 600,
                                                fontFamily: 'Gmarket',
                                                mt: 4,
                                                textAlign: 'center',
                                                color: `${theme.palette.text.darkblue}`,
                                            }}
                                        >
                                            Data Analyst (Remote)
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: { md: '10px', sm: '9px', xs: '8px' },
                                                fontWeight: 600,
                                                fontFamily: 'Poppins',
                                                mt: 4,
                                                textAlign: 'center',
                                                color: `${theme.palette.text.lightbrown}`,
                                            }}
                                        >
                                            Engineering • San Francisco Bay Area, London Area,
                                            Greater Toronto Area, Los Angeles Metropolitan Area,
                                            Remote, New York City Metropolitan Area • Full time
                                        </Typography>
                                        <Box sx={{ marginTop: '2rem', textAlign: 'center' }}>
                                            <Button variant="btn1">Apply Now</Button>
                                        </Box>
                                    </Box>
                                </Grid>
                            );
                        })}
                    </Grid>
                    <Box>
                        <Typography
                            sx={{
                                fontSize: { md: '20px', sm: '17px', xs: '14px' },
                                fontWeight: 600,
                                fontFamily: 'Gmarket',
                                mt: 10,
                                textAlign: 'center',
                                color: `${theme.palette.text.darkblue}`,
                            }}
                        >
                            What is it like working at crypee(Tax Software)?
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: { md: '15px', sm: '13px', xs: '10px' },
                                fontWeight: 400,
                                fontFamily: 'Gmarket',
                                mt: 4,
                                textAlign: 'center',
                                color: `${theme.palette.text.lightbrown}`,
                            }}
                        >
                            We are a fully internationally distributed, tight-knit team. We have
                            minimal process, and the majority of our time is spent <br /> working
                            and collaborating asynchronously through tools like Figma, GitHub,
                            Linear, Notion, Slack, Zendesk, and Zoom. We also ,<br /> stay aligned
                            and bonded through weekly sprints, standups, all hands, and socials. We
                            aim to empower every individual on
                            <br /> the team with full transparency, ownership, autonomy, and clear
                            objectives. Learn more about our guiding principels
                        </Typography>
                    </Box>
                    <Container maxWidth="sm">
                        <Box
                            sx={{
                                border: '2px solid #4FA9E3',
                                padding: { md: '3rem', sm: '2rem', xs: '1rem' },
                                marginTop: '5rem',
                                background:
                                    '0px 0px 60px 0px rgba(0, 0, 0, 0.05)',
                                borderRadius: '12px',
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: { md: '20px', sm: '17px', xs: '15px' },
                                    fontWeight: 600,
                                    fontFamily: 'Gmarket',
                                    mt: 1,
                                    textAlign: 'center',
                                    color: `${theme.palette.text.darkblue}`,
                                }}
                            >
                                Some things we’re proud of:
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: { md: '15px', sm: '12px', xs: '9px' },
                                    fontWeight: 400,
                                    fontFamily: 'Gmarket',
                                    mt: 4,
                                    color: '#585858',
                                    textAlign: 'jsutify',
                                }}
                            >
                                3% of all global cryptocurrency assets are tracked on CoinTracker
                                ($50B daily)
                            </Typography>
                            <Box display="flex" gap={2} mt={2}>
                                <Box>
                                    <img src={click} alt="" />
                                </Box>
                                <Typography
                                    sx={{
                                        fontSize: { md: '15px', sm: '12px', xs: '9px' },
                                        fontWeight: 400,
                                        fontFamily: 'Gmarket',

                                        color: '#585858',
                                        
                                    }}
                                >
                                    {' '}
                                    Profitable
                                </Typography>
                            </Box>
                            <Box display="flex" gap={2} mt={2}>
                                <Box>
                                    <img src={click} alt="" />
                                </Box>
                                <Typography
                                    sx={{
                                        fontSize: { md: '15px', sm: '12px', xs: '9px' },
                                        fontWeight: 400,
                                        fontFamily: 'Gmarket',

                                        color: '#585858',
                                    }}
                                >
                                    Partnered with Coinbase, TurboTax, H&R Block, OpenSea, and other
                                    industry leaders
                                </Typography>
                            </Box>
                            <Box display="flex" gap={2} mt={2}>
                                <Box>
                                    <img src={click} alt="" />
                                </Box>
                                <Typography
                                    sx={{
                                        fontSize: { md: '15px', sm: '12px', xs: '9px' },
                                        fontWeight: 400,
                                        fontFamily: 'Gmarket',

                                        color: '#585858',
                                    }}
                                >
                                    Venture-backed by Accel, Y Combinator, and other top investors
                                </Typography>
                            </Box>{' '}
                            <Box display="flex" gap={2} mt={2}>
                                <Box>
                                    <img src={click} alt="" />
                                </Box>
                                <Typography
                                    sx={{
                                        fontSize: { md: '15px', sm: '12px', xs: '9px' },
                                        fontWeight: 400,
                                        fontFamily: 'Gmarket',

                                        color: '#585858',
                                    }}
                                >
                                    ounders: Jon previously built TextNow (200M downloads), Chandan
                                    was previously a product manager at Google
                                </Typography>
                            </Box>
                            <Box display="flex" gap={2} mt={2}>
                                <Box>
                                    <img src={click} alt="" />
                                </Box>
                                <Typography
                                    sx={{
                                        fontSize: { md: '15px', sm: '12px', xs: '9px' },
                                        fontWeight: 400,
                                        fontFamily: 'Gmarket',

                                        color: '#585858',
                                    }}
                                >
                                    Awesome benefits
                                </Typography>
                            </Box>
                        </Box>
                    </Container>
                </Box>
          
        </Box>
    );
};

export default Career;
