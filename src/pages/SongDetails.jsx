import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RelatedSongs, DetailsHeader, Loader, Error } from "../Components";
import { setActiveSong, playPause } from "../redux/features/playerSlice";
import {
	useGetSongDetailsQuery,
	useGetSongRelatedQuery,
} from "../redux/services/shazamAPI";

const SongDetails = () => {
	const dispatch = useDispatch();
	const { songid } = useParams();
	const { activeSong, isPlaying } = useSelector((state) => state.player);
	const { data: songData, isFetching: isFetchingSongDetails } =
		useGetSongDetailsQuery({ songid });
	const {
		data,
		isFetching: isFetchingRelatedSongs,
		error,
	} = useGetSongRelatedQuery({ songid });

	const handlePauseClick = () => {
		dispatch(playPause(false));
	};

	const handlePlayClick = (song, i) => {
		dispatch(setActiveSong({ song, data, i }));
		dispatch(playPause(true));
	};

	if (isFetchingSongDetails || isFetchingRelatedSongs) return;
	<Loader title="Searching song details" />;

	if (error) return <Error />;

	return (
		<div className="flex flex-col ">
			<DetailsHeader songData={songData} />
			<div className="mb-10 z-50">
				<h2 className="text-white text-3xl font-bold">Lyrics</h2>
				<div className="mt-5">
					{songData?.sections[1].type === "LYRICS" ? (
						songData?.sections[1].text.map((line, i) => (
							<p className="text-gray-400 texxt-base my-1">{line}</p>
						))
					) : (
						<p className="text-gray-400 texxt-base my-1">No lyrics found!</p>
					)}
				</div>
			</div>
			<div className="z-50">
				<RelatedSongs
					data={data}
					isPlaying={isPlaying}
					activeSong={activeSong}
					handlePauseClick={handlePauseClick}
					handlePlayClick={handlePlayClick}
				/>
			</div>
		</div>
	);
};

export default SongDetails;
