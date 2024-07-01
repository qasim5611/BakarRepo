import React, {useContext, useEffect, useState} from 'react';
import {
    Container,
    Button,
    Box,
    IconButton,
    Stack,
    Drawer,
    Hidden,
    Typography,
    useTheme,
    styled, MenuItem, Menu,
} from '@mui/material';

import { Language, Settings } from '@mui/icons-material';
import { NavLink, useNavigate } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import logo from '../images/logo.svg';
import i18next from '../Localization/i18next';
import { changeLanguage } from 'i18next';
// import { DataContext } from '../utils/ContextAPI';
import { useSelector } from 'react-redux';
import {DataContext} from "../utils/ContextAPI";
import gbFlag from '../images/gb.svg';
import krFlag from '../images/kr.svg';

const StyledLink = styled(NavLink)(() => ({
    textDecoration: 'none',
    '&:focus, &:hover, &:visited, &:link, &:active': {
        textDecoration: 'none',
        color: 'black',
    },
}));

const Header = () => {
    // const { loggedIn } = useContext(DataContext);
    const users = useSelector((state) => state.users);
    const [state, setState] = useState(false);
    const theme = useTheme();
    const [presistLogin, setPresistLogin] = useState(false);
    let storedData = JSON.parse(localStorage.getItem('persistMe'));
    useEffect(() => {
        if (storedData?.user?.token) {
            setPresistLogin(true);
        } else {
            setPresistLogin(false);
        }
    }, [storedData]);

    const {lang: language,changeLANG} = useContext(DataContext);

    useEffect(() => { console.log('lng',language)  }, [language]);

    const toggleDrawer = () => {
        setState((prev) => (prev !== true));
    };
    const navigate = useNavigate();

    const data = [
        {
            title: i18next.t('header.Products'),
            path: '/product',
        },
        {
            title: i18next.t('header.Win'),
            path: '/win',
        },
        {
            title:  i18next.t('header.Nft'),
            path: '/nft',
        },
    ];

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (lang) => {
        setAnchorEl(null);
        if( lang === 'en' || lang === 'kr'){
            changeLANG(lang);
        }
    };

    return (
        <>
            <Container maxWidth="xl">
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    width="100%"
                    gap={3}
                    pt={3}
                >
                    <Box>
                        <StyledLink to="/">
                            <img
                                src={logo}
                                alt=""
                                style={{
                                    width: '100%',
                                    maxWidth: '130px',
                                }}
                            />
                        </StyledLink>
                    </Box>
                    <Hidden mdDown>
                        <Box display="flex" justifyContent="center" gap={4}>
                            {data.map((item, i) => {
                                return (
                                    // <NavLink
                                    //     to={item?.path}
                                    //     style={{ textDecoration: 'none', color: 'white' }}
                                    //     key={i}
                                    // >
                                    <Typography
                                        key={i}
                                        sx={{
                                            color: `${theme.palette.text.lightblue}`,
                                            fontFamily: 'Poppins',
                                            fontWeight: '500',
                                            fontSize: '16px',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        {item?.title}
                                    </Typography>
                                    // </NavLink>
                                );
                            })}
                        </Box>
                        <Box
                            display="flex"
                            gap={4}
                            justifyContent="end"
                            alignItems="center"
                            width="100%"
                        >
                            <StyledLink to="#">
                                <Language
                                    sx={{
                                        color: `${theme.palette.text.darkblue}`,
                                        cursor: 'pointer',
                                        mt: '8px',
                                    }}
                                    aria-controls={open ? 'demo-positioned-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                />
                                <Menu
                                    id="demo-positioned-menu"
                                    aria-labelledby="demo-positioned-button"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}

                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                >
                                    <MenuItem onClick={() => handleClose(language === 'kr' ? 'en' : 'kr')}>
                                        {language === 'kr' ? (
                                            <>
                                                <img src={gbFlag} width={'25px'} height={'20px'} alt="English Flag" /> &nbsp; EN
                                            </>
                                        ) : (
                                            <>
                                                <img src={krFlag} width={'25px'} height={'20px'} alt="Korean Flag" /> &nbsp; KR
                                            </>
                                        )}
                                    </MenuItem>
                                    {/*<MenuItem onClick={() => handleClose('kr')}>Korean</MenuItem>*/}
                                </Menu>
                            </StyledLink>

                            {/* <StyledLink to="/dashboard">
                                <Settings
                                    sx={{
                                        color: `${theme.palette.text.darkblue}`,
                                        cursor: 'pointer',
                                        mt: '8px',
                                    }}
                                />
                            </StyledLink> */}
                            {presistLogin && (
                                <Button
                                    variant="btn2"
                                    onClick={() => {
                                        navigate('/dashboard');
                                    }}
                                >
                                    {i18next.t('header.dashboard')}
                                </Button>
                            )}
                            {!presistLogin && (
                                <Button
                                    variant="btn2"
                                    onClick={() => {
                                        navigate('/login');
                                    }}
                                >
                                    {i18next.t('general.signin')}
                                </Button>
                            )}

                            <Button variant="btn1">{i18next.t('general.try_it_free')}</Button>
                        </Box>
                    </Hidden>
                    <Hidden mdUp>
                        <Stack gap={2}>
                            <IconButton onClick={() => toggleDrawer()}>
                                <MenuIcon
                                    style={{
                                        fontSize: '28px',
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
                                    alignItems: 'center',
                                    gap: 3,
                                    px: 2,

                                    pt: 4,
                                }}
                            >
                                <Box>
                                    {/* <NavLink
                                            to="/"
                                            style={{ textDecoration: 'none', color: 'white' }}
                                        > */}
                                    <img src={logo} alt="img" width="100%" />
                                    {/* </NavLink> */}
                                </Box>
                                <StyledLink to="#">
                                    <Language
                                        sx={{
                                            color: `${theme.palette.text.darkblue}`,
                                            cursor: 'pointer',
                                            mt: '8px',
                                        }}
                                        aria-controls={open ? 'demo-positioned-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={handleClick}
                                    />
                                    <Menu
                                        id="demo-positioned-menu"
                                        aria-labelledby="demo-positioned-button"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}

                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'left',
                                        }}
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'left',
                                        }}
                                    >
                                        <MenuItem onClick={() => handleClose(language === 'kr' ? 'en' : 'kr')}>
                                            {language === 'kr' ? (
                                                <>
                                                    <img src={gbFlag} width={'25px'} height={'20px'} alt="English Flag" /> &nbsp; EN
                                                </>
                                            ) : (
                                                <>
                                                    <img src={krFlag} width={'25px'} height={'20px'} alt="Korean Flag" /> &nbsp; KR
                                                </>
                                            )}
                                        </MenuItem>

                                        {/*<MenuItem onClick={() => handleClose('kr')}>Korean</MenuItem>*/}
                                    </Menu>
                                </StyledLink>
                                <Box
                                    display="flex"
                                    flexDirection="column"
                                    alignItems="center"
                                    gap={4}
                                >
                                    {data.map((item, i) => {
                                        return (
                                            // <NavLink
                                            //     to={item?.path}
                                            //     style={{
                                            //         textDecoration: 'none',
                                            //         color: 'white',
                                            //     }}
                                            //     key={i}
                                            // >
                                            <Typography
                                                sx={{
                                                    fontWeight: '500',
                                                    color: `${theme.palette.text.lightblue}`,
                                                }}
                                                key={i}
                                            >
                                                {item?.title}
                                            </Typography>
                                            // </NavLink>
                                        );
                                    })}
                                </Box>
                                {presistLogin && (
                                    <Button
                                        variant="btn2"
                                        onClick={() => {
                                            navigate('/dashboard');
                                        }}
                                    >
                                        {i18next.t('header.dashboard')}
                                    </Button>
                                )}
                                {!presistLogin && (
                                    <Button
                                        variant="btn2"
                                        onClick={() => {
                                            navigate('/login');
                                        }}
                                    >
                                       {i18next.t('general.signin')}
                                    </Button>
                                )}
                                <Button variant="btn1">{i18next.t('general.try_it_free')}</Button>
                            </Box>
                        </Drawer>
                    </Hidden>
                </Stack>
            </Container>
        </>
    );
};

export default Header;
