import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Error, Loader, SongCard } from "../Components";
import { useGetSongsByCountryQuery } from "../redux/services/shazamAPI";

const CountryTracks = () => {
	const [country, setCountry] = useState("");
	const [loading, setLoading] = useState(true);
	const { activeSong, isPlaying } = useSelector((state) => state.player);
	const { data, isFetching, error } = useGetSongsByCountryQuery(country);

	useEffect(() => {
		axios
			.get(
				`https://geo.ipify.org/api/v2/country?apiKey=at_2WW9qrHlj1eYrNJHHZG2Ve9itZc66`
			)
			.then((response) => setCountry(response?.data?.location?.country))
			.catch((err) => console.log(err))
			.finally(() => setLoading(false));
	}, [country]);

	if (isFetching && loading) return <Loader title="Loading songs near you" />;

	if (error && country) return <Error />;

	return (
		<div className="flex flex-col ">
			<h2 className="font-bold text-white text-3xl mt-4 mb-10 z-10 ">
				Near you
			</h2>

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
export default CountryTracks;
