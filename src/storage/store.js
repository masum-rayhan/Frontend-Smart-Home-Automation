import { configureStore } from "@reduxjs/toolkit";
import deviceApi from "../apis/deviceApi";
import { deviceReducer } from "./deviceSlice";
import { deviceStateReducer } from "./deviceStateSlice";
import deviceStateApi from "../apis/deviceStateApi";

const store = configureStore({
  reducer: {
    deviceStore: deviceReducer,
    deviceStateStore: deviceStateReducer,
    
    [deviceApi.reducerPath]: deviceApi.reducer,
    [deviceStateApi.reducerPath]: deviceStateApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(deviceApi.middleware)
      .concat(deviceStateApi.middleware),
});

export const RootState = store.getState;
export default store;