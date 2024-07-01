import { useEffect, useState } from 'react';
import { Box, Container } from '@mui/material';

import axios from 'axios';

import Navigation from '../../Components/Navigation';
import SearchSection from './SearchSection';
import CoinsPrices from './CoinsPrices';
import CoinTable from './Cryptohistory';
import { REACT_APP_BASE_URL } from '../../config';

const CryptoPrices = () => {
    const [cryptoPricesData, setCryptoPricesData] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [activePage, setActivePage] = useState(1);
    const [pageLimit, setPageLimit] = useState(100);
    useEffect(() => {
        const fetchCryptos = async () => {
            try {
                const refreshToken = localStorage.getItem('persistMe')
                    ? JSON.parse(localStorage.getItem('persistMe'))
                    : null;
                // console.log(activePage, pageLimit);
                let response = await axios.get(`${REACT_APP_BASE_URL}/api/data/getCryptoPrices`, {
                    params: { page: activePage, limit: pageLimit },
                    headers: {
                        Authorization: refreshToken?.user?.token,
                    },
                });

                // console.log(response.data?.data, 'response.data-=-=-');
                setCryptoPricesData(response.data?.data?.data);
                setPageCount(response.data?.data?.pageCount);
                setActivePage(response.data?.data?.currentPage);
            } catch (error) {
                console.log(error);
            }
        };
        fetchCryptos();
    }, [activePage, pageLimit]);
    return (
        <Box mx={{ lg: 7, xs: 2, md: 4, sm: 3 }}>
            <Navigation />
            <SearchSection />
            <CoinsPrices />
            <CoinTable
                data={cryptoPricesData}
                pageCount={pageCount}
                activePage={activePage}
                setActivePage={setActivePage}
                pageLimit={pageLimit}
                setPageLimit={setPageLimit}
            />
        </Box>
    );
};

export default CryptoPrices;
