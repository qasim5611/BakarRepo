import React, { useState } from 'react';
import Cookies from 'js-cookie';
import {
    Box,
    Button,
    Checkbox,
    Container,
    Grid,
    IconButton,
    InputAdornment,
    TextField,
    Typography,
    styled,
} from '@mui/material';
import {
    Check,
    Email,
    Facebook,
    Google,
    Lock,
    Visibility,
    VisibilityOff,
} from '@mui/icons-material';
import loginbg from '../../images/loginbg.png';
import signinbg from './../../images/signinbg.png';
import Header from '../../Components/Header';
import { loginHandle } from '../../api/api';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { setUserData } from '../../redux/slices/userSlice';
import { useGoogleLogin } from '@react-oauth/google';
import useMakeToast from '../../hooks/makeToast';
import FacebookLogin from 'react-facebook-login';
import crplogo from '../../images/crplogo.png';
import { REACT_APP_BASE_URL } from '../../config';
import { Link } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const makeToast = useMakeToast();
    const [visible, setVisible] = useState(false);
    const [data, setData] = useState({
        email: '',
        password: '',
    });

    const [validationErrors, setValidationErrors] = useState({
        email: '',
        password: '',
    });
    const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]+$');
    const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');
    const [rememberMe, setRememberMe] = useState(false);

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setData((prevUser) => ({ ...prevUser, email: newEmail }));
        if (!newEmail) {
            setValidationErrors((prevErrors) => ({
                ...prevErrors,
                email: 'Email is required',
            }));
        } else if (!validEmail.test(newEmail)) {
            setValidationErrors((prevErrors) => ({
                ...prevErrors,
                email: 'Invalid email address',
            }));
        } else {
            setValidationErrors((prevErrors) => ({ ...prevErrors, email: '' }));
        }
    };
    //   ==========handlepassword================
    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setData((prevUser) => ({ ...prevUser, password: newPassword }));
        if (!newPassword) {
            setValidationErrors((prevErrors) => ({
                ...prevErrors,
                password: 'Password is required',
            }));
        } else if (!validPassword.test(newPassword)) {
            setValidationErrors((prevErrors) => ({
                ...prevErrors,
                password:
                    'Password should be 6 character include at least one letter and one digit.',
            }));
        } else {
            setValidationErrors((prevErrors) => ({ ...prevErrors, password: '' }));
        }
    };

    //   ==================handlelogin===================
    const handleLogin = async () => {
        try {
            let formdata = new FormData();
            formdata.append('email', data?.email);
            formdata.append('password', data?.password);

            let requestOptions = {
                method: 'POST',
                body: formdata,
            };

            const response = await fetch(`${REACT_APP_BASE_URL}/api/user/login`, requestOptions);
            const result = await response.text();
            const results = JSON.parse(result);
            console.log(results, 'response in Login');

            if (
                results?.status === true &&
                results?.data?.user?.isVerified === true &&
                results?.data?.user?.twoFactorAuth === false
            ) {
                localStorage.setItem('persistMe', JSON.stringify(results?.data));
                dispatch(setUserData(results?.data));
                makeToast(results?.message, 'success', 3);
                setTimeout(() => {
                    navigate('/dashboard');
                }, 2000);
            } else if (results?.status === true && results?.data?.isVerified === false) {
                localStorage.setItem('persistMe', JSON.stringify(results?.data));
                dispatch(setUserData(results?.data));
                navigate('/verifyotp');
                makeToast(results?.message, 'success', 3);
            } else if (results?.status === true && results?.data?.twoFactorAuth === true) {
                localStorage.setItem('persistMe', JSON.stringify(results?.data));
                dispatch(setUserData(results?.data));
                navigate('/verifyotp');
                makeToast(results?.message, 'success', 3);
            } else {
                makeToast(results?.message, 'error', 3);
            }
        } catch (err) {
            console.log(err?.response?.data?.message, 'error');
        }
    };

    // const handleChange = (event) => {
    //     setData({ ...data, [event.target.name]: event.target.value });
    // };

    async function handleGoogleLoginSuccess(tokenResponse) {
        const accessToken = tokenResponse.access_token;

        try {
            const response = await loginHandle({ googleToken: accessToken });

            if (response?.data?.status == 'success') {
                // const message = response?.data?.message ? response?.data?.message : 'Some thing went Wrong';
                // makeToast(`${message}`, 'success', 3);
                localStorage.set('presistMe', response?.data?.refreshToken, 1);
                dispatch(
                    setUserData({
                        accessToken: response?.data?.accessToken,
                        id: response?.data.id,
                        email: response?.data?.userEmail,
                        name: response?.data?.username,
                    }),
                );
                makeToast('Login Successfully', 'success', 3);
                localStorage.setItem('persistMe-sf3e', true);
                setTimeout(() => {
                    navigate('/');
                }, 1000);
            } else {
                makeToast(response?.response?.data?.message, 'warn', 3);
            }
        } catch (err) {
            makeToast(err?.response?.data?.message);
        }
    }

    const handleSignIn = useGoogleLogin({ onSuccess: handleGoogleLoginSuccess });

    // async function handleSuccess(response) {
    //     try {

    //         const FbToken = response?.authResponse?.accessToken;
    //         const FbUserID = response?.authResponse?.userID;
    //         const resp = await loginHandle({ FbToken, FbUserID });

    //         if (resp?.data?.status == 'success') {
    //             // const message = response?.data?.message ? response?.data?.message : 'Some thing went Wrong';
    //             // makeToast(`${message}`, 'success', 3);
    //             Cookies.set('refreshToken-dai214', resp?.data?.refreshToken, 1);
    //             dispatch(
    //                 setUserData({
    //                     accessToken: resp?.data?.accessToken,
    //                     id: resp?.data.id,
    //                     email: resp?.data?.userEmail,
    //                     name: resp?.data?.username,
    //                 }),
    //             );
    //             makeToast('User Login Successfully', 'success', 3);
    //             // cogoToast.success('User Login SuccessFully');

    //             setTimeout(() => {
    //                 navigate('/');
    //             }, 1000);
    //         } else {
    //             // const message = response?.message ? response?.message : 'Some thing went Wrong';
    //             // makeToast(`${message}`, 'error', 3);
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // function handleError(error) {
    //     console.log('error');
    //     console.log(error);
    // }

    const responseFacebook = async (response) => {
        try {
            const resp = await loginHandle({ FbToken: response });
            if (resp?.data?.status == 'success') {
                localStorage.set('refreshToken-dai214', resp?.data?.refreshToken, 1);
                dispatch(
                    setUserData({
                        accessToken: resp?.data?.accessToken,
                        id: resp?.data.id,
                        email: resp?.data?.userEmail,
                        name: resp?.data?.username,
                    }),
                );

                makeToast(resp?.data?.message, 'success', 3);
                localStorage.setItem('persistMe-sf3e', true);

                setTimeout(() => {
                    navigate('/');
                }, 1000);
            } else {
                makeToast(resp?.data?.message, 'warn', 3);
            }
        } catch (err) {
            makeToast(err?.response?.data?.message, 'warn', 3);
        }
    };

    const callFb = () => {
        document.querySelector('.fbIDx').click();
    };

    return (
        <Box
            sx={{
                background: `url(${signinbg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                backgroundPosition: 'top center',
            }}
        >
            <Header />
            <Container>
                <Grid
                    container
                    justifyContent={'space-between'}
                    spacing={1}
                    mt={{ md: 15, xs: 4 }}
                    sx={{
                        backgroundColor: 'white',
                        py: 3,
                        px: 3,
                        borderRadius: '15px',
                        width: 'fit-content',
                        boxShadow: '0px 0px 60px 0px rgba(0, 0, 0, 0.05)',
                    }}
                >
                    <Grid
                        item
                        md={6}
                        xs={12}
                        sm={11}
                        lg={6}
                        // sx={{ display: { md: 'block', xs: 'none' }, marginRight: '-1.2rem' }}
                    >
                        <Box
                            height="100%"
                            px={1}
                            sx={{
                                background: `url(${loginbg})`,
                                backgroundSize: '100% 100%',
                                backgroundRepeat: 'no-repeat',
                                width: '100%',
                                height: '100%',
                                padding: {
                                    md: '3rem 6rem ',
                                    sm: '3rem 4rem ',
                                    xs: '2rem 2rem',
                                },
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                            }}
                        >
                            <img src={crplogo} alt="logo" width={'150px'}></img>
                            <Typography
                                sx={{
                                    fontFamily: 'Gmarket',
                                    fontWeight: 800,
                                    fontSize: { md: '30px', xs: '20px' },
                                    textAlign: 'center',
                                    color: 'black',
                                    textTransform: 'uppercase',
                                }}
                                py={2}
                            >
                                Welcome back
                            </Typography>
                            <Typography
                                sx={{
                                    fontFamily: 'Gmarket',
                                    fontWeight: 400,
                                    fontSize: '13px',
                                    textAlign: 'center',
                                    color: 'black',
                                    mt: 1,
                                }}
                            >
                                Crypee(Tax Software) helps you become fully compliant with
                                cryptocurrency tax rules
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item md={6} xs={12} sm={11} lg={6}>
                        <Box
                            // sx={{
                            //     background: `url(${login})`,
                            //     backgroundSize: '100% 100%',
                            //     backgroundRepeat: 'no-repeat',
                            //     width: '100%',
                            //     height: '100%',
                            //     padding: {
                            //         md: '3rem 6rem ',
                            //         sm: '3rem 4rem ',
                            //         xs: '2rem 2rem',
                            //     },
                            // }}
                            px={2}
                        >
                            <Box mt={4}>
                                <CustomTextField
                                    autoComplete="off"
                                    id="standard-name"
                                    placeholder={'Email Address'}
                                    // onChange={(e) => setemail(e.target.value)}
                                    required={true}
                                    type="email"
                                    error={!!validationErrors.email}
                                    helperText={validationErrors.email}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Email sx={{ color: '#0B7BC3' }} />
                                            </InputAdornment>
                                        ),
                                    }}
                                    value={data?.email}
                                    name="email"
                                    onChange={handleEmailChange}
                                />
                            </Box>
                            <Box mt={4}>
                                <CustomTextField
                                    autoComplete="off"
                                    name="password"
                                    value={data.password}
                                    onChange={handlePasswordChange}
                                    placeholder={'Password'}
                                    // onChange={(e) => setpassword(e.target.value)}
                                    required={true}
                                    error={!!validationErrors.password}
                                    helperText={validationErrors.password}
                                    type={visible ? 'text' : 'password'}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Lock sx={{ color: '#0B7BC3' }} />
                                            </InputAdornment>
                                        ),
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton onClick={() => setVisible(!visible)}>
                                                    {visible ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Box>
                            <Box
                                mt={2}
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <Box display="flex" alignItems="center">
                                    <Checkbox
                                        value={rememberMe}
                                        sx={{
                                            '& .MuiSvgIcon-root': {
                                                borderRadius: '50%',
                                            },
                                            color: '#0B7BC3',
                                            '&.Mui-checked': {
                                                color: '#28CE46',
                                            },
                                        }}
                                        checkedIcon={
                                            <Check sx={{ color: 'white', bgcolor: '#28CE46' }} />
                                        }
                                        onChange={() => setRememberMe(!rememberMe)}
                                    />
                                    <Typography
                                        sx={{
                                            fontSize: '12px',
                                            color: 'black',
                                            fontWeight: '400',
                                            fontFamily: 'Gmarket',
                                        }}
                                    >
                                        Remember me
                                    </Typography>
                                </Box>

                                <Typography
                                    sx={{
                                        fontSize: '12px',
                                        color: 'black',
                                        fontWeight: '400',
                                        fontFamily: 'Gmarket',
                                    }}
                                >
                                    <Link to="/forgetpassword" style={{ textDecoration: 'none' }}>
                                        Forget Password
                                    </Link>
                                </Typography>
                            </Box>
                            <Box
                                mt={4}
                                px={2}
                                gap={2}
                                display="flex"
                                justifyContent="space-between"
                                flexWrap="wrap"
                                flexDirection={'column'}
                            >
                                <Button
                                    variant="btn1"
                                    sx={{ padding: '0.7rem 2rem' }}
                                    onClick={handleLogin}
                                >
                                    Login now
                                </Button>
                                <Button
                                    variant="btn2"
                                    sx={{
                                        padding: '0.7rem 2rem',
                                    }}
                                    onClick={() => navigate('/signup')}
                                >
                                    Create Account
                                </Button>
                            </Box>

                            <Typography
                                sx={{
                                    fontFamily: 'Gmarket',
                                    fontWeight: 400,
                                    fontSize: '20px',
                                    textAlign: 'center',
                                    color: 'white',
                                    margin: '1rem 0rem',
                                }}
                            >
                                OR
                            </Typography>
                            <Box display="flex" justifyContent="center" gap={2} color="white">
                                <Facebook
                                    sx={{ cursor: 'pointer' }}
                                    onClick={() => {
                                        callFb();
                                    }}
                                />
                                <Google sx={{ cursor: 'pointer' }} onClick={handleSignIn} />
                                {/* <Instagram sx={{ cursor: 'pointer' }} /> */}
                            </Box>

                            <FacebookLogin
                                appId="234169869402098"
                                autoLoad={false}
                                scope="email"
                                fields="name,email,picture"
                                callback={responseFacebook}
                                cssClass="my-facebook-button-class fbIDx"
                            />

                            {/* <FacebookProvider appId={181859634583914}>
                                    <LoginButton
                                        scope="email"
                                        onError={handleError}
                                        onSuccess={handleSuccess}
                                        style={{
                                            backgroundColor: 'red',
                                            display: 'none',
                                        }}
                                        id="fbID"
                                    >
                                        Login via Facebook
                                    </LoginButton>
                                </FacebookProvider> */}
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

const CustomTextField = styled(TextField)({
    width: '100%',
    fontFamily: 'Poppins',
    fontWeight: '300',
    borderRadius: '5px',
    '& label.Mui-focused': {
        color: '#ffffff',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'transparent',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'transparent',
        },
        '&:hover fieldset': {
            borderColor: 'transparent',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'transparent',
        },
    },
    input: {
        '&::placeholder': {
            textOverflow: 'ellipsis !important',
            color: '#000000 !important',
        },
        color: '#000000',
        fontSize: '15px',
        paddingLeft: '10px',
    },
    background: '#F2FAFF',
});
export default Login;
