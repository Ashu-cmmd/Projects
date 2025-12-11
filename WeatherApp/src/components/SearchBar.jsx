import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSearch = () => onSearch(city);
  const handleEnterKey = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="Enter city name"
        className="flex-1 p-2 border rounded-lg"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleEnterKey}
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
