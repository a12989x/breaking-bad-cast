import React, { useState } from 'react';

const Search = ({ getQuery }) => {
    const [text, setText] = useState('');

    const handleChange = (q) => {
        setText(q);
        getQuery(q);
    };

    return (
        <form className="search">
            <input
                className="search__input"
                type="text"
                placeholder="Search characters"
                autoFocus
                value={text}
                onChange={(e) => handleChange(e.target.value)}
            />
        </form>
    );
};

export default Search;
