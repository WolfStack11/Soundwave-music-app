import { configureStore } from "@reduxjs/toolkit";

import playerReducer from "./features/playerSlice";
import { shazamAPI } from "./services/shazamAPI";
import favoritesReducer from "./features/favoriteSlice";

export const store = configureStore({
	reducer: {
		[shazamAPI.reducerPath]: shazamAPI.reducer,
		player: playerReducer,
		favorites: favoritesReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(shazamAPI.middleware),
});
