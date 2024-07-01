import Navigation from '../../Components/Navigation';
import React, { useEffect, useState } from 'react';

import LoadingButton from '@mui/lab/LoadingButton';
import { Box, Button, TextField, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';

import {
    InviteTaxProfessional,
    IsTaxProfessionalsExist,
    DeletesentInvitations,
} from './../../api/api';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import useMakeToast from '../../hooks/makeToast';

import InviteTaxImg from '../../images/Taxes/invite_tax_pro_empty.svg';
import { ArrowForwardIosTwoTone } from '@mui/icons-material';
// import { confirmAlert } from 'react-confirm-alert';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
// import { Navigate } from 'react-router';
import { useNavigate } from 'react-router-dom';
const buttonStyle = {
    color: 'white',
    textTransform: 'capitalize',
    fontSize: { md: '14px', xs: '12px' },
    // backgroundColor: '#0182ff',
    background: 'linear-gradient(270deg, #0B7BC4 0%, #5BACDE 100%)',
    py: 1.5,
    px: 4,
    mt: 2,
    '&:hover': {
        color: 'white', // Change this to your desired hover color
    },
};

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Taxprofessionals() {
    const [value, setValue] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const [email, setEmail] = React.useState('');
    const [inviteLoader, setInviteLoader] = React.useState(false);
    const [reloadTrigger, setReloadTrigger] = useState(false);
    const makeToast = useMakeToast();

    const [isTaxProfData, setIsTaxProfData] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        IsTaxProfessionalsExist().then((result) => {
            console.log('IsTaxProfData', result.data);
            setIsTaxProfData(result?.data?.data);
        });
    }, [reloadTrigger]);

    const isEmailValid = email.endsWith('.com');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleInvite = async () => {
        // setOpen(false);
        setInviteLoader(true);

        if (email) {
            console.log('Email to send', email);
            let redirtectRoute = '/taxes-client';
            let Obj = {
                email,
                redirtectRoute,
            };
            //1)| Send email to User With Invite Link(Route to the client dashboard), AND mark status pening
            let resp = await InviteTaxProfessional(Obj);

            if (resp?.data?.status === true) {
                setInviteLoader(false);
                setOpen(false);
                navigate(0);
                makeToast(resp?.data?.message, 'success', 3);
            } else if (resp?.data?.status === false) {
                makeToast(resp?.data?.message, 'error', 3);
                setInviteLoader(false);
                setReloadTrigger((prev) => !prev);
            }
            console.log('responce', resp);
            // 2) On Click Email, Redirect the user toward "Incoming Invites" Of Your Clients Page/Route.

            // 3) On the Client dashboard of other person, shows the Invitor as a Client, on 2nd "incoming invites Tab`" 2 options(Accept , Decline)

            //    and show on Prof dasghboard "Approved"
        }
        // setTimeout(() => {
        //     setInviteLoader(false);
        //     setOpen(false);
        // }, 2000);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    // Assuming handleResend is a function to handle re-sending the invite
    const handleResend = (email) => {
        // Logic to re-send the invite
    };
    function createData(email, status, actions) {
        return { email, status, actions };
    }
    const rows = [
        createData(
            'qasimtahir5611@gmail.com',
            <span>
                Invite pending{' '}
                <Button variant="outlined" onClick={handleResend}>
                    {' '}
                    Re-send{' '}
                </Button>{' '}
            </span>,
            <DeleteIcon style={{ cursor: 'pointer' }} />,
        ),
    ];

    const deleteInvitedUser = async (id) => {
        let obj = {
            idToDel: id,
        };
        console.log('delete calling...', id);
        let resp = await DeletesentInvitations(obj);
        if (resp?.data?.status === true) {
            // setReloadTrigger((prev) => !prev);
            navigate(0);
            makeToast(resp?.data?.message, 'success', 3);
        }
    };
    const deleteInvited = async (_id) => {
        confirmAlert({
            title: 'Confirm Deletion',
            message: 'Are you sure to do this.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => deleteInvitedUser(_id),
                },
                {
                    label: 'No',
                },
            ],
        });
    };

    // testing
    // let response = null;

    return (
        <Box mx={{ lg: 7, xs: 2, md: 4, sm: 3 }}>
            <Navigation />

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDiorection: 'row',
                    alignItems: 'baseline',
                }}
            >
                <Typography
                    sx={{
                        fontFamily: 'Poppins',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        fontSize: { xs: '24px', sm: '27px', md: '32px' },
                        lineHeight: '24px',
                        color: '#0B7BC4',
                    }}
                >
                    Tax professionals
                </Typography>
                <Button sx={buttonStyle} variant="outlined" onClick={handleClickOpen}>
                    Invite Tax Pro
                </Button>
            </Box>

            <Box sx={{ width: '100%', my: 5 }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Tax professionals" {...a11yProps(0)} />
                        <Tab label="Incoming invites" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    {isTaxProfData == null ? (
                        <Box
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                flexDirection: 'column',
                            }}
                        >
                            <img src={InviteTaxImg} />

                            <Typography
                                sx={{
                                    fontFamily: 'Poppins',
                                    fontStyle: 'normal',
                                    fontWeight: '700',
                                    fontSize: { xs: '24px', sm: '27px', md: '32px' },
                                    lineHeight: '24px',
                                    color: '#161a26',
                                    my: 2,
                                }}
                            >
                                Invite a tax professional
                            </Typography>
                            <Typography
                                fontSize={{ xs: '7px', md: '16px' }}
                                fontFamily={'Poppins'}
                                px={2}
                                sx={{ color: '#5b616e' }}
                            >
                                Get started and help file your taxes with the help of a
                                professional.
                            </Typography>
                            <Button sx={buttonStyle} variant="outlined" onClick={handleClickOpen}>
                                Invite Tax Pro
                            </Button>
                        </Box>
                    ) : (
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Tax pro email</TableCell>
                                        <TableCell align="">Status</TableCell>
                                        <TableCell align="">Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {isTaxProfData?.map((row) => (
                                        <TableRow
                                            key={row.email}
                                            sx={{
                                                '&:last-child td, &:last-child th': {
                                                    border: 0,
                                                },
                                            }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.email}
                                            </TableCell>
                                            <TableCell>
                                                {row.inviteStatus === 'SentButPending' ? (
                                                    <span
                                                        style={{
                                                            display: 'flex',
                                                            flexDirection: 'row',
                                                            alignItems: 'baseline',
                                                            justifyContent: 'left',
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                width: '8px',
                                                                height: '8px',
                                                                borderRadius: '4px',
                                                                backgroundColor: 'rgb(0, 122, 255)',
                                                                marginRight: '8px',
                                                            }}
                                                        ></div>
                                                        <span style={{ marginRight: '8px' }}>
                                                            Invite pending
                                                        </span>
                                                        <span
                                                            style={{
                                                                fontWeight: '500',
                                                                letterSpacing: '0.7px',
                                                                marginLeft: '8px',
                                                                cursor: 'pointer',
                                                                backgroundColor:
                                                                    'rgb(255, 255, 255)',
                                                                color: 'rgb(35, 39, 46)',
                                                                borderColor: 'rgb(132, 139, 150)',
                                                                borderStyle: 'solid',
                                                                borderWidth: '1px',
                                                                padding: '4px 8px',
                                                                fontSize: '12px',
                                                            }}
                                                        >
                                                            Re-send
                                                        </span>
                                                    </span>
                                                ) : row.inviteStatus == 'Approved' ? (
                                                    <>
                                                        <span
                                                            style={{
                                                                display: 'flex',
                                                                flexDirection: 'row',
                                                                alignItems: 'baseline',
                                                                justifyContent: 'left',
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    width: '8px',
                                                                    height: '8px',
                                                                    borderRadius: '4px',
                                                                    backgroundColor: 'green',
                                                                    marginRight: '8px',
                                                                }}
                                                            ></div>
                                                            <span
                                                                style={{
                                                                    marginRight: '8px',
                                                                }}
                                                            >
                                                                Active
                                                            </span>
                                                        </span>
                                                    </>
                                                ) : null}
                                            </TableCell>
                                            <TableCell
                                                style={{
                                                    display: 'flex',
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                }}
                                            >
                                                {row.inviteStatus == 'Approved' ? (
                                                    <>
                                                        <span
                                                            style={{
                                                                color: 'rgb(1, 130, 255)',
                                                                marginRight: '40px',
                                                            }}
                                                        >
                                                            Visit tax center
                                                        </span>
                                                    </>
                                                ) : null}
                                                <DeleteSweepIcon
                                                    sx={{
                                                        color: '#0B7BC3',
                                                        cursor: 'pointer',
                                                    }}
                                                    onClick={() => deleteInvited(row.id)}
                                                />
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    )}
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <Box sx={{ margin: '200px 0px', textAlign: 'center' }}>No invites</Box>
                </CustomTabPanel>
            </Box>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{'Share with tax professional'}</DialogTitle>
                <DialogContent>
                    <hr />
                    <br />
                    <DialogContentText id="alert-dialog-description">
                        Invite your tax professional and their firm to directly review your
                        CoinTracker account, reconcile transactions, and download your tax reports.
                    </DialogContentText>
                    <br />
                    <DialogContentText id="alert-dialog-description">
                        Note: Only share your account with someone you trust fully with your
                        CoinTracker account
                    </DialogContentText>
                    <br />
                    <label>Tax pro's email</label>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="outlined-basic"
                        name="email"
                        type="email"
                        fullWidth
                        variant="outlined"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" autoFocus onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="contained" disabled={!isEmailValid} onClick={handleInvite}>
                        Invite
                    </Button>
                    <LoadingButton loading={inviteLoader} loadingPosition="start" />
                </DialogActions>
                <br />
            </Dialog>
        </Box>
    );
}
