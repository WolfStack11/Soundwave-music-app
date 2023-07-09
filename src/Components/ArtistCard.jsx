import { useNavigate } from "react-router-dom";

const ArtistCard = ({ track }) => {
	const navigate = useNavigate();
	return (
		<div
			className="flex flex-col w-[250px] p-4 bg-black bg-opacity-70 bacdrop-blur-sm animate-slideup rounded-lg cursor-pointer hover:scale-105 duration-500"
			onClick={() => navigate(`/artists/${track?.artists[0].adamid}`)}
		>
			<img
				src={track?.images?.coverart}
				alt="artist"
				className="w-full h-56 rounded-lg"
			/>
			<p className="mt-4 font-semibold text-lg truncate text-white hover:text-indigo-500">
				{track?.subtitle}
			</p>
		</div>
	);
};

export default ArtistCard;
