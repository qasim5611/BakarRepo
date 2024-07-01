import * as React from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Button, Grid } from "@mui/material";
import coin_hand from '../../images/coin_hand.png';
import hand from '../../images/hand_magnify.png';
import portfolio_table_img from '../../images/portfolio_table_img.png';
import i18next from "../../Localization/i18next";
import TaxSummary from "./TaxSummary";

const cards = [
    {
        title: i18next.t('portfolio.card_title_1'),
        description: i18next.t('portfolio.card_desc_1'),
        buttonText: i18next.t('portfolio.learn_more'),
        imageSrc: hand
    },
    {
        title: i18next.t('portfolio.card_title_2'),
        description: i18next.t('portfolio.card_desc_2'),
        buttonText: i18next.t('portfolio.learn_more'),
        imageSrc: coin_hand
    }
];

const trans = (key) => i18next.t(key);

const YourPortfolio = () => {
    return (
        <Box>
            <Box sx={{ textAlign: 'center', width: { md: '80%', sm: '100%', xs: '100%' },
                margin: '0 auto', p: '0  20px 20px 0', backgroundColor: '#E1F0F6', borderRadius: '10px'
            }}>
                <h2 style={{ color: '#6BB4D1', paddingTop: '10px' }}>Your Portfolio</h2>
                <img src={portfolio_table_img} width='95%' alt={'taswerando'} />
                <TaxSummary />
            </Box>
            <Grid container spacing={2} sx={{ margin: '0 auto', width: { md: '80%', sm: '100%', xs: '100%' }}}>
                {cards.map((card, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                        <Card sx={{ backgroundColor: '#6AB4D1', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                            <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                                <Typography gutterBottom variant="h5" component="div" color="#fff" >
                                    {card.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ marginTop: index === 1 ? '27px' : '0'  }} >
                                    {card.description}
                                </Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                                    <Button size="small" sx={{ marginRight: 'auto', marginBottom: 3  ,border: '1px solid #fff', color: '#fff', borderRadius: '50px', fontSize: '12px', padding: '0 10px' }}>{card.buttonText}</Button>
                                    {/*<Box sx={{ background: `url(${card.imageSrc})` }} > </Box>*/}
                                    <CardMedia
                                        component="img"
                                        image={card.imageSrc}
                                        alt={card.title}
                                        sx={{ width: '120px', height: 'auto'}}
                                    />
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default YourPortfolio;