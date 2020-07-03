import React from 'react';

import CharacterItem from './CharacterItem';

const Characters = ({ items, isLoading }) => {
    return isLoading ? (
        <p>Loading...</p>
    ) : (
        <section className="characters">
            {items.map((item) => (
                <CharacterItem key={item.char_id} {...item} />
            ))}
        </section>
    );
};

export default Characters;
