import { useState } from 'react';
import useMakeToast from './../../hooks/makeToast';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    Box,
    Stack,
    useMediaQuery,
    useTheme,
    Pagination,
    Skeleton,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { url } from '../../URL';

import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import sendIcon from '../../images/send_icon.png';
import receiveIcon from '../../images/receive_icon.png';
// import ethIcon from '../../images/eth_icon.png';
// import usdtIcon from '../../images/usdt_icon.png';

const icons = {
    receiveIcon: receiveIcon,
    sendIcon: sendIcon,
    // ethIcon: ethIcon,
    // usdtIcon: usdtIcon,
};

const History = ({
    historyDetails,
    forTransactionsPage,
    totalPages,
    page,
    setPage,
    rowsPerPage,
    setRowsPerPage,
}) => {
    const theme = useTheme();
    const makeToast = useMakeToast();

    const isMobile = useMediaQuery('(max-width: 900px)');

    const PaginationWrapper = styled(Box)({
        display: 'flex',
        justifyContent: 'center',
        mt: 2,
        '& .Mui-selected': {
            background: 'linear-gradient(180deg, #0B7BC4 0%, #5BACDE 100%)',
            color: '#fff',
        },
        '& button': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '5px',
            borderRadius: '50%',
            cursor: 'pointer',
            backgroundColor: 'white',
            border: '1px solid #5BBFFF',
            fontWeight: '500',
        },
        '& button:hover': {
            backgroundColor: '#A1DAFD',
            color: '#fff',
        },
    });

    const StyledCell = styled(TableCell)({
        width: forTransactionsPage ? '25%' : '20%',
        textAlign: !forTransactionsPage && 'center',
        padding: '2em 1.9em',
        boxSizing: 'border-box',
    });

    const StyledHeadCell = styled(TableCell)({
        color: 'white',
        textAlign: !forTransactionsPage && 'center',
        padding: '20px',
    });

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    return (
        <>
            <TableContainer>
                <Table sx={{ mt: '1.5rem', minWidth: 650 }}>
                    <TableHead
                        sx={{ background: 'linear-gradient(180deg, #4FA9E3 0%, #A1DAFD 100%)' }}
                    >
                        <TableRow
                            sx={{
                                '&:first-of-type th:first-of-type': {
                                    borderTopLeftRadius: '17px',
                                },
                                '&:first-of-type th:last-of-type': {
                                    borderTopRightRadius: '17px',
                                },
                            }}
                        >
                            <StyledHeadCell>Transaction</StyledHeadCell>
                            <StyledHeadCell>Outgoing</StyledHeadCell>
                            <StyledHeadCell>Incoming</StyledHeadCell>
                            <StyledHeadCell>Fee</StyledHeadCell>
                            <StyledHeadCell>Tx ID</StyledHeadCell>
                        </TableRow>
                    </TableHead>
                    <TableBody
                        sx={{
                            bgcolor: 'white',
                            boxShadow: '0px 0px 60px 0px rgba(0, 0, 0, 0.05)',
                            '&:last-of-type tr:last-of-type td:first-of-type': {
                                borderBottomLeftRadius: '17px',
                            },
                            '&:last-of-type tr:last-of-type td:last-of-type': {
                                borderBottomRightRadius: '17px',
                            },
                            '&:last-of-type tr:last-of-type td': {
                                border: 0,
                            },
                        }}
                    >
                        {historyDetails && historyDetails.length > 0 ? (
                            historyDetails.map((item, i) => {
                                let date = new Date(item?.completeTime).toLocaleDateString();
                                let time = new Date(item?.completeTime).toLocaleTimeString();
                                return (
                                    <TableRow key={i}>
                                        {forTransactionsPage ? (
                                            <>
                                                <StyledCell sx={{ textAlign: 'unset' }}>
                                                    <Stack
                                                        direction={'row'}
                                                        alignItems={'center'}
                                                        gap={2}
                                                    >
                                                        {['in', 'deposit', 'buy'].includes(
                                                            item.txType?.toLowerCase(),
                                                        ) ? (
                                                            <img
                                                                width={25}
                                                                height={25}
                                                                src={receiveIcon}
                                                                alt="icon"
                                                            />
                                                        ) : ['out', 'withdrawal', 'sell'].includes(
                                                              item.txType?.toLowerCase(),
                                                          ) ? (
                                                            <img
                                                                width={25}
                                                                height={25}
                                                                src={sendIcon}
                                                                alt="icon"
                                                            />
                                                        ) : (
                                                            <>
                                                                <img
                                                                    width={25}
                                                                    height={25}
                                                                    src={sendIcon}
                                                                    alt="icon"
                                                                />
                                                                <img
                                                                    width={25}
                                                                    height={25}
                                                                    src={receiveIcon}
                                                                    alt="icon"
                                                                />
                                                            </>
                                                        )}
                                                        <Box>
                                                            <Typography
                                                                color="text.lightblue"
                                                                sx={{
                                                                    fontSize: {
                                                                        xs: '0.75rem',
                                                                        sm: '1rem',
                                                                    },
                                                                    fontWeight: 600,
                                                                }}
                                                            >
                                                                {item?.txType}
                                                            </Typography>
                                                            <Typography>{date}</Typography>
                                                            <Typography>{time}</Typography>
                                                        </Box>
                                                    </Stack>
                                                </StyledCell>
                                                <StyledCell>
                                                    <Stack
                                                        alignItems={'start'}
                                                        direction={'row'}
                                                        gap={2}
                                                    >
                                                        <Box>
                                                            {!item?.inAmount ? (
                                                                '_'
                                                            ) : (
                                                                <>
                                                                    <Stack
                                                                        direction={'row'}
                                                                        alignItems={'center'}
                                                                    >
                                                                        <img
                                                                            width={25}
                                                                            height={25}
                                                                            src={`https://s2.coinmarketcap.com/static/img/coins/32x32/${item?.inCoinId}.png`}
                                                                            alt="icon"
                                                                        />
                                                                        <Typography
                                                                            sx={{
                                                                                fontWeight: 700,
                                                                            }}
                                                                        >
                                                                            {item?.inAmount}{' '}
                                                                            {item?.inCurrency}
                                                                        </Typography>
                                                                    </Stack>
                                                                    <span>
                                                                        ($
                                                                        {item?.inAmountInUSD})
                                                                    </span>
                                                                    <Typography>
                                                                        {item?.symbol}
                                                                    </Typography>

                                                                    <Typography>
                                                                        {['deposit'].includes(
                                                                            item.txType?.toLowerCase(),
                                                                        ) ? (
                                                                            <Box>
                                                                                <span>
                                                                                    {item?.address.slice(
                                                                                        0,
                                                                                        4,
                                                                                    ) +
                                                                                        '...' +
                                                                                        item?.address.slice(
                                                                                            -3,
                                                                                        )}
                                                                                </span>

                                                                                <CopyToClipboard
                                                                                    text={
                                                                                        item?.address
                                                                                    }
                                                                                    onCopy={(i) =>
                                                                                        makeToast(
                                                                                            'Copied',
                                                                                            'success',
                                                                                            3,
                                                                                        )
                                                                                    }
                                                                                >
                                                                                    <span>
                                                                                        &nbsp;&nbsp;&nbsp;
                                                                                        <ContentCopyIcon fontSize="10px" />
                                                                                    </span>
                                                                                </CopyToClipboard>
                                                                            </Box>
                                                                        ) : null}
                                                                    </Typography>
                                                                </>
                                                            )}
                                                        </Box>
                                                    </Stack>
                                                </StyledCell>
                                                <StyledCell>
                                                    <Stack
                                                        alignItems={'center'}
                                                        direction={'row'}
                                                        gap={2}
                                                    >
                                                        <Box>
                                                            {!item?.outAmount ? (
                                                                '_'
                                                            ) : (
                                                                <>
                                                                    <Stack
                                                                        direction={'row'}
                                                                        alignItems={'center'}
                                                                    >
                                                                        <img
                                                                            width={25}
                                                                            height={25}
                                                                            src={`https://s2.coinmarketcap.com/static/img/coins/32x32/${item?.outCoinId}.png`}
                                                                            alt="icon"
                                                                        />
                                                                        <Typography
                                                                            sx={{
                                                                                fontWeight: 700,
                                                                            }}
                                                                        >
                                                                            {item?.outAmount}{' '}
                                                                            {item?.outCurrency}
                                                                        </Typography>
                                                                    </Stack>
                                                                    <span>
                                                                        ${item?.outAmountInUSD}
                                                                    </span>
                                                                    <Typography>
                                                                        {item?.symbol}
                                                                    </Typography>
                                                                    <Typography>
                                                                        {['withdrawal'].includes(
                                                                            item.txType?.toLowerCase(),
                                                                        ) ? (
                                                                            <Box>
                                                                                <span>
                                                                                    {item?.address.slice(
                                                                                        0,
                                                                                        4,
                                                                                    ) +
                                                                                        '...' +
                                                                                        item?.address.slice(
                                                                                            -3,
                                                                                        )}
                                                                                </span>

                                                                                <CopyToClipboard
                                                                                    text={
                                                                                        item?.address
                                                                                    }
                                                                                    onCopy={(i) =>
                                                                                        makeToast(
                                                                                            'Copied',
                                                                                            'success',
                                                                                            3,
                                                                                        )
                                                                                    }
                                                                                >
                                                                                    <span>
                                                                                        &nbsp;&nbsp;&nbsp;
                                                                                        <ContentCopyIcon fontSize="10px" />
                                                                                    </span>
                                                                                </CopyToClipboard>
                                                                            </Box>
                                                                        ) : null}
                                                                    </Typography>
                                                                </>
                                                            )}
                                                        </Box>
                                                    </Stack>
                                                </StyledCell>
                                                <StyledCell>
                                                    <Box>
                                                        {!item?.fee ? (
                                                            '_'
                                                        ) : (
                                                            <>
                                                                <Typography
                                                                    sx={{
                                                                        fontWeight: 700,
                                                                        display: 'flex',
                                                                        alignItems: 'center',
                                                                        gap: '0.5em',
                                                                    }}
                                                                >
                                                                    <img
                                                                        width={25}
                                                                        height={25}
                                                                        src={`https://s2.coinmarketcap.com/static/img/coins/32x32/${item?.outCoinId}.png`}
                                                                        alt="icon"
                                                                    />
                                                                    {item?.fee}
                                                                </Typography>
                                                                <span>${item.feeInUSD}</span>
                                                            </>
                                                        )}
                                                    </Box>
                                                </StyledCell>
                                                <StyledCell>
                                                    {item?.txId ? (
                                                        <span>
                                                            <Box
                                                                sx={{
                                                                    display: 'flex',
                                                                    flexDirection: 'row',
                                                                    alignItems: 'end',
                                                                }}
                                                            >
                                                                <span>
                                                                    {item?.txId.slice(0, 4) +
                                                                        '...' +
                                                                        item?.txId.slice(-3)}
                                                                </span>

                                                                <CopyToClipboard
                                                                    text={item?.txId}
                                                                    onCopy={(i) =>
                                                                        makeToast(
                                                                            'Copied',
                                                                            'success',
                                                                            3,
                                                                        )
                                                                    }
                                                                >
                                                                    <span>
                                                                        &nbsp;&nbsp;&nbsp;
                                                                        <ContentCopyIcon fontSize="10px" />
                                                                    </span>
                                                                </CopyToClipboard>
                                                            </Box>

                                                            {/* makeToast(result?.message, 'success', 3); */}

                                                            {/* {copied ? (
                                                                  <span style={{ color: 'red' }}>
                                                                      Copied.
                                                                  </span>
                                                              ) : null} */}
                                                        </span>
                                                    ) : (
                                                        <div>...</div>
                                                    )}
                                                </StyledCell>{' '}
                                            </>
                                        ) : (
                                            <>
                                                <StyledCell sx={{ textAlign: 'start', pl: '3em' }}>
                                                    <Stack
                                                        alignItems={'center'}
                                                        direction={'row'}
                                                        gap={1}
                                                    >
                                                        <img
                                                            width={40}
                                                            height={40}
                                                            src={icons[item.coin.icon]}
                                                            alt="icon"
                                                        />
                                                        <Box>
                                                            <Typography
                                                                sx={{
                                                                    fontSize: {
                                                                        xs: '0.75rem',
                                                                        sm: '1rem',
                                                                    },
                                                                    fontWeight: 600,
                                                                }}
                                                            >
                                                                {item.coin.short}
                                                            </Typography>
                                                            <Typography sx={{ fontSize: '12px' }}>
                                                                {item.coin.coinName}
                                                            </Typography>
                                                        </Box>
                                                    </Stack>
                                                </StyledCell>
                                                <StyledCell>
                                                    {item.price.currency}
                                                    {item.price.value}
                                                </StyledCell>
                                                <StyledCell>{item.oneDayChange}</StyledCell>
                                                <StyledCell>{item.marketCap}</StyledCell>
                                                <StyledCell>{item.oneDayVolume}</StyledCell>
                                                {/* <StyledCell>{item.supply}</StyledCell> */}
                                            </>
                                        )}
                                    </TableRow>
                                );
                            })
                        ) : historyDetails?.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={5}>
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
                            [1, 2, 3, 4, 5].map((item, i) => (
                                <TableRow key={i}>
                                    <StyledCell>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'left',
                                                alignItems: 'center',
                                                gap: 1.5,
                                            }}
                                        >
                                            <Skeleton
                                                variant="circular"
                                                sx={{ height: '40px', width: '40px' }}
                                            />
                                            <Box>
                                                <Skeleton sx={{ width: '40px' }} />
                                                <Skeleton sx={{ width: '80px' }} />
                                                <Skeleton sx={{ width: '100px' }} />
                                            </Box>
                                        </Box>
                                    </StyledCell>
                                    <StyledCell sx={{ textAlign: 'center' }}>
                                        <Box>
                                            <Skeleton sx={{ width: '120px' }} />
                                            <Skeleton sx={{ width: '100px' }} />
                                            <Skeleton sx={{ width: '70px' }} />
                                        </Box>
                                    </StyledCell>
                                    <StyledCell sx={{ textAlign: 'center' }}>
                                        <Box>
                                            <Skeleton sx={{ width: '120px' }} />
                                            <Skeleton sx={{ width: '100px' }} />
                                            <Skeleton sx={{ width: '70px' }} />
                                        </Box>
                                    </StyledCell>
                                    <StyledCell sx={{ textAlign: 'center' }}>
                                        <Box>
                                            <Skeleton sx={{ width: '100px' }} />
                                            <Skeleton sx={{ width: '70px' }} />
                                        </Box>
                                    </StyledCell>
                                    <StyledCell sx={{ textAlign: 'left' }}>
                                        <Skeleton sx={{ width: '100px' }} />
                                    </StyledCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            {historyDetails?.length > 0 && (
                <PaginationWrapper
                    sx={{ '& button': { width: '50px', padding: '1.6em 0 1.8em 0' } }}
                >
                    <Pagination
                        color="primary"
                        count={totalPages}
                        defaultPage={1}
                        page={page}
                        onChange={handleChangePage}
                        labelrowsperpage="10"
                        boundaryCount={1}
                    />
                </PaginationWrapper>
            )}
        </>
    );
};

export default History;
