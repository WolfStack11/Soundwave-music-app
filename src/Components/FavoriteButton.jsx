import { FaHeart, FaRegHeart } from "react-icons/fa";

const PlayPause = ({ song, handleAddFavorites, handlerRemoveFavorites }) =>
	song.id ? (
		<FaHeart size={35} className="text-lime-400" onClick={handleAddFavorites} />
	) : (
		<FaRegHeart
			size={35}
			className="text-lime-400"
			onClick={handlerRemoveFavorites}
		/>
	);

export default PlayPause;
