import React, { useEffect, useState } from 'react';
import {
    Box,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import Skeleton from '@mui/material/Skeleton';

export default function YourAssets({ data }) {
    const [assetsData, setAssetsData] = useState(null);
    useEffect(() => {
        const handleData = async () => {
            let assetArray = [];
            if (data) {
                for (let [key, value] of Object?.entries(data)) {
                    assetArray.push({
                        name: key,
                        data: value,
                    });
                }
            }
            setAssetsData(assetArray);
        };
        handleData();
    }, [data]);
    return (
        <>
            <Box px={2}>
                <Stack direction="row" gap={2} justifyContent="space-between">
                    <Typography
                        fontFamily={'Gmarket'}
                        sx={{
                            fontStyle: 'normal',
                            fontWeight: '800',
                            fontSize: { xs: '16px', md: '20px' },
                            lineHeight: '22px',
                            textTransform: 'uppercase',
                            color: '#0B7BC3',
                        }}
                    >
                        Your assets
                    </Typography>
                    <Typography
                        fontFamily={'Gmarket'}
                        sx={{
                            fontStyle: 'normal',
                            fontWeight: '500',
                            fontSize: { xs: '13px', md: '15px' },
                            lineHeight: '16px',
                            textAlign: 'center',
                            color: 'var(--Text-Black, #333)',
                            borderBottom: '1px solid #FFFFFF',
                            width: 'max-content',
                        }}
                    >
                        See all assets
                    </Typography>
                </Stack>
                <Box
                    sx={{
                        overflow: 'auto',
                        background: '#F9FCFF',
                        px: 2,
                        py: 2,
                        borderRadius: '10px',
                    }}
                    mt={{ xs: 4, md: 8 }}
                >
                    <TableContainer>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow sx={{ '& th': { border: 'none' } }}>
                                    <TableCell align="left">
                                        <Box
                                            fontFamily={'Gmarket'}
                                            sx={{
                                                fontStyle: 'normal',
                                                fontWeight: '500',
                                                fontSize: '15px',
                                                lineHeight: '18px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                color: 'var(--Text-Black, #333)',
                                            }}
                                        >
                                            Name
                                            <UnfoldMoreIcon />
                                        </Box>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Box
                                            sx={{
                                                fontFamily: 'Gmarket',
                                                fontStyle: 'normal',
                                                fontWeight: '500',
                                                fontSize: '15px',
                                                lineHeight: '18px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                color: 'var(--Text-Black, #333)',
                                            }}
                                        >
                                            Price
                                            <UnfoldMoreIcon />
                                        </Box>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Box
                                            sx={{
                                                fontFamily: 'Gmarket',
                                                fontStyle: 'normal',
                                                fontWeight: '500',
                                                fontSize: '15px',
                                                lineHeight: '18px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                color: 'var(--Text-Black, #333)',
                                            }}
                                        >
                                            Holdings
                                            <UnfoldMoreIcon />
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {assetsData?.length > 0 ? (
                                    assetsData.map(({ name, data }, i) => (
                                        <TableRow
                                            key={i}
                                            sx={{
                                                '& td': {
                                                    borderColor: '#125A86',
                                                    borderWidth: '2px',
                                                },
                                                '&:last-child td, &:last-child th': {
                                                    border: 0,
                                                },
                                            }}
                                        >
                                            <TableCell>
                                                <Stack direction="row" gap={1}>
                                                    <img
                                                        src={`https://s2.coinmarketcap.com/static/img/coins/32x32/${data?.coinId}.png`}
                                                        alt="logo"
                                                        width={'40px'}
                                                    />
                                                    <Box>
                                                        <Box
                                                            sx={{
                                                                fontFamily: 'Gmarket',
                                                                fontStyle: 'normal',
                                                                fontWeight: '600',
                                                                fontSize: '12px',
                                                                lineHeight: '18px',
                                                                color: 'var(--Text-Black, #333)',
                                                            }}
                                                        >
                                                            {data?.exchange}
                                                        </Box>
                                                        <Box
                                                            sx={{
                                                                fontFamily: 'Poppins',
                                                                fontStyle: 'normal',
                                                                fontWeight: '400',
                                                                fontSize: '10px',
                                                                lineHeight: '18px',
                                                                color: 'var(--Text-Black, #333)',
                                                            }}
                                                        >
                                                            {data?.symbol}
                                                        </Box>
                                                    </Box>
                                                </Stack>
                                            </TableCell>
                                            <TableCell>
                                                <Box
                                                    sx={{
                                                        fontFamily: 'Gmarket',
                                                        fontStyle: 'normal',
                                                        fontWeight: '400',
                                                        fontSize: '15px',
                                                        lineHeight: '18px',
                                                        color: 'var(--Text-Black, #333)',
                                                    }}
                                                >
                                                    {`($ ${
                                                        name && (+data?.balanceInUSD).toFixed(5)
                                                    })`}
                                                </Box>
                                            </TableCell>
                                            <TableCell>
                                                <Stack
                                                    direction="row"
                                                    gap={1}
                                                    alignItems={'center'}
                                                >
                                                    <Box
                                                        sx={{
                                                            fontFamily: 'Poppins',
                                                            fontStyle: 'normal',
                                                            fontWeight: '700',
                                                            fontSize: '15px',
                                                            lineHeight: '18px',
                                                            color: 'var(--Text-Black, #333)',
                                                        }}
                                                    >
                                                        {name && (+data?.amount).toFixed(5)}
                                                    </Box>
                                                </Stack>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                ) : assetsData?.length === 0 ? (
                                    <TableRow>
                                        <TableCell colSpan={3}>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: { xs: 'left', sm: 'center' },
                                                    height: { xs: '50vh', sm: '30vh' },
                                                }}
                                            >
                                                <Typography
                                                    sx={{
                                                        width: '100%',
                                                        textAlign: { xs: 'left', sm: 'center' },
                                                        fontSize: { xs: '13px', sm: '18px' },
                                                    }}
                                                >
                                                    Add wallets or transactions to see a summary
                                                </Typography>
                                            </Box>
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    [1, 2, 3, 4, 5].map((i) => (
                                        <TableRow
                                            key={i}
                                            sx={{
                                                '& td': {
                                                    borderColor: '#125A86',
                                                    borderWidth: '2px',
                                                },
                                                '&:last-child td, &:last-child th': {
                                                    border: 0,
                                                },
                                            }}
                                        >
                                            <TableCell>
                                                <Stack
                                                    direction="row"
                                                    gap={1}
                                                    alignItems={'center'}
                                                >
                                                    <Skeleton
                                                        variant="circular"
                                                        width="45px"
                                                        height="45px"
                                                    />
                                                    <Box>
                                                        <Skeleton width="80px" height="25px" />
                                                        <Skeleton width="40px" height="20px" />
                                                    </Box>
                                                </Stack>
                                            </TableCell>
                                            <TableCell>
                                                <Skeleton width="150px" height="26px" />
                                            </TableCell>
                                            <TableCell>
                                                <Skeleton width="100px" height="22px" />
                                            </TableCell>
                                        </TableRow>
                                    ))
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>
        </>
    );
}
