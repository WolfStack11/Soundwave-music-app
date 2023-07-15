import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	songs: [],
};

const favoritesSlice = createSlice({
	name: "favorites",
	initialState,
	reducers: {
		addToFavorites(state, action) {
			state.songs.push(action.payload);
		},
	},
});

export const { addToFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
