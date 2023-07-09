import {
	TiHome,
	TiLocationArrow,
	TiUser,
	TiChartBar,
	TiHeart,
} from "react-icons/ti";

export const genres = [
	{ title: "Pop", value: "POP" },
	{ title: "Hip-Hop", value: "HIP_HOP_RAP" },
	{ title: "Dance", value: "DANCE" },
	{ title: "Electronic", value: "ELECTRONIC" },
	{ title: "Soul", value: "SOUL_RNB" },
	{ title: "Alternative", value: "ALTERNATIVE" },
	{ title: "Rock", value: "ROCK" },
	{ title: "Latin", value: "LATIN" },
	{ title: "Film", value: "FILM_TV" },
	{ title: "Country", value: "COUNTRY" },
	{ title: "Worldwide", value: "WORLDWIDE" },
	{ title: "Reggae", value: "REGGAE_DANCE_HALL" },
	{ title: "House", value: "HOUSE" },
	{ title: "K-Pop", value: "K_POP" },
];

export const links = [
	{ name: "Discover", to: "/", icon: TiHome },
	{ name: "Near You", to: "/near-you", icon: TiLocationArrow },
	{ name: "Top Artists", to: "/top-artists", icon: TiUser },
	{ name: "Top Charts", to: "/top-charts", icon: TiChartBar },
	{ name: "Favorites", to: "/favorites", icon: TiHeart },
];
