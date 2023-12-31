import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RelatedSongs, DetailsHeader, Loader, Error } from "../Components";
import { useGetArtistDetailsQuery } from "../redux/services/shazamAPI";

const ArtistDetails = () => {
	const { id: artistId } = useParams();
	const { activeSong, isPlaying } = useSelector((state) => state.player);
	const {
		data: artistData,
		isFetching: isFetchingArtistDetails,
		error,
	} = useGetArtistDetailsQuery({ artistId });

	if (isFetchingArtistDetails) return;
	<Loader title="Loading artist details" />;

	if (error) return <Error />;

	return (
		<div className="flex flex-col">
			<div className="z-50">
				<DetailsHeader artistId={artistId} artistData={artistData?.data[0]} />
			</div>

			<div className="z-50">
				<RelatedSongs
					data={artistData?.data[0].views["top-songs"]?.data}
					artistId={artistId}
					isPlaying={isPlaying}
					activeSong={activeSong}
				/>
			</div>
		</div>
	);
};

export default ArtistDetails;
