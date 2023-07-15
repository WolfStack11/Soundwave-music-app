import { useSelector } from "react-redux";
import { SongCard } from "../Components";
import { useContext } from "react";
import { FavoritesContext } from "../redux/features/Favorites/context";

const Favorites = () => {
	const { activeSong, isPlaying } = useSelector((state) => state.player);
	const { state } = useContext(FavoritesContext);
	return (
		<div className="flex flex-col ">
			<h2 className="font-bold text-white text-3xl mt-4 mb-10">Top Charts</h2>

			<div className="flex flex-wrap sm:justify-start justify-center gap-5">
				{state?.map((song, i) => (
					<SongCard
						key={song.key}
						song={song}
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
