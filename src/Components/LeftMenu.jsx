import React from "react";
import MenuList from "./MenuList";
import "../Styles/LeftMenu.css";

function LeftMenu() {
	return (
		<div className="left-menu">
			<div className="logo-container">
				<h2>Soundwave</h2>
			</div>
			<MenuList />
			<div className="library-menu">
				<h5>Your library</h5>
				<div className="menu-item">
					<img src="../Images/Home_icon.svg" alt="" />
					<a href="#">Recently played</a>
				</div>
				<div className="menu-item">
					<img src="../Images/Home_icon.svg" alt="" />
					<a href="#">Favorite songs</a>
				</div>
				<div className="menu-item">
					<img src="../Images/Home_icon.svg" alt="" />
					<a href="#">Artists</a>
				</div>
				<div className="menu-item">
					<img src="../Images/Home_icon.svg" alt="" />
					<a href="#">Albums</a>
				</div>
			</div>
			<div className="playlist-menu">
				<h5>Playlists</h5>
				<div className="menu-item">
					<a href="#">Album 1</a>
				</div>
				<button className="add-playlist-button">
					<img src="../Images/Home_icon.svg" alt="" />
					Add new playlist
				</button>
			</div>
		</div>
	);
}

export default LeftMenu;
