import React, { useState } from 'react';

const Search = () => {
    const [text, setText] = useState('');

    return (
        <form>
            <input
                type="text"
                placeholder="Search characters"
                autoFocus
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default Search;
