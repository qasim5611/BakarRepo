import { createSlice } from '@reduxjs/toolkit';

const userDetailsSlice = createSlice({
    name: 'user',
    initialState: {},
    reducers: {
      setUserData: (state, action) => {
        return { ...action.payload };
      },
      logout: (state) => {
        return {}; 
      },
    },
  });
  
  export const { setUserData, logout } = userDetailsSlice.actions;
  
  export default userDetailsSlice.reducer;