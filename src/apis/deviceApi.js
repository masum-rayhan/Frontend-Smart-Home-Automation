import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from './apiConfig';

const deviceApi = createApi({
  reducerPath: "deviceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  tagTypes: ["Devices"],
  endpoints: (builder) => ({
    getDevices: builder.query({
      query: () => ({
        url: `device`,
      }),
      providesTags: ["Devices"],
    }),

    createDevice: builder.mutation({
      query: (fromData) => ({
        url: `device`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: fromData,
      }),
      invalidatesTags: ["Devices"],
    }),

    deleteDevice: builder.mutation({
      query: (id) => ({
        url: `device/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Devices"],
    }),

    tagTypes: ["DeviceTypes"],
    getDeviceTypes: builder.query({
      query: () => ({
        url: "device/device-types", // Endpoint to fetch device types
      }),
      providesTags: ["DeviceTypes"],
    }),
  }),
});

export const {
  useGetDevicesQuery,
  useCreateDeviceMutation,
  useDeleteDeviceMutation,
  useGetDeviceTypesQuery
} = deviceApi;
export default deviceApi;
