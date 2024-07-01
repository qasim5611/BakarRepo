import React, { useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
    Box,
    styled,
    Skeleton,
} from '@mui/material';
import Pagination from '@mui/material/Pagination';

const CoinTable = ({ data, pageCount, activePage, setActivePage, pageLimit, setPageLimit }) => {
    const columns = [
        'Coin',
        'Price (USD)',
        '1-Day %',
        'Market Cap',
        '1-Day Volume',
        'Circulating Supply',
    ];

    const PaginationWrapper = styled(Box)({
        display: 'flex',
        justifyContent: 'center',
        mt: 2,
        '& .Mui-selected': {
            background: 'linear-gradient(180deg, #0B7BC4 0%, #5BACDE 100%)',
            color: '#fff !important',
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

    const handleChangePage = (event, newPage) => {
        setActivePage(newPage);
    };

    // format number value to 1K, 1M, 1B etc
    const formatNumberValue = (value) => {
        const absValue = Math.abs(value);
        if (absValue < 1000) {
            return value;
        } else if (absValue >= 1e12) {
            // Trillion
            const billions = (value / 1e12).toFixed(1);
            return billions.endsWith('.0') ? billions.slice(0, -2) + 'T' : billions + 'T';
        } else if (absValue >= 1e9) {
            // Billion
            const billions = (value / 1e9).toFixed(1);
            return billions.endsWith('.0') ? billions.slice(0, -2) + 'B' : billions + 'B';
        } else if (absValue >= 1e6) {
            // Million
            const millions = (value / 1e6).toFixed(1);
            return millions.endsWith('.0') ? millions.slice(0, -2) + 'M' : millions + 'M';
        } else if (absValue >= 1e3) {
            // Thousand
            const thousands = (value / 1e3).toFixed(0);
            return thousands.endsWith('.0') ? thousands.slice(0, -2) + 'K' : thousands + 'K';
        }
    };

    return (
        <Box>
            <TableContainer component={Paper} sx={{ mt: 5, maxHeight: '90vh', minWidth: '500px' }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column, i) => (
                                <TableCell
                                    sx={{
                                        color: 'white',
                                        textAlign: i === columns.length - 1 ? 'right' : 'left',

                                        background:
                                            'linear-gradient(180deg, #29A3F1 -27.01%, #2896DC 36.23%, #0B7AC1 110.95%) !important',
                                    }}
                                    key={column}
                                >
                                    {column}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.length > 0
                            ? data?.map((row, i) => (
                                  <TableRow key={i}>
                                      <TableCell>
                                          <Box display="flex" gap={'10px'}>
                                              <img
                                                  width={35}
                                                  height={35}
                                                  src={`https://s2.coinmarketcap.com/static/img/coins/32x32/${row?.id}.png`}
                                                  alt={row?.name}
                                              />

                                              <Typography>
                                                  {row?.name}
                                                  <Typography fontSize={'10px'} fontWeight={500}>
                                                      {row?.symbol}
                                                  </Typography>
                                              </Typography>
                                          </Box>
                                      </TableCell>
                                      <TableCell>{`USD ${(+row?.quote?.USD?.price).toFixed(
                                          4,
                                      )}`}</TableCell>
                                      <TableCell>{`${(+row?.quote?.USD?.percent_change_24h).toFixed(
                                          2,
                                      )}%`}</TableCell>
                                      <TableCell>{`USD ${formatNumberValue(
                                          +row?.quote?.USD?.market_cap,
                                      )}`}</TableCell>
                                      <TableCell>{`USD ${formatNumberValue(
                                          +row?.quote?.USD?.volume_24h,
                                      )}`}</TableCell>
                                      <TableCell sx={{ textAlign: 'right' }}>
                                          {row?.circulating_supply}
                                      </TableCell>
                                  </TableRow>
                              ))
                            : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((row, i) => (
                                  <TableRow key={i}>
                                      <TableCell
                                          sx={{
                                              display: 'flex',
                                              gap: '10px',
                                              alignItems: 'center',
                                          }}
                                      >
                                          <Skeleton
                                              variant="circular"
                                              sx={{
                                                  width: { xs: '35px', sm: '40px' },
                                                  height: { xs: '35px', sm: '40px' },
                                              }}
                                          />
                                          <Box>
                                              <Skeleton sx={{ width: '70px' }} />
                                              <Skeleton sx={{ width: '40px' }} />
                                          </Box>
                                      </TableCell>
                                      <TableCell>
                                          <Skeleton sx={{ width: '100px' }} />
                                      </TableCell>
                                      <TableCell>
                                          <Skeleton sx={{ width: '40px' }} />
                                      </TableCell>
                                      <TableCell>
                                          <Skeleton sx={{ width: '70px' }} />
                                      </TableCell>
                                      <TableCell>
                                          <Skeleton sx={{ width: '90px' }} />
                                      </TableCell>
                                      <TableCell>
                                          <Skeleton sx={{ width: '120px', ml: 'auto' }} />
                                      </TableCell>
                                  </TableRow>
                              ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <PaginationWrapper
                sx={{
                    '& button': {
                        width: { xs: '35px', sm: '50px' },
                        height: { xs: '35px', sm: '50px' },
                    },
                }}
            >
                <Pagination
                    count={pageCount}
                    defaultPage={+activePage}
                    page={+activePage}
                    onChange={handleChangePage}
                    boundaryCount={1}
                />
            </PaginationWrapper>
        </Box>
    );
};

export default CoinTable;
