import { baseApi } from "../../api/baseApi";

const projectApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProject: builder.query({
      query: () => ({
        url: "/projects",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllProjectQuery } = projectApi;
