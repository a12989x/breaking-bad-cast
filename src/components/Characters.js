import React from 'react';

import CharacterItem from './CharacterItem';

const Characters = ({ items, isLoading }) => {
    return isLoading ? (
        <p>Loading...</p>
    ) : (
        <section>
            {items.map((item) => (
                <CharacterItem key={item.char_id} {...item} />
            ))}
        </section>
    );
};

export default Characters;
