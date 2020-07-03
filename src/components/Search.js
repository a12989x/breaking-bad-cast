import React, { useState } from 'react';

const Search = ({ getQuery }) => {
    const [text, setText] = useState('');

    const handleChange = (q) => {
        setText(q);
        getQuery(q);
    };

    return (
        <form>
            <input
                type="text"
                placeholder="Search characters"
                autoFocus
                value={text}
                onChange={(e) => handleChange(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default Search;
