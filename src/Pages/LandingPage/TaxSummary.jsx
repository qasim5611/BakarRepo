import React from 'react';
import { Box, Typography, Paper, Grid, Avatar, Button  } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import InfoIcon from '@mui/icons-material/Info';

const data = {
    taxSummary: [
        { year: '2023', capGains: '87,492,104', taxIncome: '84,992,104' },
        { year: '2023', capGains: '61,023,432', taxIncome: '58,523,432' },
        { year: '2023', capGains: '23,403,345', taxIncome: '20,903,345' },
    ],
    transitions: [
        { date: '2023-06-24', amountUSDT: '1,723.234 USDT', amountKRW: '2,392,745 KRW' },
        { date: '2023-06-22', amountUSDT: '4,503.644 USDT', amountKRW: '6,253,400 KRW' },
        { date: '2023-06-13', amountUSDT: '177.229 USDT', amountKRW: '248,086 KRW' },
    ],
};

const TransitionItem = ({ date, amountUSDT, amountKRW }) => {
    return (
        <>
    <Grid container={true} spacing={2} sx={{ marginTop: '1px' }}>
                <Grid item xs={8}>
        <Box
            sx={{
                display: 'flex',
                alignItems: 'left',
                padding: '3px',
                borderRadius: '30px',
                border: '2px solid #6BB4D1',
                width: '100%',
            }}
        >
            <Box sx={{ display: 'flex', float: 'left'  }}>
                <Avatar sx={{ backgroundColor: '#6BB4D1', width: 40, height: 40 }}>
                    <span style={{ color: '#fff' }}>!</span>
                </Avatar>
                <Box sx={{ margin: 'auto 5px' }}>
                    <Typography sx={{ fontSize: '14px' }}>
                        Receive
                    </Typography>
                    <Typography sx={{ color: '#90a4ae', fontSize: '8px' }}>
                        {date}
                    </Typography>
                </Box>
            </Box>
        </Box>
     </Grid>
        <Grid item xs={4}>
            <Box sx={{ textAlign: 'right', padding: '5px' }}>
                <Typography sx={{ color: '#6BB4D1', fontWeight: 'bold', fontSize:'14px' }}>
                    {amountUSDT}
                </Typography>
                <Typography sx={{ color: '#90a4ae', fontSize:'10px', width:'100%'  }}>
                    {amountKRW}
                </Typography>
            </Box>
        </Grid>
    </Grid>
    </>
    );
};
const StyledButton = () => {
    return (
        <Button
            variant="outlined"
            size="small"
            endIcon={<AddIcon sx={{ color: '#0288d1' }} />}
            sx={{
                borderRadius: '20px',
                borderColor: '#0288d1',
                color: '#333333',
                padding: '0 10px',
                textTransform: 'none',
                fontSize: '12px',
                ':hover': {
                    borderColor: '#0277bd',
                    backgroundColor: 'rgba(2, 136, 209, 0.04)',
                },
            }}
        >
            See details
        </Button>
    );
};

const styledSubHeading = (txt) => <Typography color="textSecondary" sx={{ color: '#333333', fontSize: '12px', fontWeight: 500 }} >{txt} </Typography>

const styledHeading = (txt) => <Typography sx={{ color: '#6BB4D1', fontSize: '16px',  fontWeight: 'bold', textAlign: 'left', float: 'left' }}>{txt}</Typography> ;

const TaxSummary = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                gap: '20px',
                fontFamily: 'Poppins',
                padding: '20px',
            }}
        >
        <Grid container>
            <Grid xs={12} sm={12} md={6}>
            <Paper
                elevation={3}
                sx={{
                    marginTop: '20px',
                    marginRight: { md: '20px', sm: '0', xs: '0' },
                    padding: '20px',
                    borderRadius: '15px',
                    backgroundColor: '#F2F8FB',
                    position: 'relative',
                }}
            >
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        {styledHeading('Tax summary')}
                    </Grid>
                    <Grid item xs={6}>
                        {StyledButton('See details')}
                    </Grid>
                </Grid>
                <Grid container spacing={2} sx={{ marginTop: '20px' }}>
                    {
                        ['Tax year', 'Cap gains', 'Tax. income'].map(
                            (item, index) =>
                            (<Grid item xs={4} key={index}>
                                {styledSubHeading(item)}
                            </Grid>))
                    }
                </Grid>
                <hr/>
                <Grid container spacing={2} >
                    {data.taxSummary.map((item, index) => (
                        <>
                        <React.Fragment key={index} sx={{ color: '#888888' }}>
                            <Grid item xs={4}>
                                <Typography variant="body2">{item.year}</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant="body2">{item.capGains}</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant="body2">{item.taxIncome}</Typography>
                            </Grid>
                        </React.Fragment>
                        </>
                    ))}
                </Grid>
            </Paper>
            </Grid>
            <Grid xs={12} sm={12} md={6}>
            <Paper
                elevation={3}
                sx={{
                    marginTop: '20px',
                    padding: '20px',
                    borderRadius: '15px',
                    backgroundColor: '#F2F8FB',
                    position: 'relative',
                }}
            >
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        {styledHeading('Transactions')}
                    </Grid>
                    <Grid item xs={6}>
                        {StyledButton('See details')}
                    </Grid>
                </Grid>
                <TransitionItem
                    date="2023-06-24"
                    amountUSDT="1,723 USDT"
                    amountKRW="2,392 KRW"
                />
                <TransitionItem
                    date="2023-06-24"
                    amountUSDT="1,723 USDT"
                    amountKRW="2,392 KRW"
                />
                <TransitionItem
                    date="2023-06-24"
                    amountUSDT="1,723 USDT"
                    amountKRW="2,392 KRW"
                />
                </Paper>
            </Grid>
        </Grid>
    </Box>
    );
};

export default TaxSummary;
