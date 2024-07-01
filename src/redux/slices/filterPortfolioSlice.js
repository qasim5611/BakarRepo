import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { REACT_APP_BASE_URL } from './../../config';

const initialState = {
    PortfolioFilteredData: {
        oneday: null,
        oneweek: null,
        onemonth: null,
        threemonth: null,
        oneyear: null,
        all: null,
    },
};

export const filterPortfolio = createAsyncThunk('filterPortfolio', async (body) => {
    const persistMe = localStorage.getItem('persistMe');
    // console.log('persistMe', persistMe.user);
    // console.log('persistMe', persistMe[0].user);

    // const str = '"some "quoted" string"';
    let mydata = JSON.parse(persistMe);

    try {
        const response = await axios.post(
            `${REACT_APP_BASE_URL}/api/data/filterPortfolio`,
            {},
            {
                headers: {
                    Authorization: `${mydata.user.token}`,
                },
            },
        );
        // const response = await axios.post(REACT_APP_BASE_URL + '/filterPortfolio', body);
        console.log('filterPortfolio resp', response);
        // return { type: 'MSG_LOGINS', payload: response.data };
    } catch (error) {
        console.error(error);
        throw error;
    }
});

export const filterPortfolioSlice = createSlice({
    name: 'portfoliofilter',
    initialState,
    reducers: {
        CLEAR_STATE: (state) => {
            state.PortfolioFilteredData = null;
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(filterPortfolio.fulfilled, (state, action) => {
                state.PortfolioFilteredData = action.payload;
            })
            .addCase(filterPortfolio.rejected, (state, action) => {
                state.PortfolioFilteredData = action.payload.msg;
            });
    },
});

export const { CLEAR_STATE } = filterPortfolioSlice.actions;
