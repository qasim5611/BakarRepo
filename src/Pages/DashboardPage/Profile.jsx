import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, Card, Stack, Typography } from '@mui/material';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';
import { graphic, use } from 'echarts';
import axios from 'axios';
import { REACT_APP_BASE_URL } from '../../config';

import Skeleton from '@mui/material/Skeleton';
import sample1 from '../../images/sample1.svg';

echarts.registerTheme('my_theme', {
    // backgroundColor: '#f4cccc'
});

export default function Profile() {
    const [time, settime] = useState(0);
    const [date, setDate] = useState([]);
    const [value, setValue] = useState([]);
    const [alldate, setAllDate] = useState([]);
    const [allvalue, setAllValue] = useState([]);
    const [profile, setProfile] = useState(null);
    const [asset, setProfileAsset] = useState(null);
    const [assetper, setProfilePerc] = useState(null);
    const [activeButton, setActiveButton] = useState(null);

    const [nullAlert, setnullAlert] = useState(null);

    const [combineTimeValue, setCombineTimeValue] = useState({});

    const fetchProfile = async () => {
        try {
            const refreshToken = localStorage.getItem('persistMe')
                ? JSON.parse(localStorage.getItem('persistMe'))
                : null;
            let response = await axios.get(`${REACT_APP_BASE_URL}/api/data/getPortfolio`, {
                headers: {
                    Authorization: refreshToken?.user?.token,
                },
            });
            // console.log(response.data, 'response.data-=-=');
            setProfile(response.data?.data);
            setProfileAsset(response.data?.assets);
            setProfilePerc(response.data?.assetsPercentage);

            let timeArray = [];
            let valueArray = [];
            for (let i = 0; i < response?.data?.data?.graphData?.length; i++) {
                timeArray.push(response?.data?.data?.graphData[i]?.date.split('T')[0]);
                valueArray.push(response?.data?.data?.graphData[i]?.balance);
                console.log();
            }
            setCombineTimeValue(response?.data?.data?.graphData);
            setDate(timeArray);
            setAllDate(timeArray);
            setValue(valueArray);
            setAllValue(valueArray);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchProfile();
    }, []);

    const handleFilter = async (filterType) => {
        console.log('filterType', filterType);
        let filteredData = [];
        let filteredValue = [];

        // Get current date
        const currentDate = new Date();

        setActiveButton(filterType);

        const setDateFormat = (date) => {
            const originalDate = date;
            const year = originalDate.getFullYear();
            const month = String(originalDate.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed, so add 1
            const day = String(originalDate.getDate()).padStart(2, '0');
            const formattedDate = `${year}-${month}-${day}`;
            return formattedDate;
        };

        switch (filterType) {
            case '1D':
                let oneDayAgo = new Date(currentDate.getTime() - 24 * 60 * 60 * 1000);
                let oneDayAgos = setDateFormat(oneDayAgo);
                filteredData = date.filter((dateItem) => new Date(dateItem) >= oneDayAgos);

                filteredValue = combineTimeValue?.filter((item) => {
                    const itemDate = item.filteredData?.split('T')[0];
                    let result = filteredData?.includes(itemDate);
                    return date.includes(itemDate);
                });

                break;
            case '1W':
                // Filter data for last 7 days
                let oneWeekAgo = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000);
                let oneWeekAgos = setDateFormat(oneWeekAgo);

                filteredData = date.filter((dateItem) => new Date(dateItem) >= oneWeekAgos);

                break;
            case '1M':
                // Filter data for last 30 days
                let oneMonthAgo = new Date(currentDate.getTime() - 30 * 24 * 60 * 60 * 1000);
                let oneMonthAgos = setDateFormat(oneMonthAgo);

                filteredData = date.filter((dateItem) => new Date(dateItem) >= oneMonthAgos);
                break;
            case '3M':
                // Filter data for last 3 months (90 days)
                let threeMonthsAgo = new Date(currentDate.getTime() - 90 * 24 * 60 * 60 * 1000);
                let threeMonthsAgos = setDateFormat(threeMonthsAgo);

                filteredData = date.filter((dateItem) => new Date(dateItem) >= threeMonthsAgos);
                break;
            case '1Y':
                // Filter data for last 1 year (365 days)
                // let oneYearAgo = new Date(currentDate.getTime() - 10 * 365 * 24 * 60 * 60 * 1000); //! year
                let oneYearAgo = new Date(currentDate.getTime() - 90 * 24 * 60 * 60 * 1000); //3 month

                let oneYearAgos = setDateFormat(oneYearAgo);

                const today = new Date(); // Current date
                const oneYearAgofromtoday = new Date(oneYearAgos); // Convert oneYearAgos to a Date object
                let todayFormatted = setDateFormat(today);

                const filteredData1Y = date.filter((dateString) => {
                    const itemDate = new Date(dateString);
                    return itemDate >= oneYearAgofromtoday && itemDate <= today;
                });

                console.log('filteredData1Y', filteredData1Y);
                filteredData = filteredData1Y;
                // console.log('combineTimeValue', combineTimeValue);
                const filteredVal = combineTimeValue.filter((obj) => {
                    const objDateFormated = obj?.date?.split('T')[0];
                    return objDateFormated >= oneYearAgos && objDateFormated <= todayFormatted;
                });
                console.log('filteredDataValueBalance1y', filteredVal);
                // const result = filteredVal?.map((item) => item.date.split('T')[0]);
                // console.log('result', result);

                const allBalancesAreNull = filteredVal?.every((item) => {
                    return item.balance === null;
                });

                console.log('allBalancesAreNull', allBalancesAreNull);
                // if (allBalancesAreNull) {
                // }

                break;
            case 'All':
                filteredData = alldate;
                filteredValue = allvalue;
                break;
            default:
        }
        // Update state with filtered data
        setDate(filteredData);
        setValue(filteredValue);
    };

    const Option = {
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: date,
        },
        yAxis: {
            type: 'value',
            min: 0, // Set the minimum value directly, no need for an object
            splitLine: {
                show: true,
                lineStyle: { color: '#716E6E', type: 'dashed', opacity: 1 }, // Use a numeric value for opacity
            },
            axisLabel: {
                formatter: function (value) {
                    return 'USDT ' + value; // Your custom formatting logic goes here
                },
            },
        },
        series: [
            {
                type: 'line',
                symbol: 'none',
                itemStyle: {
                    color: '#307BAB',
                },
                areaStyle: {
                    color: new graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: '#3C97D0',
                        },
                        {
                            offset: 1,
                            color: '#ffffff',
                        },
                    ]),
                },
                data: value ? `${value}` : 'Not Found Specific Data',
                tooltip: {
                    formatter: (params) => `$ ${params.value}`,
                },
            },
        ],
    };
    return (
        <Box>
            <Stack direction="row" flexWrap="wrap" justifyContent="space-between" gap={3}>
                <Typography
                    sx={{
                        fontFamily: 'Poppins',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        fontSize: { xs: '24px', sm: '27px', md: '32px' },
                        lineHeight: '24px',
                        color: '#0B7BC4',
                    }}
                >
                    Your Portfolio
                </Typography>
                <Typography>&nbsp;</Typography>
            </Stack>
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                alignItems={{ xs: 'left', sm: 'center' }}
                justifyContent="space-between"
                mt={{ xs: 2, sm: 4, md: 7 }}
                gap={2}
            >
                <Stack direction="row" alignItems="center" gap={1}>
                    <Typography
                        sx={{
                            fontFamily: 'Poppins',
                            fontStyle: 'normal',
                            fontWeight: '700',
                            fontSize: { xs: '18px', sm: '24px', md: '30px' },
                            lineHeight: '24px',
                            color: '#0B7BC4',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        {profile ? (
                            <>
                                <sup
                                    style={{
                                        position: 'relative',
                                        top: '-6px',
                                        fontSize: '15px',
                                        fontWeight: '500',
                                    }}
                                >
                                    $
                                </sup>
                                {profile?.balance ? (+profile?.balance).toFixed(4) : '0.00'}
                            </>
                        ) : (
                            <>
                                <Skeleton
                                    sx={{ width: '60px', height: { xs: '45px', sm: '50px' } }}
                                />
                            </>
                        )}
                    </Typography>

                    {asset !== null ? (
                        <>
                            <Box
                                sx={{
                                    minWidth: '35px',
                                    background: '#0B7BC3',
                                    borderRadius: '5px',
                                    color: '#fff',
                                    fontSize: '10px',
                                    p: 1,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                {+asset !== 0 && (+asset).toFixed(3)} %
                            </Box>
                        </>
                    ) : (
                        <>
                            <Skeleton sx={{ width: '60px', height: { xs: '45px', sm: '50px' } }} />
                        </>
                    )}

                    {assetper !== null ? (
                        <>
                            <Box
                                sx={{
                                    marginRight: '10px',

                                    borderRadius: '5px',
                                    color: '#0B7BC3',
                                    p: 1,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                {+assetper !== 0 && (+assetper).toFixed(5)}
                            </Box>
                        </>
                    ) : (
                        <>
                            <Skeleton sx={{ width: '60px', height: { xs: '45px', sm: '50px' } }} />
                        </>
                    )}
                </Stack>

                <Stack direction="row" alignItems="center" overflow={'auto'} gap={1}>
                    {['1D', '1W', '1M', '3M', '1Y', 'All'].map((val, i) => (
                        <Button
                            key={i}
                            variant="text"
                            sx={{
                                color: activeButton === val ? '#fff' : '#0B7BC4',
                                minWidth: { xs: '40px', md: '44px' },
                                height: '35px',
                                borderRadius: '10px  ',
                                fontSize: { xs: '12px', sm: '13px', md: '14px' },
                                fontWeight: '600',
                                backgroundColor: activeButton === val ? '#0B7BC3' : 'transparent', // Change background color here
                                '&:hover': {
                                    border: '1px solid #0B7BC3',
                                    color: '#0B7BC4',
                                },
                            }}
                            onClick={() => handleFilter(val)}
                        >
                            {profile ? (
                                val
                            ) : (
                                <Skeleton
                                    sx={{
                                        minWidth: { xs: '40px' },
                                        height: '50px',
                                    }}
                                />
                            )}
                        </Button>
                    ))}
                </Stack>
            </Stack>

            <Stack
                direction="row"
                flexWrap="wrap"
                gap={2}
                justifyContent="space-between"
                // alignItems="center"
                alignItems="right"
                mt={5}
            >
                {/* <Stack direction="row" gap={1} alignItems="center">
                    <Typography
                        sx={{
                            color: '#0B7BC4',
                            fontFamily: 'Poppins',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            fontSize: '12px',
                            lineHeight: '24px',
                        }}
                    >
                        Change(ID)
                    </Typography>
                    <Box
                        sx={{
                            minWidth: '35px',
                            height: '23px',
                            // width: '47px',
                            fontSize: '10px',
                            background: '#0B7BC3',
                            borderRadius: '5px',
                            color: '#fff',
                            p: 1,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        +7.10%
                    </Box>

                    <Typography
                        sx={{
                            color: '#0B7BC4',
                            fontFamily: 'Poppins',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            fontSize: '12px',
                            lineHeight: '24px',
                        }}
                    >
                        +39,4676 PKR
                    </Typography>
                </Stack> */}
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    gap={1}
                    alignItems={{ xs: 'left', sm: 'center' }}
                    ml="auto"
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        {profile ? (
                            <>
                                <Box
                                    sx={{
                                        minWidth: '35px',
                                        height: '23px',
                                        fontSize: '10px',

                                        background: '#0B7BC3',
                                        borderRadius: '5px',
                                        color: '#fff',
                                        p: 1,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    {+profile?.netProceeds
                                        ? (+profile?.netProceeds).toFixed(4)
                                        : '0.00'}
                                </Box>
                            </>
                        ) : (
                            <>
                                <Skeleton
                                    sx={{
                                        minWidth: '60px',
                                        height: '40px',
                                    }}
                                />
                            </>
                        )}
                        <Typography
                            sx={{
                                color: '#0B7BC4',
                                fontFamily: 'Poppins',
                                fontStyle: 'normal',
                                fontWeight: '600',
                                fontSize: '12px',
                                lineHeight: '24px',
                            }}
                        >
                            Market value + Net proceeds
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        {profile ? (
                            <>
                                <Box
                                    sx={{
                                        minWidth: '35px',
                                        height: '25px',
                                        background: '#F3F3F3',
                                        borderRadius: '5px',
                                        color: '#3333335e',
                                        fontSize: '10px',
                                        p: 1,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    {+profile?.netCost - Math.floor(+profile?.netCost) !== 0
                                        ? (+profile?.netCost).toFixed(4)
                                        : +profile?.netCost}
                                </Box>
                            </>
                        ) : (
                            <>
                                <Skeleton
                                    sx={{
                                        minWidth: '50px',
                                        height: '40px',
                                    }}
                                />
                            </>
                        )}
                        <Typography
                            sx={{
                                color: '#0B7BC4',
                                fontFamily: 'Poppins',
                                fontStyle: 'normal',
                                fontWeight: '600',
                                fontSize: '12px',
                                lineHeight: '24px',
                            }}
                        >
                            Net deposits
                        </Typography>
                    </Box>
                </Stack>
            </Stack>

            <Box
                sx={{
                    boxShadow: '0px 0px 25px 0px rgba(0, 0, 0, 0.05)',
                    borderRadius: '5px',
                    mt: 5,
                    py: { lg: 9, xs: 2, md: 3, sm: 2 },
                }}
            >
                {profile?.graphData?.length > 0 ? (
                    <div>
                        <ReactEcharts
                            option={Option}
                            style={{ width: '100%', height: '400px' }}
                            className="echarts-for-echarts"
                            theme="my_theme"
                            notMerge={true}
                            lazyUpdate={true}
                        ></ReactEcharts>
                    </div>
                ) : profile?.graphData?.length === 0 ? (
                    <Box width={{ xs: '95%', sm: '80%', md: '50%' }} mx="auto" textAlign={'center'}>
                        <Box
                            component={'img'}
                            src={sample1}
                            alt=""
                            sx={{ width: { xs: '80%', sm: 'max-content' } }}
                        />
                        <Typography
                            sx={{
                                fontSize: { xs: '14px', sm: '18px', md: '22px' },
                                fontWeight: 900,
                            }}
                        >
                            No Profile Data
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: { xs: '12px', sm: '13.5px', md: '15px' },
                                fontWeight: 400,
                            }}
                        >
                            We don’t have performance history for your account. Add all your wallets
                            to accurately track your portfolio.
                        </Typography>
                    </Box>
                ) : (
                    <div>
                        <Skeleton
                            animation="wave"
                            variant="rectangular"
                            width="100%"
                            height="400px"
                        />
                    </div>
                )}
            </Box>
        </Box>
    );
}
