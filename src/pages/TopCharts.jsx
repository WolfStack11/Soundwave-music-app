import { useSelector } from "react-redux";
import { Error, Loader, SongCard } from "../Components";
import { useGetTopSongsQuery } from "../redux/services/shazamAPI";

const TopCharts = () => {
	const { activeSong, isPlaying } = useSelector((state) => state.player);
	const { data, isFetching, error } = useGetTopSongsQuery();

	if (isFetching) return <Loader title="Loading top charts" />;

	if (error) return <Error />;

	return (
		<div className="flex flex-col ">
			<h2 className="font-bold text-white text-3xl mt-4 mb-10">Top Charts</h2>

			<div className="flex flex-wrap sm:justify-start justify-center gap-5">
				{data?.map((song, i) => (
					<SongCard
						key={song.key}
						song={song}
						isPlaying={isPlaying}
						activeSong={activeSong}
						data={data}
						i={i}
					/>
				))}
			</div>
		</div>
	);
};
export default TopCharts;
