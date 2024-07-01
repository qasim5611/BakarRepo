import Navigation from '../../Components/Navigation';
import React, { useEffect, useState } from 'react';

import { Box, Button, Grid, TextField, Typography } from '@mui/material';
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
import DeleteIcon from '@mui/icons-material/Delete';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

import ClientTaxesImg from '../../images/Taxes/clientcover.png';

import { incomingInvites, AcceptsentInvitations } from './../../api/api';

import { useNavigate } from 'react-router-dom';

const buttonStyle = {
    color: 'white',
    textTransform: 'capitalize',
    fontSize: { md: '14px', xs: '12px' },
    backgroundColor: '#0182ff',
    py: 1.5,
    px: 4,
    mt: 2,
    '&:hover': {
        color: '#0182ff', // Change this to your desired hover color
    },
};

const btnaccepted = {
    // background: '#3896d2',
    color: '#3896d2',
    padding: '10px 20px',
    border: 'none',
    fontWeight: '600',
    cursor: 'pointer',
    '&:hover': {
        background: 'transparent !important',
        color: '#3896d2 !important',
    },
};

const btnaccept = {
    background: '#3896d2',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    fontWeight: '600',
    cursor: 'pointer',
    '&:hover': {
        background: 'transparent !important',
        color: '#3896d2 !important',
    },
};
const btndecline = {
    background: 'transparent',
    color: '#3896d2',
    padding: '10px 20px',
    border: 'none',
    fontWeight: '600',
    border: '1px solid #d6d6d6',
    cursor: 'pointer',

    '&:hover': {
        background: '#3896d2 !important',
        color: 'white !important',
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

export default function TaxesClient() {
    const [value, setValue] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const [email, setEmail] = React.useState('');
    const isEmailValid = email.endsWith('.com');
    const navigate = useNavigate();

    const [incomingArrayInvites, setIncomingArrayInvites] = useState([]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
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
            'awais@gmail.com',
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

    // testing
    let response = 'ali@gmail.com';

    useEffect(() => {
        let storedData = JSON.parse(localStorage.getItem('persistMe'));
        let authemail = storedData?.user?.email;
        incomingInvites(authemail).then((result) => {
            console.log('incomingInvites', result.data.data.receivedInvitations);
            setIncomingArrayInvites(result?.data?.data?.receivedInvitations);
        });
    }, []);

    const handleAcceptInvite = async (id) => {
        let obj = {
            idToAcceptInvite: id,
        };
        console.log('handleAcceptInvite', obj);
        let resp = await AcceptsentInvitations(obj);
        console.log('resp', resp);
        if (resp.data.data.status === true) {
            navigate(0);
            makeToast(resp.data.data.message, 'success', 3);
        }
    };
    // const Item = styled(Paper)(({ theme }) => ({
    //     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    //     ...theme.typography.body2,
    //     padding: theme.spacing(1),
    //     textAlign: 'center',
    //     color: theme.palette.text.secondary,
    // }));
    return (
        <Box mx={{ lg: 7, xs: 2, md: 4, sm: 3 }}>
            <Navigation />

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
                Tax Clients
            </Typography>

            <Box sx={{ width: '100%', my: 5 }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Clients" {...a11yProps(0)} />
                        <Tab label="Incoming invites" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    {response ? (
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={12}>
                                <Grid item xs={4}>
                                    <Typography
                                        sx={{
                                            fontFamily: 'Poppins',
                                            fontStyle: 'normal',
                                            fontWeight: '700',
                                            fontSize: { xs: '24px', sm: '27px', md: '32px' },
                                            color: '#161a26',
                                            my: 2,
                                        }}
                                    >
                                        Get started using CoinTracker
                                    </Typography>
                                    <Typography
                                        fontSize={{ xs: '7px', md: '16px' }}
                                        fontFamily={'Poppins'}
                                        sx={{ color: '#5b616e' }}
                                    >
                                        You can invite clients to collaborate using the Invite
                                        client button at the top right, and be sure to check out the
                                        video before getting started. You can also visit our
                                        knowledge center for additional support.
                                    </Typography>
                                    <br />
                                    <Typography
                                        fontSize={{ xs: '7px', md: '16px' }}
                                        fontFamily={'Poppins'}
                                        sx={{ color: '#5b616e' }}
                                    >
                                        If you work at a firm with other tax professionals, book a
                                        call with our team to get learn how our advanced tools for
                                        tax firms can help you super-charge your practice.
                                    </Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <img src={ClientTaxesImg} />
                                </Grid>
                            </Grid>
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
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.email}
                                            sx={{
                                                '&:last-child td, &:last-child th': { border: 0 },
                                            }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.email}
                                            </TableCell>
                                            <TableCell align="">{row.status}</TableCell>
                                            <TableCell align="">{row.actions}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    )}
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    {/* <Box sx={{ margin: '200px 0px', textAlign: 'center' }}>No invites</Box> */}
                    <Grid
                        container
                        spacing={4}
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-evenly',
                        }}
                    >
                        {incomingArrayInvites.length > 0 &&
                            incomingArrayInvites.map((item, index) => (
                                <Grid item xs={4} key={index}>
                                    <Box
                                        style={{
                                            padding: '45px 20px',
                                            border: '1px solid #d6d6d6',
                                        }}
                                    >
                                        <Box
                                            style={{
                                                textAlign: 'center',
                                            }}
                                        >
                                            <span style={{ color: '#3896d2' }}>{item.email}</span>{' '}
                                            is inviting you to collaborate on your taxes in
                                            CrypeeTracker.
                                        </Box>
                                        <br />
                                        <Box
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'space-evenly',
                                            }}
                                        >
                                            {item.inviteStatus === 'Approved' ? (
                                                <>
                                                    <Box
                                                        // onClick={() => handleAcceptInvite(item._id)}
                                                        style={btnaccepted}
                                                    >
                                                        Accepted
                                                    </Box>
                                                </>
                                            ) : (
                                                <>
                                                    <button
                                                        onClick={() => handleAcceptInvite(item._id)}
                                                        style={btnaccept}
                                                    >
                                                        Accept
                                                    </button>

                                                    <button style={btndecline}>Decline</button>
                                                </>
                                            )}
                                        </Box>
                                    </Box>
                                </Grid>
                            ))}
                    </Grid>
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
                    <Button variant="contained" disabled={!isEmailValid} onClick={handleClose}>
                        Invite
                    </Button>
                </DialogActions>
                <br />
            </Dialog>
        </Box>
    );
}
