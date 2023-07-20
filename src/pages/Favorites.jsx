import { useSelector } from "react-redux";
import { SongCard } from "../Components";

const Favorites = () => {
	const { activeSong, isPlaying } = useSelector((state) => state.player);
	const isFavorite = useSelector((state) => state.favorites.isFavorite);
	const favorites = useSelector((state) => state.favorites);
	return (
		<div className="flex flex-col ">
			<h2 className="font-bold text-white text-3xl mt-4 mb-10 z-10">
				Favorites
			</h2>

			<div className="flex flex-wrap sm:justify-start justify-center gap-5 z-10">
				{favorites.songs.map((song, i) => (
					<SongCard
						key={song.key}
						song={song}
						isFavorite={isFavorite}
						isPlaying={isPlaying}
						activeSong={activeSong}
						i={i}
					/>
				))}
			</div>
		</div>
	);
};

export default Favorites;
