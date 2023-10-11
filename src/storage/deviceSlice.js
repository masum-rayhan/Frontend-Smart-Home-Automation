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
    updateDevice: (state, action) => {
      // Find the index of the device to be updated
      const index = state.device.findIndex(
        (device) => device.id === action.payload.id
      );
      if (index !== -1) {
        // Update the device
        state.device[index] = action.payload;
      }
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

export const { setDevice, addDevice, updateDevice, deleteDevice, setDeviceTypes } =
  deviceSlice.actions;
export const deviceReducer = deviceSlice.reducer;
