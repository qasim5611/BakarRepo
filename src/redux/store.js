import { configureStore } from '@reduxjs/toolkit';
import userDetails from '../redux/slices/userSlice';
import  walletDetails from '../redux/slices/userWalletData'
import filterTransactionSlice from './slices/filterTransectionSlice';
import commonSlice from './slices/commonSlice';
export default configureStore({
    reducer: {
        users: userDetails,
        wallet: walletDetails,
        filterTransactionSlice,
        commonSlice
    },
});
