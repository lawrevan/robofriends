import React from 'react';
import './SearchBar.css';

const SearchBar = ({ searchfield, searchChange }) => {
    return (
        <div className='search'>
            <input
                type='text'
                placeholder='Search Robots'
                className='search__input'
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBar;
