import { Box, Container } from '@mui/material';
import Navigation from '../../Components/Navigation';
import PortfolioInsights from './PortfolioInsights';
import Pastdatesorting from './Pastdatasorting';

const Pastperformance = () => {
    return (
        <Box mx={{ lg: 7, xs: 2, md: 4, sm: 3 }}>
            <Navigation />
            <Pastdatesorting />
            <PortfolioInsights />
        </Box>
    );
};

export default Pastperformance;
