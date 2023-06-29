import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import { useGetTopSongsQuery } from "../redux/services/shazamAPI";

import "swiper/css";
import "swiper/css/free-mode";

const TopPlay = () => {
	const { data } = useGetTopSongsQuery();
	const topPlays = data;

	return (
		<div className="w-full flex flex-col mt-8">
			<div className="flex flex-row justify-between items-center">
				<h2 className="text-white font-bold text-2xl">Top Artists</h2>
				<Link to="/top-artists">
					<p className="text-gray-300 text-base cursor-pointer">See more</p>
				</Link>
			</div>

			<Swiper
				slidesPerView="auto"
				spaceBetween={15}
				freeMode
				centeredSlides
				centeredSlidesBounds
				modules={[FreeMode]}
				className="mt-4"
			>
				{topPlays?.slice(0, 15).map((artist) => (
					<SwiperSlide
						key={artist?.key}
						style={{ width: "10%", height: "auto" }}
						className="shadow-lg rounded-full animate-slideright"
					>
						<Link to={`/artists/${artist?.artists[0].adamid}`}>
							<img
								src={artist?.images?.background}
								alt="Name"
								className="rounded-full w-full object-cover"
							/>
						</Link>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default TopPlay;
