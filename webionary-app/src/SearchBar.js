import React from 'react';

function SearchBar({ search, setSearch }) {
    return (
        <div className="search">
            <input 
            type="text" 
            id="search"
            placeholder="Search by show name or genre"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    )
}