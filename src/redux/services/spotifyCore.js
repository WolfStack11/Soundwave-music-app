import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const spotifyAPI = createApi({
	reducerPath: "spotifyAPI",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://spotify81.p.rapidapi.com",
		prepareHeaders: (headers) => {
			headers.set(
				"X-RapidAPI-Key",
				"ead45ba702mshf5fdc774103666bp197edajsnbdef4cf919ca"
			);
			return headers;
		},
	}),
	endpoints: (builder) => ({
		getTopSongs: builder.query({ query: () => "/top_200_tracks" }),
	}),
});

export const { useGetTopSongsQuery } = spotifyAPI;
