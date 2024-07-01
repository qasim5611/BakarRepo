import { Box, Container } from '@mui/material';

import PlansCard from './PlansCard';
import TaxQuestion from './TaxQuestion';
import Navigation from '../../Components/Navigation';

const plansCard = [
    {
        plans: 'Free',
        amount: '0',
        type: '',
        validity: '',
        heading: 'Covers the basics',
        text: 'See current portfolio Daily portfolio updates Portfolio allocation',
        trial: 'Free Version',
        btn: 'Current plan',
        wallet: 'Eligible up to 5 wallets',
    },
    {
        plans: 'Enthusiast',
        amount: '2,248',
        type: 'PKR',
        validity: '/month',
        heading: 'All the essentials for crypto users',
        text: 'See current portfolio Daily portfolio updates Portfolio allocation Email support Performance over time Performance by crypto',
        trial: 'FREE 7-DAY TRIAL',
        btn: 'Start free trial',
        wallet: 'Eligible up to 30 wallets',
    },
    {
        plans: 'Pro',
        amount: '15,899',
        type: 'PKR',
        validity: '/month',
        heading: 'Powerful tools for active traders',
        text: 'See current portfolio Daily portfolio updates Portfolio allocation Priority support Performance over time  Performance by crypto Custom date filters Tax loss harvesting',
        trial: 'FREE 7-DAY TRIAL',
        btn: 'Start free trial',
        wallet: 'Eligible up to 30 wallets',
    },
    {
        plans: 'Custom',
        amount: 'Priced individually',
        type: '',
        validity: '',
        heading: 'For power users and businesses',
        text: 'See current portfolio  Daily portfolio updates  Portfolio allocation Priority support Performance over time Performance by crypto Custom date filters Tax loss harvesting Accounting Custom functionality',
        trial: 'No Trial',
        btn: 'Request a quote',
        wallet: 'Eligible up to 1K wallets',
    },
];

const Plans = () => {
    return (
        <Box mx={{lg:7,xs:2,md:4,sm:3}}>
            <Navigation />
                <PlansCard plansCard={plansCard} />
            <TaxQuestion seePricingNeeded={true} />
        </Box>
    );
};

export default Plans;
