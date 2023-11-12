import React, { useState } from "react";
import './searchBar.css'

const SearchComponent = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSubmit = (error) => {
        error.preventDefault();
        onSearch(searchQuery);
    };

    return (
        <div className="searchHolder">
                <h1>IP Address Tracker</h1>
                <form onSubmit={handleSubmit}>
                        <input 
                    className="m-2"
                    type="text" 
                    placeholder="Search ..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
                <button
                    type="submit"
                    onClick={() => {console.log('I am alive')}}
                > Search
                </button>
            </form>

        </div>
    )
}

export default SearchComponent