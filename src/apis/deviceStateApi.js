import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from './apiConfig';

const deviceStateApi = createApi({
  reducerPath: "deviceStateApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  tagTypes: ["DeviceState"],
  endpoints: (builder) => ({
    // getDevices: builder.query({
    //   query: () => ({
    //     url: `device`,
    //   }),
    //   providesTags: ["Devices"],
    // }),

    // createDevice: builder.mutation({
    //   query: (fromData) => ({
    //     url: `device`,
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: fromData,
    //   }),
    //   invalidatesTags: ["Devices"],
    // }),

    updateDeviceState: builder.mutation({
      query: ({id, deviceStateData}) => ({
        url: `device-state/${id}`,
        method: "PUT",
        header: {
          "Content-Type": "application/json",
        },
        body: deviceStateData,
      }),
      invalidatesTags: ["DeviceState"],
    }),

    // deleteDevice: builder.mutation({
    //   query: (id) => ({
    //     url: `device/${id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["Devices"],
    // }),

    // tagTypes: ["DeviceTypes"],
    // getDeviceTypes: builder.query({
    //   query: () => ({
    //     url: "device/device-types", // Endpoint to fetch device types
    //   }),
    //   providesTags: ["DeviceTypes"],
    // }),
  }),
});

export const {
  useUpdateDeviceStateMutation
} = deviceStateApi;
export default deviceStateApi;
