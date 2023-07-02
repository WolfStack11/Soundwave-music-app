import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamAPI = createApi({
	reducerPath: "shazamAPI",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://shazam-core.p.rapidapi.com/",
		prepareHeaders: (headers) => {
			headers.set(
				"X-RapidAPI-Key",
				"ead45ba702mshf5fdc774103666bp197edajsnbdef4cf919ca"
			);
			return headers;
		},
	}),
	endpoints: (builder) => ({
		getTopSongs: builder.query({ query: () => "v1/charts/world" }),
		getSongDetails: builder.query({
			query: ({ songid }) => `v1/tracks/details?track_id=${songid}`,
		}),
		getSongRelated: builder.query({
			query: ({ songid }) => `v1/tracks/related?track_id=${songid}`,
		}),
		getArtistDetails: builder.query({
			query: ({ artistId }) => `v2/artists/details?artist_id=${artistId}`,
		}),
	}),
});

export const {
	useGetTopSongsQuery,
	useGetSongDetailsQuery,
	useGetSongRelatedQuery,
	useGetArtistDetailsQuery,
} = shazamAPI;
