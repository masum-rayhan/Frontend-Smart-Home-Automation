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
      state.device = state.device.filter(
        (device) => device.id !== action.payload
      );
    },
    setDeviceTypes: (state, action) => {
      state.deviceTypes = action.payload; // Update deviceTypes in the state
    },
  },
});

export const { setDevice, addDevice, deleteDevice, setDeviceTypes } =
  deviceSlice.actions;
export const deviceReducer = deviceSlice.reducer;
