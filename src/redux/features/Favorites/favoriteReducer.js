export const initialState = {
	songs: [],
};

export function favoritesReducer(state, action) {
	switch (action.type) {
		case "ADD_TO_FAVORITES": {
			let updatedSongs;
			let newState;
			const foundSong = state.songs.find((song) => {
				return song.id === action.payload.id;
			});
			if (foundSong) {
				return song;
			} else {
				updatedSongs = [...state.songs, ...action.payload];
			}
			newState = {
				songs: updatedSongs,
			};
			return newState;
		}
		case "REMOVE_FROM_FAVORITES": {
			const filteredSongs = state.songs.filter((song) => {
				return song.id !== action.payload;
			});
			const newState = {
				songs: filteredSongs,
			};
			return newState;
		}
		default: {
			return state;
		}
	}
}
