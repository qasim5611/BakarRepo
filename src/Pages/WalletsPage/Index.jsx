import React from 'react';
import WalletsCard from './WalletsCard';
import Walletslist from './Walletslist';
import Navigation from '../../Components/Navigation';
import { REACT_APP_BASE_URL } from '../../config';
import { Box } from '@mui/material';

// ===================syncwallet===============
export const syncWallet = async (exchange, setSyncState) => {
    try {
        // disable button state
        setSyncState(true);
        console.log('Sync exchange start', exchange?.name);
        const localStorageData = JSON.parse(localStorage.getItem('persistMe'));
        const response = await fetch(
            `${REACT_APP_BASE_URL}/api/data/syncWallet?exchangeId=${exchange?.id}`,
            {
                method: 'GET',
                headers: {
                    Authorization: localStorageData?.user?.token,
                },
            },
        );
        const result = await response.json();
        setSyncState(false);
        console.log('sync wallets or single', result?.message);
    } catch (error) {
        setSyncState(false);
        console.error('Error sync wallet or single:', error.message);
    }
};
// ===============get my exchanges=========================
export const getExchanges = async () => {
    try {
        const localStorageData = JSON.parse(localStorage.getItem('persistMe'));
        const response = await fetch(`${REACT_APP_BASE_URL}/api/data/getMyExchanges`, {
            method: 'GET',
            headers: {
                Authorization: localStorageData?.user?.token,
            },
        });

        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
};

const Index = () => {
    return (
        <>
            <Box mx={{ lg: 7, xs: 2, md: 4, sm: 3 }}>
                <Navigation />
                <WalletsCard />
                <Walletslist />
            </Box>
        </>
    );
};

export default Index;
