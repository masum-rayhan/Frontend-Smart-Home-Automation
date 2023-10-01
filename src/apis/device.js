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
  }),
});

export const { useDevicesQuery} = deviceApi;
export default deviceApi;