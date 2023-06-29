import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamAPI = createApi({
	reducerPath: "spotifyAPI",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://shazam-core.p.rapidapi.com/v1",
		prepareHeaders: (headers) => {
			headers.set(
				"X-RapidAPI-Key",
				"ead45ba702mshf5fdc774103666bp197edajsnbdef4cf919ca"
			);
			return headers;
		},
	}),
	endpoints: (builder) => ({
		getTopSongs: builder.query({ query: () => "/charts/world" }),
		getSongDetails: builder.query({
			query: ({ songid }) => `/tracks/details?track_id${songid}`,
		}),
	}),
});

export const { useGetTopSongsQuery, useGetSongDetailsQuery } = shazamAPI;
