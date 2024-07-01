import {
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    useTheme,
} from '@mui/material';
import Check from '@mui/icons-material/Check';
import { styled } from '@mui/material/styles';

const CheckIcon = styled(Check)({
    color: '#0B7BC3',
});

const compareDetails = [
    {
        title: 'Lorem ipsum dolor sit amet',
        free: 'yes',
        hobbyist: 'yes',
        premium: 'yes',
        unlimited: 'yes',
    },
    {
        title: 'Lorem ipsum dolor sit amet',
        free: 'yes',
        hobbyist: 'yes',
        premium: 'yes',
        unlimited: 'yes',
    },
    {
        title: 'Lorem ipsum dolor sit amet',
        free: 'yes',
        hobbyist: 'yes',
        premium: 'yes',
        unlimited: 'yes',
    },
    {
        title: 'Lorem ipsum dolor sit amet',
        free: 'yes',
        hobbyist: 'yes',
        premium: 'yes',
        unlimited: 'yes',
    },
    {
        title: 'Lorem ipsum dolor sit amet',
        free: 'yes',
        hobbyist: 'yes',
        premium: 'yes',
        unlimited: 'yes',
    },
    {
        title: 'Lorem ipsum dolor sit amet',
        free: 'yes',
        hobbyist: 'yes',
        premium: 'yes',
        unlimited: 'yes',
    },
    {
        title: 'Lorem ipsum dolor sit amet',
        free: 'yes',
        hobbyist: 'yes',
        premium: 'yes',
        unlimited: 'yes',
    },
    {
        title: 'Lorem ipsum dolor sit amet',
        free: 'yes',
        hobbyist: 'yes',
        premium: 'yes',
        unlimited: 'yes',
    },
    {
        title: 'Lorem ipsum dolor sit amet',
        free: 'yes',
        hobbyist: 'yes',
        premium: 'yes',
        unlimited: 'yes',
    },
    {
        title: 'Lorem ipsum dolor sit amet',
        free: 'yes',
        hobbyist: 'yes',
        premium: 'yes',
        unlimited: 'yes',
    },
    {
        title: 'Lorem ipsum dolor sit amet',
        free: 'no',
        hobbyist: 'yes',
        premium: 'yes',
        unlimited: 'yes',
    },
    {
        title: 'Lorem ipsum dolor sit amet',
        free: 'no',
        hobbyist: 'no',
        premium: 'yes',
        unlimited: 'yes',
    },
    {
        title: 'Lorem ipsum dolor sit amet',
        free: 'no',
        hobbyist: 'no',
        premium: 'yes',
        unlimited: 'yes',
    },
    {
        title: 'Lorem ipsum dolor sit amet',
        free: 'no',
        hobbyist: 'no',
        premium: 'yes',
        unlimited: 'yes',
    },
    {
        title: 'Lorem ipsum dolor sit amet',
        free: 'no',
        hobbyist: 'no',
        premium: 'no',
        unlimited: 'yes',
    },
    {
        title: 'Lorem ipsum dolor sit amet',
        free: 'no',
        hobbyist: 'no',
        premium: 'no',
        unlimited: 'yes',
    },
];

function ComparePlans() {
    const theme = useTheme();
    return (
        <>
            <Typography
                color={theme.palette.text.darkblue}
                textAlign={'center'}
                fontSize="1rem"
                fontFamily={'Gmarket'}
                fontWeight="600"
                mt={11}
                textTransform="uppercase"
            >
                Compare Plans
            </Typography>

            <Typography
                color={theme.palette.text.darkblue}
                textAlign={'center'}
                fontSize={{ xs: '25px', md: '30px' }}
                fontFamily={'Orbitron'}
                fontWeight="800"
                textTransform="uppercase"
                mt={1}
            >
                Pricing Details
            </Typography>

            <Typography
                color={theme.palette.text.lightbrown}
                textAlign={'center'}
                fontSize="1rem"
                fontFamily={'Gmarket'}
                mt={1}
                mb={8}
            >
                Here is a detailed breakdown of what comes with each tax plan.
            </Typography>
            <TableContainer
                sx={{
                    border: '2px solid #4FA9E3',
                    borderRadius: '17px',
                    // overflowX: 'scroll',
                    overflowX: 'auto',
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                }}
            >
                <Table
                    sx={{
                        background:
                            '0px 0px 60px 0px rgba(0, 0, 0, 0.05)',
                    }}
                >
                    <TableHead>
                        <TableRow   sx={{
                                background: 'linear-gradient(180deg, #4FA9E3 0%, #A1DAFD 100%)',
                            }}>
                            <TableCell sx={{ minWidth: '150px' }} />
                            <TableCell
                                sx={{ color: `${theme.palette.text.white}` }}
                                align="center"
                            >
                                Free
                            </TableCell>
                            <TableCell
                                align="center"
                                sx={{ color: `${theme.palette.text.white}` }}
                            >
                                Hobbyist
                            </TableCell>
                            <TableCell
                                align="center"
                                sx={{ color: `${theme.palette.text.white}` }}
                            >
                                Premium
                            </TableCell>
                            <TableCell
                                align="center"
                                sx={{ color: `${theme.palette.text.white}` }}
                            >
                                Unlimited
                            </TableCell>
                        </TableRow>
                        <TableRow
                          
                        >
                            <TableCell align="center" />
                            <TableCell align="center" sx={{ color: 'black' }}>
                                25 Transactions
                            </TableCell>
                            <TableCell align="center" sx={{ color: 'black' }}>
                                100 Transactions
                            </TableCell>
                            <TableCell align="center" sx={{ color: 'black' }}>
                                1000 Transactions
                            </TableCell>
                            <TableCell align="center" sx={{ color: 'black' }}>
                                Unlimited Transactions
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {compareDetails.map((item, i) => {
                            return (
                                <TableRow key={i}>
                                    <TableCell
                                        align="center"
                                        sx={{ color: `${theme.palette.text.lightbrown}` }}
                                    >
                                        {item.title}
                                    </TableCell>
                                    <TableCell align="center">
                                        {item.free == 'yes' ? <CheckIcon /> : null}
                                    </TableCell>
                                    <TableCell align="center">
                                        {item.hobbyist == 'yes' ? <CheckIcon /> : null}
                                    </TableCell>
                                    <TableCell align="center">
                                        {item.premium == 'yes' ? <CheckIcon /> : null}
                                    </TableCell>
                                    <TableCell align="center">
                                        {item.unlimited == 'yes' ? <CheckIcon /> : null}
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default ComparePlans;
