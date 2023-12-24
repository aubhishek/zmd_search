// components/SearchBar.js
import React, { useState } from 'react';
import { getTagDescription } from '../data/data.js'; // Adjust the path

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    const description = getTagDescription(query);
    onSearch({ tag: query, description });
  };

  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Search for a disease..."
        value={query}
        onChange={handleInputChange}
        className="p-2 border border-gray-300 rounded mr-2"
      />
      <button onClick={handleSearch} className="p-2 bg-gray-800 text-white rounded">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
