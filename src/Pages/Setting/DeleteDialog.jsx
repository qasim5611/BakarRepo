import { Close } from '@mui/icons-material';
import { Box, Button, Dialog, Stack } from '@mui/material';
import React from 'react';
import useMakeToast from '../../hooks/makeToast';
import { REACT_APP_BASE_URL } from '../../config';

function DeleteDialog({ open, setOpen }) {
    const makeToast = useMakeToast();
    let localData = localStorage.getItem('persistMe')
        ? JSON.parse(localStorage.getItem('persistMe'))
        : null;
    const handleDelete = async () => {
        let response = await fetch(`${REACT_APP_BASE_URL}/api/user/deleteUser`, {
            method: 'DELETE',
            headers: {
                Authorization: localData?.user?.token,
            },
        });
        const result = await response.json();

        if (result.status) {
            localStorage.clear();
            window.location.href = '/';
            makeToast(result.message, 'success', 3);
        } else {
            makeToast(result.message, 'error', 3);
        }
    };
    return (
        <>
            <Dialog
                open={open}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth="sm"
            >
                <Stack
                    direction="row"
                    sx={{
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: { xs: 3, sm: 5 },
                        borderBottom: '1px solid rgb(229, 232, 237)',
                        py: { xs: 1.5, sm: 2 },
                        px: { xs: 2, sm: 4 },
                    }}
                >
                    <Box
                        sx={{
                            fontSize: { xs: '14px', sm: '17px', md: '20px' },
                            fontWeight: 900,
                            my: { xs: 1, ms: 2 },
                        }}
                    >
                        Confirm deletion
                    </Box>
                    <Close
                        sx={{ opacity: 0.5, cursor: 'pointer' }}
                        onClick={() => setOpen(false)}
                    />
                </Stack>
                <Box sx={{ px: { xs: 2, sm: 4 }, py: { xs: 1.5, sm: 3 } }}>
                    <Box
                        sx={{
                            fontSize: { xs: '12px', sm: '16px' },
                            fontWeight: 600,
                            opacity: 0.7,
                            my: { xs: 1.5, sm: 2 },
                        }}
                    >
                        Are you sure you want to delete your Cointracker account?
                    </Box>
                    <Box
                        sx={{
                            fontSize: { xs: '11px', sm: '13px' },
                            fontWeight: 500,
                            opacity: 0.7,
                            my: { xs: 1.5, sm: 2 },
                        }}
                    >
                        This deletes all your CoinTracker account data including exchanges, wallets,
                        transactions and trade history
                    </Box>
                    <Box
                        sx={{
                            fontSize: { xs: '11px', sm: '13px' },
                            fontWeight: 500,
                            opacity: 0.7,
                            my: { xs: 1.5, sm: 2 },
                        }}
                    >
                        This action is irreversible
                    </Box>
                    <Box
                        sx={{
                            fontSize: { xs: '11px', sm: '13px' },
                            fontWeight: 500,
                            opacity: 0.7,
                            my: { xs: 1.5, sm: 2 },
                        }}
                    >
                        You will no longer be able to use your previously purchased tax plan. Please
                        contact us if you have any questions.
                    </Box>
                    <Box
                        sx={{
                            fontSize: { xs: '13px', sm: '15px' },
                            fontWeight: 500,
                            opacity: 0.7,
                            my: { xs: 1.5, sm: 2 },
                        }}
                    >
                        Before deleting your account, would you like to send us feedback? We take
                        your feedback seriously and would love to improve CoinTracker for you!
                    </Box>
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        sx={{
                            alignItems: { xs: 'end', sm: 'center' },
                            gap: { xs: 1, sm: 2 },
                            my: { xs: 1, sm: 2 },
                            justifyContent: 'end',
                        }}
                    >
                        <Button
                            variant="outlined"
                            sx={{
                                fontSize: { xs: '10px', sm: '11px' },
                                fontWeight: 600,
                                opacity: 0.7,
                                color: 'inherit',
                                borderColor: 'lightgray',
                                textTransform: 'none',
                                whiteSpace: 'nowrap',
                                minWidth: 'max-content',
                                width: 'max-content',
                                boxSizing: 'border-box',
                                padding: { xs: '8px 16px' },
                                '&:hover': {
                                    opacity: 1,
                                    borderColor: 'inherit',
                                },
                            }}
                            onClick={() => setOpen(false)}
                        >
                            Cancel
                        </Button>
                        <Button
                            sx={{
                                fontSize: { xs: '10px', sm: '11px' },
                                fontWeight: 600,
                                color: '#fff',
                                background: '#E51538',
                                textTransform: 'none',
                                whiteSpace: 'nowrap',
                                minWidth: 'max-content',
                                width: 'max-content',
                                boxSizing: 'border-box',
                                padding: { xs: '10px 16px' },
                                '&:hover': {
                                    background: '#C50B2F',
                                },
                            }}
                            onClick={() => {
                                handleDelete();
                                setOpen(false);
                            }}
                        >
                            Delete account
                        </Button>
                    </Stack>
                </Box>
            </Dialog>
        </>
    );
}

export default DeleteDialog;
