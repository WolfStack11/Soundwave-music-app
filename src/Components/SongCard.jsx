import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import {
	addToFavorites,
	removeFromFavorites,
	isFavoriteBtn,
} from "../redux/features/favoriteSlice";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import FavoriteButton from "./FavoriteButton";

const SongCard = ({ song, isPlaying, activeSong, i, data }) => {
	const dispatch = useDispatch();
	const isFavorite = useSelector((state) => state.favorites.isFavorite);

	const handlePauseClick = () => {
		dispatch(playPause(false));
	};

	const handlePlayClick = () => {
		dispatch(setActiveSong({ song, data, i }));
		dispatch(playPause(true));
	};

	const handleAddToFavorites = (song) => {
		dispatch(addToFavorites(song));
		// dispatch(isFavoriteBtn(true));
	};

	const handleRemoveFromFavorites = (song) => {
		dispatch(removeFromFavorites(song));
		// dispatch(isFavoriteBtn(false));
	};

	return (
		<div className="flex flex-col w-[150px] p-4 bg-black bg-opacity-70 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer hover:scale-105 duration-500 sm:w-[250px]">
			<div className="relative w-full h-50 group">
				<div
					className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${
						activeSong?.title === song.title
							? "flex bg-black bg-opacity-70"
							: "hidden"
					}`}
				>
					<PlayPause
						isPlaying={isPlaying}
						activeSong={activeSong}
						song={song}
						handlePause={handlePauseClick}
						handlePlay={handlePlayClick}
					/>
				</div>
				<img src={song.images?.coverart} alt="song_img" />
			</div>
			<div className="mt-4 flex flex-col">
				<p className="font-semibold text-lg truncate text-white hover:text-indigo-500">
					<Link to={`/songs/${song?.key}`}>{song.title}</Link>
				</p>
				<p className="text-sm truncate mt-1 text-white hover:text-indigo-500">
					<Link
						to={
							song.artists
								? `/artists/${song?.artists[0]?.adamid}`
								: "/top-artists"
						}
					>
						{song.subtitle}
					</Link>
				</p>
				<button
					className="text-lime-400 text-left w-2 mt-4 hover:text-indigo-500"
					onClick={() => {
						if (!isFavorite) {
							handleAddToFavorites(song);
						} else {
							handleRemoveFromFavorites(song);
						}
					}}
				>
					{isFavorite ? <FaHeart /> : <FaRegHeart />}
				</button>
				{/* <FavoriteButton song={song} /> */}
			</div>
		</div>
	);
};
export default SongCard;
