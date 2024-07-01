import { Box, Button, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import DeleteDialog from './DeleteDialog';
import { CustomizedSwitch } from '../../Components/DropdownMenus';
import { REACT_APP_BASE_URL } from '../../config';
import useMakeToast from '../../hooks/makeToast';

function Account() {
    const makeToast = useMakeToast();
    const [openDelete, setOpenDelete] = useState(false);
    const [userData, setUserData] = useState({
        permissionToViewAccount: false,
        taxProfessional: false,
        twoFactorAuth: false,
    });
    let localData = localStorage.getItem('persistMe')
        ? JSON.parse(localStorage.getItem('persistMe'))
        : null;
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `${REACT_APP_BASE_URL}/api/user/getUser?id=${localData?.user?.id}`,
                    {
                        method: 'GET',
                        headers: {
                            Authorization: localData?.user?.token,
                        },
                    },
                );
                const result = await response.json();
                setUserData({
                    twoFactorAuth: result?.data?.twoFactorAuth,
                    taxProfessional: result?.data?.taxProfessional,
                    permissionToViewAccount: result?.data?.permissionToViewAccount,
                });
            } catch (error) {
                console.log('Error fetching User:', error);
            }
        };
        fetchData();
    }, []);

    const handleChange = async (event) => { 
        try {
            const { name, checked } = event.target;
            let response = await fetch(`${REACT_APP_BASE_URL}/api/user/updateUser`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: localData?.user?.token,
                },
                body: JSON.stringify({
                    idToUpdate: localData.user.id,
                    userId: localData.user.id,
                    [name]: checked,
                }),
            });
            const result = await response.json();
            console.log('damn',result);
            setUserData({
                twoFactorAuth: result?.data?.twoFactorAuth,
                taxProfessional: result?.data?.taxProfessional,
                permissionToViewAccount: result?.data?.permissionToViewAccount,
            });
            makeToast(result?.message, 'success', 3);
        } catch (error) {
            console.log(error, 'error');
            makeToast(error?.message, 'error', 3);
        }
    };
    return (
        <>
            <DeleteDialog open={openDelete} setOpen={setOpenDelete} />
            <Box
                sx={{
                    maxWidth: { xs: '90%', sm: '650px' },
                    mx: 'auto',
                    border: '1px solid rgb(229, 232, 237)',
                    background: 'rgb(255, 255, 255)',
                    borderRadius: '5px',
                    width: '100%',
                    py: { xs: 1.5, sm: 2 },
                    px: { xs: 2.5, sm: 3.7, md: 5 },
                    my: { xs: 5, sm: 7, md: 10 },
                }}
            >
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    sx={{
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: { xs: 3, sm: 5 },
                        borderBottom: '1px solid rgb(229, 232, 237)',
                        py: { xs: 1, sm: 2, md: 3 },
                    }}
                >
                    <Box
                        sx={{
                            fontSize: { xs: '13px', sm: '15px' },
                            fontWeight: 900,
                            color: '#000',
                        }}
                    >
                        Email
                    </Box>
                    <Box
                        sx={{
                            fontSize: { xs: '12px', sm: '14px' },
                            fontWeight: 900,
                            color: '#00000085',
                        }}
                    >
                        {localData?.user?.email}
                    </Box>
                </Stack>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    sx={{
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: { xs: 3, sm: 5 },
                        borderBottom: '1px solid rgb(229, 232, 237)',
                        py: { xs: 1, sm: 2, md: 3 },
                    }}
                >
                    <Box>
                        <Box
                            sx={{
                                fontSize: { xs: '13px', sm: '15px' },
                                fontWeight: 900,
                                color: '#000',
                            }}
                        >
                            Two factor authentication
                        </Box>
                        <Box
                            sx={{
                                fontSize: { xs: '11px', sm: '13px' },
                                fontWeight: 600,
                                color: '#00000085',
                                mt: 1,
                            }}
                        >
                            Secure your CoinTracker account with an additional layer of security.
                        </Box>
                    </Box>

                    <CustomizedSwitch
                        inputProps={{ 'aria-label': 'ant design' }}
                        checked={userData?.twoFactorAuth}
                        name="twoFactorAuth"
                        onChange={(e) => handleChange(e)}
                    />
                </Stack>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    sx={{
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: { xs: 3, sm: 5 },
                        borderBottom: '1px solid rgb(229, 232, 237)',
                        py: { xs: 1, sm: 2, md: 3 },
                    }}
                >
                    <Box>
                        <Box
                            sx={{
                                fontSize: { xs: '13px', sm: '15px' },
                                fontWeight: 900,
                                color: '#000',
                            }}
                        >
                            Permission for CoinTracker Support to view my account
                        </Box>
                        <Box
                            sx={{
                                fontSize: { xs: '11px', sm: '13px' },
                                fontWeight: 600,
                                color: '#00000085',
                                mt: 1,
                            }}
                        >
                            This enables CoinTracker support to view your CoinTracker account in
                            order to troubleshoot issues. You can revoke access any time.
                        </Box>
                    </Box>

                    <CustomizedSwitch
                        inputProps={{ 'aria-label': 'ant design' }}
                        checked={userData?.permissionToViewAccount}
                        name="permissionToViewAccount"
                        onChange={(e) => handleChange(e)}
                    />
                </Stack>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    sx={{
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: { xs: 3, sm: 5 },
                        borderBottom: '1px solid rgb(229, 232, 237)',
                        py: { xs: 1, sm: 2, md: 3 },
                    }}
                >
                    <Box
                        sx={{
                            fontSize: { xs: '13px', sm: '15px' },
                            fontWeight: 900,
                            color: '#000',
                        }}
                    >
                        I am a tax professional
                    </Box>
                    <CustomizedSwitch
                        inputProps={{ 'aria-label': 'ant design' }}
                        checked={userData?.taxProfessional}
                        name="taxProfessional"
                        onChange={(e) => handleChange(e)}
                    />
                </Stack>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    sx={{
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: { xs: 3, sm: 5 },
                        // borderBottom: '1px solid rgb(229, 232, 237)',
                        py: { xs: 1, sm: 2, md: 3 },
                    }}
                >
                    <Box>
                        <Box
                            sx={{
                                fontSize: { xs: '13px', sm: '15px' },
                                fontWeight: 900,
                                color: 'red',
                            }}
                        >
                            Delete account
                        </Box>
                        <Box
                            sx={{
                                fontSize: { xs: '11px', sm: '13px' },
                                fontWeight: 600,
                                color: '#00000085',
                                mt: 1,
                            }}
                        >
                            This deletes all your CoinTracker account data including exchanges,
                            wallets, transactions and trade history. This action is irreversible.
                        </Box>
                    </Box>
                    <Button
                        sx={{
                            fontSize: { xs: '10px', sm: '11px' },
                            fontWeight: 600,
                            color: '#fff',
                            background: '#E51538',
                            textTransform: 'none',
                            whiteSpace: 'nowrap',
                            minWidth: 'max-content',
                            boxSizing: 'border-box',
                            '&:hover': {
                                background: '#C50B2F',
                            },
                        }}
                        onClick={() => setOpenDelete(true)}
                    >
                        Delete account
                    </Button>
                    {/* <CustomizedSwitch inputProps={{ 'aria-label': 'ant design' }} /> */}
                </Stack>
            </Box>
        </>
    );
}

export default Account;
