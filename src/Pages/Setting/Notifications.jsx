import React, { useEffect, useState } from 'react';
import { CustomizedSwitch } from '../../Components/DropdownMenus';
import { Box, Stack } from '@mui/material';
import { REACT_APP_BASE_URL } from '../../config';
import useMakeToast from '../../hooks/makeToast';

function Notifications() {
    const makeToast = useMakeToast();
    const [notifications, setNotifications] = useState({
        ProductUpdatesAndPromotionalEmails: false,
        ReAuthentication: false,
        dailyPortfolio: false,
        dailyPortfolioEmail: false,
        newTransactions: false,
        newTransactionsEmail: false,
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
                const noti = result?.data?.notifications;
                setNotifications({
                        ProductUpdatesAndPromotionalEmails: noti.ProductUpdatesAndPromotionalEmails,
                        ReAuthentication: noti.ReAuthentication,
                        dailyPortfolio: noti.dailyPortfolio,
                        dailyPortfolioEmail: noti.dailyPortfolioEmail,
                        newTransactions: noti.newTransactions,
                        newTransactionsEmail: noti.newTransactionsEmail
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
            console.log('noti',notifications); 
            let updatedNotifications = {};
            // Create a new object for notifications and manually copy existing properties
             updatedNotifications = {
                ProductUpdatesAndPromotionalEmails: notifications.ProductUpdatesAndPromotionalEmails,
                ReAuthentication: notifications.ReAuthentication,
                dailyPortfolio: notifications.dailyPortfolio,
                dailyPortfolioEmail: notifications.dailyPortfolioEmail,
                newTransactions: notifications.newTransactions,
                newTransactionsEmail: notifications.newTransactionsEmail
                } 

            updatedNotifications[name] = checked; 
            console.log('after',updatedNotifications);
            // Construct the payload
            const payload = {
                idToUpdate: localData?.user?.id,
                userId: localData?.user?.id,
                notifications: updatedNotifications,
            }; 

            let response = await fetch(`${REACT_APP_BASE_URL}/api/user/updateUser`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: localData?.user?.token,
                },
                body: JSON.stringify(payload),
            });
            const result = await response.json();
            setNotifications(result?.data?.notifications);
            makeToast(result?.message, 'success', 3);
        } catch (error) {
            console.log(error, 'error');
            makeToast(error?.message, 'error', 3);
        }
    };
    return (
        <>
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
                        New transactions notifications
                    </Box>
                    <CustomizedSwitch
                        checked={notifications?.newTransactions}
                        name="newTransactions"
                        onChange={(e) => {
                            handleChange(e);
                        }}
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
                        New transactions email
                    </Box>
                    <CustomizedSwitch
                        checked={notifications?.newTransactionsEmail}
                        name="newTransactionsEmail"
                        onChange={(e) => {
                            handleChange(e);
                        }}
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
                        Daily portfolio notifications
                    </Box>
                    <CustomizedSwitch
                        checked={notifications?.dailyPortfolio}
                        name="dailyPortfolio"
                        onChange={(e) => {
                            handleChange(e);
                        }}
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
                        Daily portfolio email
                    </Box>
                    <CustomizedSwitch
                        checked={notifications?.dailyPortfolioEmail}
                        name="dailyPortfolioEmail"
                        onChange={(e) => {
                            handleChange(e);
                        }}
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
                        Product updates and promotional emails
                    </Box>
                    <CustomizedSwitch
                        checked={notifications?.ProductUpdatesAndPromotionalEmails}
                        name="ProductUpdatesAndPromotionalEmails"
                        onChange={(e) => {
                            handleChange(e);
                        }}
                    />
                </Stack>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    sx={{
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: { xs: 3, sm: 5 },
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
                        Re-authentication notifications for exchange accounts
                    </Box>
                    <CustomizedSwitch
                        checked={notifications?.ReAuthentication}
                        name="ReAuthentication"
                        onChange={(e) => {
                            handleChange(e);
                        }}
                    />
                </Stack>
            </Box>
        </>
    );
}

export default Notifications;
