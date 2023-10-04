import { configureStore } from "@reduxjs/toolkit";
import deviceApi from "../apis/deviceApi";
import { deviceReducer } from "./deviceSlice";

const store = configureStore({
  reducer: {
    deviceStore: deviceReducer,
    
    [deviceApi.reducerPath]: deviceApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(deviceApi.middleware),
});

export const RootState = store.getState;
export default store;