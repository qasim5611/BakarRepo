import Navigation from '../../Components/Navigation';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Account from './Account';
import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Notifications from './Notifications';

function Index() {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <Box mx={{ lg: 7, xs: 2, md: 4, sm: 3 }}>
                <Navigation />
                <Typography
                    sx={{
                        fontFamily: 'Gmarket',
                        fontSize: { xs: '1.2rem', md: '1.8rem' },
                        fontWeight: 900,
                        textTransform: 'uppercase',
                    }}
                >
                    Settings
                </Typography>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Account" value="1" />
                            <Tab label="Notifications" value="2" />
                            <Tab label="Subscriptoin" value="3" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <Account />
                    </TabPanel>
                    <TabPanel value="2">
                        <Notifications />
                    </TabPanel>
                    <TabPanel value="3">
                        <Navigate to="/pricing-details" />
                    </TabPanel>
                </TabContext>
            </Box>
        </>
    );
}

export default Index;
