import { createSlice } from '@reduxjs/toolkit';

const filterTransactionSlice = createSlice({
    name: 'filterTransactionSlice',
    initialState: { filterQuery: [] },
    reducers: {
        setFilterQuery: (state, action) => {
            console.log(action.payload, 'payload');
            const { name, checked } = action.payload;

            const exists = state.filterQuery.some((item) => item.name === name);
            if (action.payload.query === 'SortBy') {
                const sortExists = state.filterQuery.some(
                    (item) => item.name === 'Oldest' || item.name === 'Newest',
                );

                if (!sortExists) {
                    state.filterQuery = [...state.filterQuery, action.payload];
                    return;
                }
                state.filterQuery = state.filterQuery.map((item) => {
                    return item.name === 'Oldest' || item.name === 'Newest' ? action.payload : item;
                });

                console.log(state.filterQuery, 'filter query before', exists);
                return;
            }
            if (action.payload.query === 'Date' && exists) {
                console.log('exists', exists);
                state.filterQuery = state.filterQuery.map((item) => {
                    return item.query === 'Date' ? action.payload : item;
                });
                return;
            }
            if (!exists) {
                state.filterQuery = [...state.filterQuery, action.payload];
            }
            console.log(state.filterQuery, 'filter query after');
        },
    },
});

export const { setFilterQuery } = filterTransactionSlice.actions;

export default filterTransactionSlice.reducer;
