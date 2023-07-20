import { useDispatch, useSelector } from "react-redux";
import {
	addToFavorites,
	removeFromFavorites,
} from "../redux/features/favoriteSlice";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const FavoriteButton = ({ song }) => {
	const dispatch = useDispatch();
	const favoriteSongs = useSelector((state) => state.favorites.songs);
	const isFavorite = favoriteSongs.includes(song.id);

	const handleButtonClick = () => {
		if (isFavorite) {
			dispatch(removeFromFavorites(song.id));
		} else {
			dispatch(addToFavorites(song.id));
		}

		return (
			<button>
				{isFavorite ? (
					<FaHeart
						size={20}
						className="text-lime-400"
						onClick={handleButtonClick}
					/>
				) : (
					<FaRegHeart
						size={20}
						className="text-lime-400"
						onClick={handleButtonClick}
					/>
				)}
				;
			</button>
		);
	};
};

export default FavoriteButton;
