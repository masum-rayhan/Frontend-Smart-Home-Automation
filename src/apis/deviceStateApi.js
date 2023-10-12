import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from './apiConfig';

const deviceStateApi = createApi({
  reducerPath: "deviceStateApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  tagTypes: ["DeviceState"],
  endpoints: (builder) => ({

    updateDeviceState: builder.mutation({
      query: ({id, deviceStateData}) => ({
        url: `device-state/${id}`,
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: deviceStateData,
      }),
      invalidatesTags: ["DeviceState"],
    }),
  }),
});

export const {
  useUpdateDeviceStateMutation
} = deviceStateApi;
export default deviceStateApi;
