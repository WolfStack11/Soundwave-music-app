import { FaHeart, FaRegHeart } from "react-icons/fa";

const PlayPause = ({
	song,
	handleAddFavorites,
	handleRemoveFavorites,
	isFavorite,
}) =>
	isFavorite ? (
		<FaHeart
			size={20}
			className="text-lime-400"
			onClick={handleRemoveFavorites}
		/>
	) : (
		<FaRegHeart
			size={20}
			className="text-lime-400"
			onClick={handleAddFavorites}
		/>
	);

export default PlayPause;
