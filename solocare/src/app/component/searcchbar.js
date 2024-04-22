import { useState } from 'react';

const SearchBar = ({ placeholder, onSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <input
      type="text"
      placeholder="Search..."
      className=" h-[40px] w-[350px] bg-white rounded-md text-sm focus:outline-none focus:border-blue-900"
    />
  );
};

export default SearchBar;