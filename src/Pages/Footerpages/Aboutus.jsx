import React, {useContext, useEffect} from 'react';

import { Box, Container, Typography, useTheme } from '@mui/material';

import getbg from '../../images/getbg.png';
import Header from '../../Components/Header';
import Herosection from "./AboutComps/Herosection";
import MissionSection from "./AboutComps/MissionSection";
import ServiceSection from "./AboutComps/ServiceSection";
import VisionSection from "./AboutComps/VisionSection";
import ContactSection from "./AboutComps/ContactSection";
import '../../Localization/i18next';

const Aboutus = () => {  
    const theme = useTheme();
    return (
        <Box sx={{  height: 'auto', backgroundSize: 'cover' }}>
            <Herosection />
            <MissionSection />
            <ServiceSection />
            <VisionSection />
            <ContactSection />
        </Box>
    );
};

export default Aboutus;