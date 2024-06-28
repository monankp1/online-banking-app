import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    features: [],
};


const featuresSlice = createSlice({
    name: 'features',
    initialState,
    reducers: {
        setFeatures: (state, action) => {
            state.features = action.payload;
        }
    }
});


export const { setFeatures } = featuresSlice.actions;

export default featuresSlice.reducer;