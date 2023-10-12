import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  deviceState: [],
};

export const deviceStateSlice = createSlice({
  name: "deviceState",
  initialState: initialState,
  reducers: {
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
  },
});

export const { updateDeviceState } =
deviceStateSlice.actions;
export const deviceStateReducer = deviceStateSlice.reducer;
