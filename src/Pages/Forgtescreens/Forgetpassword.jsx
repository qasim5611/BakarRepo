import React, { useState } from 'react';
import { Box, TextField, Button, Stack, Typography } from '@mui/material';
import useMakeToast from '../../hooks/makeToast';
import { REACT_APP_BASE_URL } from '../../config';
import crplogo from '../../images/crplogo.png';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserData } from '../../redux/slices/userSlice';

const Forgetpassword = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const makeToast = useMakeToast();

    const forgotPasswordHandler = async () => {
        let requestOptions = {
            method: 'GET',
            redirect: 'follow',
        };

        try {
            const response = await fetch(
                `${REACT_APP_BASE_URL}/api/user/forgetPassword?email=${email}`,
                requestOptions,
            );
            const result = await response.text();
            const results = JSON.parse(result);
            if (results?.status == true) {
                dispatch(setUserData(results?.data));
                localStorage.setItem('persistMe', JSON.stringify(results?.data));
                navigate('/forgotPasswordOtp');
                makeToast(results?.message, 'success', 3);
            } else {
                makeToast(results?.message, 'error', 3);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleEmailChange = (e) => {
        const inputEmail = e.target.value;
        setEmail(inputEmail);

        if (!inputEmail) {
            setEmailError('*Required!');
        } else {
            setEmailError('');
        }
    };

    return (
        <Box display={'flex'} justifyContent={'center'} my={5}>
            <Box
                sx={{
                    boxShadow: '0px 0px 60px 0px rgba(0, 0, 0, 0.05)',
                    borderRadius: '15px',
                    px: 3,
                    py: 3,
                }}
            >
                <Box sx={{ background: '#F2FAFF', borderRadius: '6px', px: 5, py: 5 }}>
                    <Stack spacing={5} borderRadius={'15px'}>
                        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                            <img src={crplogo} width="80px"></img>
                        </Box>
                        <Typography
                            fontWeight={600}
                            textAlign={'center'}
                            fontSize={{ lg: '20px', xs: '12px', md: '18px' }}
                        >
                            Forget Password
                        </Typography>
                        <TextField
                            label="Email"
                            variant="outlined"
                            value={email}
                            onChange={handleEmailChange}
                            error={!!emailError}
                            helperText={emailError}
                            sx={{ width: { xs: '100%', sm: '300px' } }}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={forgotPasswordHandler}
                            disabled={loading}
                        >
                            {loading ? 'Loading...' : 'Submit'}
                        </Button>
                    </Stack>
                </Box>
            </Box>
        </Box>
    );
};

export default Forgetpassword;
