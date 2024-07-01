import { Box, Container } from '@mui/material';

import Navigation from '../../Components/Navigation';
import OffersCards from './OffersCards';
import PlansCard from './PlansCard';
import TaxQuestion from './TaxQuestion';
import ComparePlans from './ComparePlans';

const introDetails = {
    title: 'Pricing Plans',
    offer: 'Get your 2023 Taxes done',
    status: 'You have tracked 22 transactions from January 1 2023 to December 31 2023.',
};

const plansCard = [
    {
        details: ['25 Transactions', 'Cost Basis and capital Gains', 'Error Reconciliation'],
        plans: 'Free',
        amount: '0',
        type: '$',
        validity: '',
        heading: 'Your Welcome',
        text: 'See current portfolio Daily portfolio updates Portfolio allocation',
        trial: '',
        btn: 'Current plan',
        wallet: 'Free',
    },
    {
        details: [
            '100 Transactions',
            'Cost Basis and capital Gains',
            'Error Reconciliation',
            'Product support 48 hours',
        ],
        plans: 'Hobbyist',
        amount: '53',
        type: '$',
        validity: '/month',
        heading: 'One-time payment for the tax year',
        text: 'See current portfolio Daily portfolio updates Portfolio allocation Email support Performance over time Performance by crypto',
        trial: '',
        btn: 'Upgrade',
        wallet: '30 Day Money Back Guarantee',
    },
    {
        details: [
            '1000 Transactions',
            'Cost Basis and capital Gains',
            'Error Reconciliation',
            'Tax Summary By Wallet',
            'Tax Pro Collaboration',
            'Product Support 24 hours',
        ],
        plans: 'Premium',
        amount: '179',
        type: '$',
        validity: '/month',
        heading: 'One-time payment for the tax year',
        text: 'See current portfolio Daily portfolio updates Portfolio allocation Priority support Performance over time  Performance by crypto Custom date filters Tax loss harvesting',
        trial: '',
        btn: 'Upgrade',
        wallet: '30 Day Money Back Guarantee',
    },
    {
        details: [
            'Unlimited Transactions',
            'Cost Basis and capital Gains',
            'Error Reconciliation',
            'Tax Pro Collaboration',
            'Tax Summary By Wallet',
            ' Priority Product Support',
            'Custom Features',
        ],
        plans: 'Unlimited',
        amount: '-',
        type: '',
        validity: '',
        heading: 'One-time payment for the tax year',
        text: 'See current portfolio  Daily portfolio updates  Portfolio allocation Priority support Performance over time Performance by crypto Custom date filters Tax loss harvesting Accounting Custom functionality',
        trial: '',
        btn: 'See pricing',
        wallet: '30 Day Money Back Guarantee',
    },
];

const SeePricing = () => {
    return (
        <Box  mx={{lg:7,xs:2,md:4,sm:3}}>
            <Navigation />
          
               
                    <PlansCard introDetails={introDetails} plansCard={plansCard} />
                    <ComparePlans />
                    <OffersCards plansCard={plansCard} />
             
          
            <TaxQuestion seePricingNeeded={false} />
        </Box>
    );
};

export default SeePricing;
