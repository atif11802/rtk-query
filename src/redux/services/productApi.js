import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURL } from "../../services/axios";

export const productApi = createApi({
	reducerPath: "productApi",
	baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
	endpoints: (builder) => ({
		listPosts: builder.query({
			query: () => "/posts",
		}),
		getPost: builder.query({
			query: ({ id }) => ({ url: `/posts/${id}` }),
		}),
	}),
});

export const { useListPostsQuery, useGetPostQuery } = productApi;
