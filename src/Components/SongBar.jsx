import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
	addToFavorites,
	removeFromFavorites,
} from "../redux/features/favoriteSlice";
import { FaHeart } from "react-icons/fa";
import PlayPause from "./PlayPause";

const SongBar = ({
	song,
	i,
	artistId,
	isPlaying,
	activeSong,
	handlePauseClick,
	handlePlayClick,
}) => {
	const dispatch = useDispatch();

	const handleAddToFavorites = (song) => {
		dispatch(addToFavorites(song));
	};

	return (
		<div
			className={`w-full flex flex-row items-center hover:bg-black/60 ${
				activeSong?.title === song?.title ? "bg-black/40" : "bg-black/20"
			} py-2 p-4 rounded-lg cursor-pointer mb-2`}
		>
			<h3 className="font-bold text-base text-white mr-3">{i + 1}.</h3>
			<div className="flex-1 flex flex-row justify-between items-center">
				<img
					className="w-20 h-20 rounded-lg"
					src={
						artistId
							? song?.attributes?.artwork?.url
									.replace("{w}", "125")
									.replace("{h}", "125")
							: song?.images?.coverart
					}
					alt={song?.title}
				/>
				<div className="flex-1 flex flex-col justify-center mx-3">
					{!artistId ? (
						<Link to={`/songs/${song.key}`}>
							<p className="text-xl font-bold text-white hover:text-indigo-500">
								{song?.title}
							</p>
						</Link>
					) : (
						<p className="text-xl font-bold text-white">
							{song?.attributes?.name}
						</p>
					)}
					<Link
						to={
							song.artists
								? `/artists/${song?.artists[0]?.adamid}`
								: "/top-artists"
						}
					>
						<p className="text-base text-gray-300 mt-1">
							{artistId ? song?.attributes?.albumName : song?.subtitle}
						</p>
					</Link>
				</div>
			</div>
			{!artistId ? (
				<PlayPause
					isPlaying={isPlaying}
					activeSong={activeSong}
					song={song}
					handlePause={handlePauseClick}
					handlePlay={() => handlePlayClick(song, i)}
				/>
			) : null}

			{!artistId ? (
				<button
					className="text-lime-400 text-left w-2 px-6 hover:text-indigo-500 "
					onClick={() => {
						handleAddToFavorites(song);
					}}
				>
					<FaHeart />
				</button>
			) : null}
		</div>
	);
};

export default SongBar;
