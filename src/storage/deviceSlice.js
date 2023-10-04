import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  device: [],
};

export const deviceSlice = createSlice({
    name: "device",
    initialState: initialState,
    reducers: {
        setDevice: (state, action) => {
            state.device = action.payload;
        },
        addDevice: (state, action) => {
            state.device.push(action.payload);
        },
    },
});

export const { setDevice, addDevice } = deviceSlice.actions;
export const deviceReducer = deviceSlice.reducer;