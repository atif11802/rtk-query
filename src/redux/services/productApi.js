import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURL } from "../../services/axios";

export const productApi = createApi({
	reducerPath: "productApi",
	baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
	endpoints: (builder) => ({
		listPosts: builder.query({
			query: () => "/posts",
		}),
	}),
});

export const { useListPostsQuery } = productApi;
