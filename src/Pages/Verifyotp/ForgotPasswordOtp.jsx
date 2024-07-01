import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { REACT_APP_BASE_URL } from '../../config';
import { Box, Button, Stack, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import crplogo from '../../images/crplogo.png';

import AuthCode from 'react-auth-code-input';

const ForgotPasswordOtp = () => {
    const navigate = useNavigate();
    const [otp, setOtp] = useState('');
    const [error, setError] = useState('');
    const users = useSelector((state) => state?.users);
    console.log(users, 'redux data');

    const handleSubmit = async () => {
        let collectOtp = otp;
        let path = `/Passwordrecheck`;
        navigate(path, {
            state: {
                rowData: collectOtp,
            },
        });
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
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                marginBottom: '30px',
                                backgroundColor: 'white',
                                py: 3,
                                px: 3,
                                borderRadius: '15px',
                                width: 'fit-content',
                                boxShadow: '0px 0px 60px 0px rgba(0, 0, 0, 0.05)',
                            }}
                        >
                            <AuthCode
                                autoFocus={true}
                                allowedCharacters="numeric"
                                onChange={(value) => setOtp(value)}
                                inputClassName="otpCodeInput"
                                containerClassName="otpCodeContainer"
                            />
                        </Box>
                        <Button
                            onClick={handleSubmit}
                            variant="contained"
                            sx={{
                                backgroundColor: '#29A3F1',
                                color: 'white',
                                padding: '10px 20px',
                                fontSize: '16px',
                                borderRadius: '5px',
                                cursor: 'pointer',
                            }}
                        >
                            Submit OTP
                        </Button>
                    </Stack>
                    {error && (
                        <Typography variant="body2" sx={{ color: 'red', marginTop: '10px' }}>
                            {error}
                        </Typography>
                    )}
                </Box>
                -
            </Box>
        </Box>
    );
};

export default ForgotPasswordOtp;
