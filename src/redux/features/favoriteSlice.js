import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	songs: localStorage.getItem("Favorites Songs")
		? JSON.parse(localStorage.getItem("Favorites Songs"))
		: [],
	isFavorite: false,
};

const favoritesSlice = createSlice({
	name: "favorites",
	initialState,
	reducers: {
		addToFavorites(state, action) {
			const songId = action.payload;
			if (!state.songs.includes(songId)) {
				state.songs.push(songId);
			}
			// state.isFavorite = true;

			// localStorage.setItem("Favorites Songs", JSON.stringify(state.songs));
		},
		removeFromFavorites(state, action) {
			const updatedFavorites = state.songs.filter(
				(song) => song.id !== action.payload.id
			);
			state.songs = updatedFavorites;
			// state.isFavorite = false;
			// localStorage.setItem("Favorite Song", JSON.stringify(state.songs));
		},
		isFavoriteBtn: (state, action) => {
			state.isFavorite = action.payload;
		},
	},
});

export const { addToFavorites, removeFromFavorites, isFavoriteBtn } =
	favoritesSlice.actions;

export default favoritesSlice.reducer;
