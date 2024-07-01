import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Stack, Typography, styled } from '@mui/material';
import { InputAdornment } from '@mui/material';
import { Lock } from '@mui/icons-material';
import useMakeToast from '../../hooks/makeToast';
import { REACT_APP_BASE_URL } from '../../config';
import crplogo from '../../images/crplogo.png';
import { useLocation, useNavigate } from 'react-router-dom';

const Passwordrecheck = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        password: '',
        passwordReset: '',
    });
    const [persistedData, setPersistedData] = useState(null);
    const storedData = localStorage.getItem('persistMe');
    const makeToast = useMakeToast();
    const [validationErrors, setValidationErrors] = useState({
        password: '',
    });
    let location = useLocation();
    useEffect(() => {
        if (location.state !== null) {
            console.log(location.state.rowData, 'location.state.rowData');
        }
    }, []);
    useEffect(() => {
        if (storedData) {
            setPersistedData(JSON.parse(storedData));
        }
    }, []);
    //   ===========validation=============
    const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');

    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({ ...prevData, [name]: value }));

        if (!validPassword.test(value)) {
            setValidationErrors((prevErrors) => ({
                ...prevErrors,
                [name]: 'Password must be at least 6 characters long and include at least one letter and one digit.',
            }));
        } else {
            setValidationErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
        }
    };

    const handlePasswordresetChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({ ...prevData, [name]: value }));

        if (value !== data.password) {
            setValidationErrors((prevErrors) => ({
                ...prevErrors,
                [name]: 'Passwords do not match.',
            }));
        } else {
            setValidationErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
        }
    };
    //   ================
    const resetPasswordHandler = async () => {
        var myHeaders = new Headers();
        myHeaders.append('authorization', persistedData?.token);

        var formdata = new FormData();
        formdata.append('otpCode', location.state.rowData);
        formdata.append('password', data?.password);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow',
        };

        try {
            const response = await fetch(
                `${REACT_APP_BASE_URL}/api/user/resetPassword`,
                requestOptions,
            );
            const result = await response.text();
            const results = JSON.parse(result);
            console.log(results, 'results');
            if (results?.status == true) {
                navigate('/Login');
                makeToast(results?.message, 'success', 3);
            } else {
                makeToast(results?.message, 'error', 3);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <Box display={'flex'} justifyContent={'center'} my={5}>
            <Box sx={{ background: '#F2FAFF', borderRadius: '15px', px: 3, py: 3 }}>
                <Box
                    sx={{
                        background: 'white',
                        borderRadius: '15px',
                        px: 8,
                        py: 8,
                    }}
                >
                    <Stack spacing={5} borderRadius={'15px'}>
                        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                            <img src={crplogo} width="80px"></img>
                        </Box>
                        <Typography
                            fontWeight={600}
                            textAlign={'center'}
                            fontSize={{ lg: '20px', xs: '12px', md: '18px' }}
                        >
                            Password reset
                        </Typography>
                        <CustomTextField
                            autoComplete="off"
                            name="password"
                            value={data.password}
                            onChange={handlePasswordChange}
                            placeholder={'Password'}
                            required={true}
                            error={!!validationErrors.password}
                            helperText={validationErrors.password}
                            type="password"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Lock sx={{ color: '#0B7BC3' }} />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <CustomTextField
                            autoComplete="off"
                            name="passwordReset"
                            value={data.passwordReset}
                            onChange={handlePasswordresetChange}
                            placeholder={'Password Reset'}
                            required={true}
                            error={!!validationErrors.passwordReset}
                            helperText={validationErrors.passwordReset}
                            type="password"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Lock sx={{ color: '#0B7BC3' }} />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Button variant="contained" color="primary" onClick={resetPasswordHandler}>
                            Submitt
                        </Button>
                    </Stack>
                </Box>
            </Box>
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

export default Passwordrecheck;
