import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	songs: localStorage.getItem("Favorites Songs")
		? JSON.parse(localStorage.getItem("Favorites Songs"))
		: [],
};

const favoritesSlice = createSlice({
	name: "favorites",
	initialState,
	reducers: {
		addToFavorites(state, action) {
			state.songs.push(action.payload);
			localStorage.setItem("Favorites Songs", JSON.stringify(state.songs));
		},
		removeFromFavorites(state, action) {
			const updatedFavorites = state.songs.filter(
				(song) => song.id !== action.payload.id
			);
			state.songs = updatedFavorites;
			localStorage.setItem("Favorite Song", JSON.stringify(state.songs));
		},
	},
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
