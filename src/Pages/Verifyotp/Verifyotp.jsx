import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { REACT_APP_BASE_URL } from '../../config';
import { Box, Button, Typography } from '@mui/material';
import useMakeToast from '../../hooks/makeToast';
import { setUserData } from '../../redux/slices/userSlice';
import { useDispatch } from 'react-redux';
import crplogo from '../../images/crplogo.png';
//
import AuthCode from 'react-auth-code-input';
const Verifyotp = () => {
    const navigate = useNavigate();
    const makeToast = useMakeToast();
    const dispatch = useDispatch();
    const [otp, setOtp] = useState('');
    const [error, setError] = useState('');
    const [persistedData, setPersistedData] = useState(null);
    const storedData = localStorage.getItem('persistMe');

    useEffect(() => {
        if (storedData) {
            setPersistedData(JSON.parse(storedData));
        }
    }, []);

    const handleSubmit = async () => {
        let myHeaders = new Headers();
        myHeaders.append('authorization', persistedData?.token);

        let formdata = new FormData();
        formdata.append('code', otp);

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow',
        };

        try {
            const response = await fetch(`${REACT_APP_BASE_URL}/api/user/verify`, requestOptions);
            const result = await response.text();
            const results = JSON.parse(result);
            if (results?.status == true) {
                dispatch(setUserData(results?.data));
                localStorage.setItem('persistMe', JSON.stringify(results?.data));
                navigate('/dashboard');
                makeToast(results?.message, 'success', 3);
            } else {
                makeToast(results?.message, 'error', 3);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <Box
            sx={{
                textAlign: 'center',
                maxWidth: '400px',
                margin: 'auto',
                paddingTop: '50px',
            }}
        >
            <Box
                sx={{
                    backgroundColor: 'white',
                    py: 5,
                    px: 5,
                    borderRadius: '15px',
                    width: 'fit-content',
                    boxShadow: '0px 0px 60px 0px rgba(0, 0, 0, 0.05)',
                }}
            >
                <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <img src={crplogo} width="80px"></img>
                </Box>
                <Typography
                    fontWeight={600}
                    textAlign={'center'}
                    fontSize={{ lg: '20px', xs: '12px', md: '18px' }}
                    py={3}
                >
                    Verify Otp
                </Typography>
                <Box sx={{ marginBottom: '30px' }}>
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
                {error && (
                    <Typography variant="body2" sx={{ color: 'red', marginTop: '10px' }}>
                        {error}
                    </Typography>
                )}
            </Box>
        </Box>
    );
};

export default Verifyotp;
