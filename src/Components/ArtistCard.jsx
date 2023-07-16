import { useNavigate } from "react-router-dom";

const ArtistCard = ({ track }) => {
	const navigate = useNavigate();
	return (
		<div
			className="flex flex-col w-[200px] p-4 bg-black bg-opacity-70 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer hover:scale-105 duration-500 sm:w-[250px]"
			onClick={() => navigate(`/artists/${track?.artists[0].adamid}`)}
		>
			<img
				src={track?.images?.coverart}
				alt="artist"
				className="w-full rounded-lg"
			/>
			<p className="mt-4 font-semibold text-lg truncate text-white hover:text-indigo-500">
				{track?.subtitle}
			</p>
		</div>
	);
};

export default ArtistCard;
