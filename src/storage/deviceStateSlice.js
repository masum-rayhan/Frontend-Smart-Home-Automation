import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  deviceState: [],
};

export const deviceStateSlice = createSlice({
  name: "deviceState",
  initialState: initialState,
  reducers: {
    // setDevice: (state, action) => {
    //   state.device = action.payload;
    // },
    // addDevice: (state, action) => {
    //   state.device.push(action.payload);
    // },
    updateDeviceState: (state, action) => {
      // Find the index of the device to be updated
      const index = state.deviceState.findIndex(
        (deviceState) => deviceState.id === action.payload.id
      );
      if (index !== -1) {
        // Update the device
        state.deviceState[index] = action.payload;
      }
    },
    // deleteDevice: (state, action) => {
    //   state.device = state.device.filter(
    //     (device) => device.id !== action.payload
    //   );
    // },
    // setDeviceTypes: (state, action) => {
    //   state.deviceTypes = action.payload; // Update deviceTypes in the state
    // },
  },
});

export const { updateDeviceState } =
deviceStateSlice.actions;
export const deviceStateReducer = deviceStateSlice.reducer;
