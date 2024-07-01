import { createSlice } from '@reduxjs/toolkit';

const commonSlice = createSlice({
    name: 'user',
    initialState: {loading:false},
    reducers: {
      setLoading: (state, action) => {
       state.loading=action.payload;
      },
     
    },
  });
  
  export const { setLoading } = commonSlice.actions;
  
  export default commonSlice.reducer;