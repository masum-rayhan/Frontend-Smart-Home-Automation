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
        deleteDevice: (state, action) => {
            state.device = state.device.filter((device) => device.id !== action.payload);
        }
    },
});

export const { setDevice, addDevice, deleteDevice } = deviceSlice.actions;
export const deviceReducer = deviceSlice.reducer;