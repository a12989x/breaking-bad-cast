import React, { useState } from 'react';

const Search = () => {
    return (
        <form>
            <input type="text" placeholder="Search characters" autoFocus />
            <button type="submit">Search</button>
        </form>
    );
};

export default Search;
