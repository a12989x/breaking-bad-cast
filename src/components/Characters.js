import React from 'react';

import CharacterItem from './CharacterItem';

const Characters = ({ items, isLoading }) => {
    return isLoading ? (
        <p>Loading...</p>
    ) : (
        <section>
            {items.map((item) => (
                <CharacterItem />
            ))}
        </section>
    );
};

export default Characters;
