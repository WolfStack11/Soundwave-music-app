import { ArtistCard, Error, Loader } from "../Components";
import { useGetTopSongsQuery } from "../redux/services/shazamAPI";

const TopArtists = () => {
	const { data, isFetching, error } = useGetTopSongsQuery();

	if (isFetching) return <Loader title="Loading top charts" />;

	if (error) return <Error />;

	return (
		<div className="flex flex-col ">
			<h2 className="font-bold text-white text-3xl mt-4 mb-10 z-50">
				Top Artists
			</h2>

			<div className="flex flex-wrap sm:justify-start justify-center gap-5 z-50">
				{data?.map((track) => (
					<ArtistCard key={track.key} track={track} />
				))}
			</div>
		</div>
	);
};
export default TopArtists;
