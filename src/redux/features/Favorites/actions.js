export function addToFavorites(song) {
	return {
		type: "ADD_TO_FAVORITES",
		payload: song,
	};
}

export function removeFromFavorites(songId) {
	return {
		type: "REMOVE_FROM_FAVORITES",
		payload: songId,
	};
}
