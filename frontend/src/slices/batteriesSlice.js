import { createSlice } from '@reduxjs/toolkit';

const batteriesSlice = createSlice({
    name: 'batteries',
    initialState: [],
    reducers: {
        setBatteries: (state, action) => action.payload,
    },
});

export const { setBatteries } = batteriesSlice.actions;

export default batteriesSlice.reducer;