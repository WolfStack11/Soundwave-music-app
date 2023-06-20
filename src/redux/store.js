import { configureStore } from "@reduxjs/toolkit";

import playerReducer from "./features/playerSlice";
import { spotifyAPI } from "./services/spotifyCore";

export const store = configureStore({
	reducer: {
		[spotifyAPI.reducerPath]: spotifyAPI.reducer,
		player: playerReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(spotifyAPI.middleware),
});
