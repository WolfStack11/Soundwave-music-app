import "./App.css";

import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { Searchbar, Sidebar, MusicPlayer } from "./Components";
import {
	ArtistDetails,
	TopArtists,
	NearYou,
	Discover,
	Search,
	SongDetails,
	TopCharts,
} from "./pages";

function App() {
	const { activeSong } = useSelector((state) => state.player);
	return (
		<div className="relative flex">
			<Sidebar />
			<div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]">
				<Searchbar />
				<div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
					<div className="flex-1 h-fit pb-40">
						<Routes>
							<Route path="/" element={<Discover />} />
							<Route path="/top-artists" element={<TopArtists />} />
							<Route path="/top-charts" element={<TopCharts />} />
							<Route path="/near-you" element={<NearYou />} />
							<Route path="/artists/:id" element={<ArtistDetails />} />
							<Route path="/songs/:songid" element={<SongDetails />} />
							<Route path="/search/:searchTerm" element={<Search />} />
						</Routes>
					</div>
				</div>
			</div>

			{activeSong?.title && (
				<div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
					<MusicPlayer />
				</div>
			)}
		</div>
	);
}

export default App;

// function App() {
// 	return (
// 		<div className="App">
// 			<BrowserRouter>
// 				<Routes>
// 					<Route path="/" element={<Discover />} />
// 				</Routes>
// 			</BrowserRouter>
// 			<div className="main-container">
// 				<LeftMenu />
// 				<div className="main-area-container">
// 					<TopBar />
// 					<MainArea />
// 				</div>
// 			</div>
// 			<BottomBar />
// 		</div>
// 	);
// }

// export default App;
