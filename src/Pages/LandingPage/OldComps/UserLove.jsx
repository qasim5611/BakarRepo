import React from 'react';

import { Box, Container, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Twitter, LinkedIn } from '@mui/icons-material';
import Slider from 'react-slick';
import './userlove.css';

import garry1 from '../../../images/garry1.png';
import garry2 from '../../../images/garry2.png';
import garry3 from '../../../images/garry3.png';

import leftarrow from '../../../images/leftarrow.png';
import rightarrow from '../../../images/rightarrow.png';
// import toparrow from '../../images/toparrow.png';
// import bottomarrow from '../../images/bottomarrow.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// import card from '../../images/card.png';

//

const comonBtnStyling = {
    display: 'flex',
    position: 'absolute',
    zIndex: 1,
    cursor: 'pointer',
    top: '24px',
};
const TeamNextArrow = ({ onClick }) => {
    const matchesMeida = useMediaQuery('(max-width: 900px)');

    return (
        <Box
            sx={{
                ...comonBtnStyling,
                // right: !matchesMeida ? 80 : 145,
                // top: !matchesMeida ? -80 : -60,

                // position: 'absolute',
                top: matchesMeida ? ' -6%' : '-15%',
                left: matchesMeida ? ' 90%' : '92%',
                transform: 'translate(-50%, -50%)',

                transition: '.5s ease',
            }}
            onClick={onClick}
        >
            {/* {matchesMeida ? (
                <Box component="img" src={toparrow} />
            ) : (
                <Box component="img" src={rightarrow} />
            )} */}
            <Box component="img" src={rightarrow} />
        </Box>
    );
};
const TeamPrevArrow = ({ onClick }) => {
    const matchesMeida = useMediaQuery('(max-width: 900px)');

    return (
        <Box
            sx={{
                ...comonBtnStyling,
                // right: !matchesMeida ? 120 : 145,
                // top: !matchesMeida ? -80 : 1100,

                top: matchesMeida ? ' -6%' : '-15%',
                left: matchesMeida ? ' 78%' : '88%',

                transform: 'translate(-50%, -50%)',

                transition: '.5s ease',
            }}
            onClick={onClick}
        >
            {/* {matchesMeida ? (
                <Box component="img" src={bottomarrow} />
            ) : (
                <Box component="img" src={leftarrow} />
            )} */}
            <Box component="img" src={leftarrow} />
        </Box>
    );
};
const userReviews = [
    {
        id: 1,
        image: garry1,
        twitter: true,
        linkedIn: true,
        text: ' Strong background in Digital Marketing and Sales at both the business and consumer level. Strives to bring integrity and  structure to Defi in order to achieve sustainability and   fair chance profits for investors',
        name: 'Garry',
        handle: '@garrytan',
    },
    {
        id: 2,
        image: garry2,
        twitter: true,
        linkedIn: true,
        text: ' Strong background in Digital Marketing and Sales at both the business and consumer level. Strives to bring integrity and  structure to Defi in order to achieve sustainability and   fair chance profits for investors',
        name: 'Garry',
        handle: '@garrytan',
    },
    {
        id: 3,
        image: garry3,
        twitter: true,
        linkedIn: true,
        text: ' Strong background in Digital Marketing and Sales at both the business and consumer level. Strives to bring integrity and  structure to Defi in order to achieve sustainability and   fair chance profits for investors',
        name: 'Garry',
        handle: '@garrytan',
    },
    {
        id: 4,
        image: garry1,
        twitter: true,
        linkedIn: true,
        text: ' Strong background in Digital Marketing and Sales at both the business and consumer level. Strives to bring integrity and  structure to Defi in order to achieve sustainability and   fair chance profits for investors',
        name: 'Garry',
        handle: '@garrytan',
    },
    {
        id: 5,
        image: garry2,
        twitter: true,
        linkedIn: true,
        text: ' Strong background in Digital Marketing and Sales at both the business and consumer level. Strives to bring integrity and  structure to Defi in order to achieve sustainability and   fair chance profits for investors',
        name: 'Garry',
        handle: '@garrytan',
    },
];
const UserLove = () => {
    const theme = useTheme();
    // const matchesMeida = useMediaQuery('(max-width: 900px)');

    const settings = {
        nextArrow: <TeamNextArrow />,
        prevArrow: <TeamPrevArrow />,
        loop: false,
        infinite: false,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        // vertical: matchesMeida ? true : false,
        verticalSwiping: true,
        swipeToSlide: true,
        centerMode: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },

            {
                breakpoint: 630,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <Box my={13}>
            <Container maxWidth="xl" sx={{ px: { xs: 5, sm: 8 } }}>
                <Typography
                    fontFamily={'Gmarket'}
                    sx={{
                        fontSize: { md: '30px', sm: '25px', xs: '20px' },
                        fontWeight: 800,
                        color: `${theme.palette.text.darkblue}`,
                        lineHeight: '44px',
                        textAlign: 'center',
                        textTransform: 'uppercase',
                    }}
                >
                    Users love crypee (Tax Software)
                </Typography>
                <Typography
                    fontFamily={'Gmarket'}
                    sx={{
                        fontSize: '15px',
                        fontWeight: 500,
                        mt: 0.5,
                        textAlign: 'center',
                        color: `${theme.palette.text.lightbrown}`,
                        px: 4,
                    }}
                >
                    See what cryptocurrency users around the world are saying about us
                </Typography>
                <Box mt={10}>
                    <Slider {...settings} style={{ height: '100%' }}>
                        {userReviews.map((user, index) => (
                            <Box
                                py={20}
                                px={2}
                                sx={{
                                    background:
                                        ' linear-gradient(180deg, #2091DA 0%, #9AD9FF 100%)',
                                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
                                    borderRadius: '36px',
                                    maxWidth: '402px',
                                    width: '100%',
                                    minHeight: '274px',
                                    height: '100%',
                                    padding: { md: '1.5rem', xs: '1rem' },
                                    color: '#ffffff',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                                key={index}
                            >
                                <Box
                                    sx={{ display: 'flex', justifyContent: 'center', gap: '20px' }}
                                >
                                    <Box
                                        component="img"
                                        sx={{ marginTop: '-5rem' }}
                                        src={user.image}
                                        alt={`userimg${user.id}`}
                                    />
                                </Box>
                                <Box textAlign="end" sx={{ marginTop: '-4rem' }}>
                                    {user.twitter && <Twitter sx={{ marginRight: '0.5rem' }} />}
                                    {user.linkedIn && <LinkedIn />}
                                </Box>

                                <Typography
                                    fontFamily={'Gmarket'}
                                    sx={{
                                        fontSize: '12px',
                                        fontWeight: 400,
                                        mt: 5,
                                        textAlign: 'center',
                                    }}
                                >
                                    {user.text}
                                </Typography>

                                <Typography
                                    fontFamily={'Gmarket'}
                                    sx={{
                                        fontSize: '20px',
                                        fontWeight: 700,
                                        mt: 3,
                                        textAlign: 'center',
                                    }}
                                >
                                    {user.name}
                                </Typography>
                                <Typography
                                    fontFamily={'Gmarket'}
                                    sx={{
                                        fontSize: '14px',
                                        fontWeight: 400,
                                        mt: 1,
                                        textAlign: 'center',
                                    }}
                                >
                                    {user.handle}
                                </Typography>
                            </Box>
                        ))}
                    </Slider>
                </Box>
            </Container>
        </Box>
    );
};

export default UserLove;
