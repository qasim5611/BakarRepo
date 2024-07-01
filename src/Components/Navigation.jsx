import { useState } from 'react';

import {
    Button,
    Stack,
    Typography,
    Avatar,
    useTheme,
    IconButton,
    Hidden,
    Box,
    Drawer,
    styled,
    Container,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

import logo from '../images/logo.svg';

import { AccountMenu, CountryDropdown, NavigationDropdown } from './DropdownMenus';
import { NavigationAccordion } from './MobileMenus';
import { NavLink, useNavigate } from 'react-router-dom';
import { logout } from '../redux/slices/userSlice';
import { useDispatch } from 'react-redux';
import useMakeToast from '../hooks/makeToast';

const countries = ['Pakistan', 'USA', 'Turkey'];

const Navigation = () => {
    const dispatch = useDispatch();
    const makeToast = useMakeToast();
    const navigate = useNavigate();

    //   ===========logout================
    const handleLogout = () => {
        localStorage.removeItem('persistMe');

        dispatch(logout());
        navigate('/');

        makeToast('You have been logged out.');
    };
    const navItems = [
        { name: 'Dashboard', to: '/dashboard' },
        {
            name: 'Wallets',
            items: [
                { itemName: 'Wallets', link: '/wallets' },
                { itemName: 'Transactions', link: '/transactions' },
                { itemName: 'See Pricing', link: '/pricing-details' },
                { itemName: 'Crypto Prices', link: '/crypto-prices' },
            ],
        },
        {
            name: 'Portfolio',
            items: [
                { itemName: 'Performance', link: '/performance' },
                { itemName: 'Past Performance', link: '/pastperformance' },
                { itemName: 'Career', link: '/career' },
                { itemName: 'Preview Tax Impact', link: '/previewtaximpact' },
            ],
        },
        {
            name: 'Taxes',
            items: [
                { itemName: 'Taxes', link: '/taxes' },
                { itemName: 'Loss Harvesting', link: '/loss-harvesting' },
                { itemName: 'Taxes Item 1' },
                { itemName: 'Taxes Client', link: '/taxes-client' },
            ],
        },
        { name: 'Tax Plan', to: '/tax-plans' },
    ];

    const [state, setState] = useState(false);
    const theme = useTheme();
    const toggleDrawer = () => {
        setState((prev) => (prev === true ? false : true));
    };

    const StyledLink = styled(NavLink)(() => ({
        textDecoration: 'none',
        '&:focus, &:hover, &:visited, &:link, &:active': {
            textDecoration: 'none',
            color: 'black',
        },
    }));

    return (
        <Container maxWidth="xl">
            <Stack
                pt={3}
                pb={6}
                direction={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
            >
                <Box display={{ xs: 'flex', md: 'none' }}>
                    <img src={logo} alt="" />
                </Box>
                <Stack
                    sx={{ display: { xs: 'none', md: 'flex' } }}
                    alignItems={'center'}
                    direction={'row'}
                    gap={{ md: 1, lg: 2 }}
                >
                    <StyledLink to="/">
                        <img src={logo} alt="" />
                    </StyledLink>
                    {navItems.map((item, i) => {
                        return (
                            <Typography
                                key={i}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    color: `${theme.palette.text.lightblue}`,
                                    fontFamily: 'Gmarket',
                                    fontWeight: '500',

                                    cursor: 'pointer',
                                }}
                            >
                                {item.name == 'Wallets' ||
                                item.name == 'Portfolio' ||
                                item.name == 'Taxes' ? (
                                    <NavigationDropdown nameToShow={item.name} items={item.items} />
                                ) : (
                                    <Button
                                        sx={{
                                            textTransform: 'capitalize',
                                            color: '#0B7BC3',
                                            fontSize: { lg: '16px', md: '14px', xs: '12px' },
                                        }}
                                    >
                                        <NavLink
                                            to={item.to}
                                            style={{
                                                textDecoration: 'none',
                                                textTransform: 'capitalize',
                                                color: '#0B7BC3',
                                            }}
                                        >
                                            {item.name}
                                        </NavLink>
                                    </Button>
                                )}
                            </Typography>
                        );
                    })}
                </Stack>

                <Stack sx={{ display: { xs: 'none', md: 'flex' } }} direction={'row'} gap={2}>
                    <CountryDropdown countries={countries} />
                    {/* <Avatar sx={{ bgcolor: '#0B7BC3', cursor: 'pointer' }} onClick={handleLogout} /> */}

                    <AccountMenu />
                </Stack>
                <Hidden mdUp>
                    <Stack gap={2}>
                        <IconButton onClick={() => toggleDrawer()}>
                            <MenuIcon
                                style={{
                                    fontSize: '1.75rem',
                                }}
                            />
                        </IconButton>
                    </Stack>
                    <Drawer anchor="left" open={state} onClose={() => toggleDrawer()}>
                        <Box
                            sx={{
                                width: 250,
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 2,
                                px: 2,
                                pt: 4,
                            }}
                        >
                            <Box>
                                <StyledLink to="/"></StyledLink>
                                <img src={logo} alt="img" width="70%" />
                            </Box>

                            <Stack width={'100%'} gap={2}>
                                {navItems.map((item, i) => {
                                    return (
                                        <Box width={'100%'} key={i}>
                                            {item.name == 'Wallets' ||
                                            item.name == 'Portfolio' ||
                                            item.name == 'Taxes' ? (
                                                <NavigationAccordion
                                                    nameToShow={item.name}
                                                    items={item.items}
                                                />
                                            ) : (
                                                <Button
                                                    sx={{
                                                        width: '100%',
                                                        borderRadius: '0',
                                                        padding: '0',
                                                    }}
                                                >
                                                    <StyledLink to={item.to}>
                                                        <Typography
                                                            sx={{
                                                                padding: '.8em 1em',
                                                                width: '100%',
                                                                textAlign: 'start',
                                                                fontWeight: '500',
                                                                color: `${theme.palette.text.lightblue}`,
                                                                textTransform: 'capitalize',
                                                                '&:hover': {
                                                                    background:
                                                                        ' linear-gradient(180deg, #A1DAFD 0%, #4FA9E3 71.87%)',
                                                                    color: `${theme.palette.text.white}`,
                                                                },
                                                            }}
                                                        >
                                                            {item.name}
                                                        </Typography>
                                                    </StyledLink>
                                                </Button>
                                            )}
                                        </Box>
                                    );
                                })}
                            </Stack>
                            <Button variant="btn1">Add Transactions</Button>
                            <Button variant="btn4" disabled>
                                Add Wallet
                            </Button>
                        </Box>
                    </Drawer>
                </Hidden>
            </Stack>
        </Container>
    );
};

export default Navigation;
