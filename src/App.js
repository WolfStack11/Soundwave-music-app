import "./App.css";

import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { Searchbar, Sidebar, MusicPlayer, TopPlay } from "./Components";
import {
	ArtistDetails,
	TopArtists,
	AroundYou,
	Discover,
	Search,
	SongDetails,
	TopCharts,
} from "./pages";
import LeftMenu from "./Components/LeftMenu";
import TopBar from "./Components/TopBar";
import BottomBar from "./Components/BottomBar";
import MainArea from "./Components/MainArea";

function App() {
	return (
		<div className="App">
			<div className="main-container">
				<LeftMenu />
				<div className="main-area-container">
					<TopBar />
					<MainArea />
				</div>
			</div>
			<BottomBar />
		</div>
	);
}

export default App;
