
import { createSlice } from '@reduxjs/toolkit';

const walletDetails = createSlice({
    name: 'wallet',
    initialState: {
        status: '',
        message: '',
        data: [],
      },
    reducers: {
        setWalletData: (state, action) => {
            return { ...action.payload };
        },
    },
});

export const {  setWalletData } = walletDetails.actions;

export default walletDetails.reducer;



