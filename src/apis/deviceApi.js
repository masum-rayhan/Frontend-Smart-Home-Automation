import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const deviceApi = createApi({
  reducerPath: "deviceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://homeeweb.azurewebsites.net/",
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
  }),
});

export const { useGetDevicesQuery,useCreateDeviceMutation } = deviceApi;
export default deviceApi;