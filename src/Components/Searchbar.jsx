import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const Searchbar = () => {
	const navigate = useNavigate();
	const [searchTerm, setSearchTerm] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		navigate(`/search/${searchTerm}`);
	};

	return (
		<form
			onSubmit={handleSubmit}
			autoComplete="off"
			className="p-2 text-gray-400 focus-within:text-gray-600 z-10 w-1/4"
		>
			<label htmlFor="search-field" className="sr-only">
				Search songs
			</label>
			<div className="flex justify-start items-center">
				<FiSearch className="w-5 h-5 ml-4" />
				<input
					name="search-field"
					autoComplete="off"
					id="search-field"
					placeholder="Search songs"
					type="search"
					value={searchTerm}
					onChange={(event) => setSearchTerm(event.target.value)}
					className="flex-1 bg-transparent border-none outline-none placeholder-gray-500 text-base text-white p-4"
				/>
			</div>
		</form>
	);
};

export default Searchbar;
