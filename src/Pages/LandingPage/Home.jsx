import React, {useContext, useEffect} from 'react';
import { Box } from '@mui/material';
import Header from "../../Components/Header";
import MainSection from "./MainSection";
import PortfolioSection from "./PortfolioSection";
import {DataContext} from "../../utils/ContextAPI";
import {changeLanguage} from "i18next";

const Home = () => {

    return (
        <Box sx={{ textAlign: { sm: 'center', xs: 'center', md:'left'}, }}>
           <MainSection />
            <PortfolioSection/>
        </Box>
    );
};

export default Home;
