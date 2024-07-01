import React from 'react';

import { Box, Container, Typography, useMediaQuery, useTheme, Stack } from '@mui/material';

import coin from '../../../images/coin.png';
import ariana from '../../../images/ariana.png';
import ali from '../../../images/ali.png';
import open from '../../../images/open.png';
import turbo from '../../../images/turbo.png';
import block from '../../../images/block.png';
import playstore from '../../../images/playstore.png';
import leftply from '../../../images/leftply.png';
import offcialtax from '../../../images/offcialtax.png';
import taxbg from '../../../images/taxbg.png';
import trans from '../../../Localization/i18next';
// eslint-disable-next-line
const data = [
    {
        logo: coin,
    },
    {
        logo: open,
    },
    {
        logo: turbo,
    },
    {
        logo: block,
    },
];
// =========officailtaxcard===================
const officialcard = [
    {
        ptext: 'For those who asked about my crypto taxes ended up going w @cointracker_io. Best UX I found after looking at a number of options! (FWIW I am not an investor in the company, nor is anyone paying me).',
        card1img: ariana,
        imgtitle: 'Arianna Simpson',
        subtitile: '@Arianna Simpson',
    },
    {
        ptext: 'For those who asked about my crypto taxes ended up going w @cointracker_io. Best UX I found after looking at a number of options! (FWIW I am not an investor in the company, nor is anyone paying me).',
        card1img: ali,
        imgtitle: 'Ali Abdaal',
        subtitile: '@Ali Abdaal',
    },
];

const OfficialTax = () => {
    const theme = useTheme();
    const matchesMeida = useMediaQuery('(  max-width:900px  )');
    return (
        <Container maxWidth="xl" sx={{ px: { xs: 5, sm: 8 }, py: 6 }}>
            <Typography
                sx={{
                    fontSize: { md: '30px', sm: '25px', xs: '20px' },
                    fontFamily: ' Gmarket',
                    fontWeight: 800,
                    textAlign: 'center',
                    color: `${theme.palette.text.darkblue}`,
                    textTransform: 'uppercase',
                }}
            >
                {trans.t('tax.tax_partner')}:
            </Typography>
            <Box mt={4} textAlign="center">
                <img
                    src={matchesMeida ? taxbg : offcialtax}
                    alt=""
                    width={matchesMeida ? '100%' : '80%'}
                />
            </Box>
            {/* ===================officialtaxcard====================== */}
            <Stack
                direction={{ xs: 'column', sm: 'column', md: 'row', lg: 'row' }}
                justifyContent={'space-evenly'}
                gap={6}
                py={8}
            >
                {officialcard.map((card, index) => (
                    <Box
                        key={index}
                        sx={{
                            background: 'white',
                            borderRadius: '12px',
                            boxShadow: '0px 18.075px 162.675px 0px rgba(184, 215, 235, 0.20);',
                            padding: '20px',
                        }}
                    >
                        <Box
                            sx={{
                                width: '100%',
                                [theme.breakpoints.up('md')]: {
                                    width: '420px',
                                },
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: { md: '14px', sm: '13px', xs: '12px' },
                                    fontFamily: 'Gmarket',
                                    fontWeight: 500,
                                    color: '#888',
                                    lineHeight: '24px',
                                }}
                            >
                                {card.ptext}
                            </Typography>
                        </Box>
                        <Box
                            display="flex"
                            flexDirection="row"
                            alignItems="center"
                            gap={'10px'}
                            pt={'35px'}
                        >
                            <img src={card.card1img} alt={`card${index + 1}img`} width={'50px'} />
                            <Stack>
                                <Typography
                                    fontSize={'12px'}
                                    fontFamily={'Gmarket'}
                                    fontWeight={700}
                                >
                                    {card.imgtitle}
                                </Typography>
                                <Typography
                                    fontSize={'12px'}
                                    color={'#888'}
                                    fontFamily={'Gmarket'}
                                    fontWeight={300}
                                >
                                    {card.subtitile}
                                </Typography>
                            </Stack>
                        </Box>
                    </Box>
                ))}
            </Stack>

            {/* =================================== */}
            <Box py={4}>
                <Typography
                    sx={{
                        fontSize: { md: '30px', sm: '25px', xs: '20px' },
                        color: `${theme.palette.text.darkblue}`,
                        fontWeight: 800,
                        fontFamily: 'Gmarket',
                        textAlign: 'center',
                        textTransform: 'uppercase',
                    }}
                >
                    We are offered at the following retailers
                </Typography>
                <Box py={4}>
                    <Box
                        textAlign="center"
                        display="flex"
                        gap={4}
                        flexWrap="wrap"
                        justifyContent="center"
                    >
                        <img src={playstore} alt="" style={{ maxWidth: '294px' }} />
                        <img src={leftply} alt="" style={{ maxWidth: '294' }} />
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};

export default OfficialTax;
