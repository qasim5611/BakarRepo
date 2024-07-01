import { Box, Container } from '@mui/material';

import Navigation from '../../Components/Navigation';
import DateSorting from './DateSorting';
import PortfolioInsights from './PortfolioInsights';

const Performance = () => {
    return (
        <Box mx={{ lg: 7, xs: 2, md: 4, sm: 3 }}>
            <Navigation />
            <DateSorting />
            <PortfolioInsights />
        </Box>
    );
};

export default Performance;
