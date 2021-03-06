import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Header from './components/Header';
import Characters from './components/Characters';
import Search from './components/Search';

const App = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [query, setQuery] = useState('');

    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios(
                `https://www.breakingbadapi.com/api/characters?name=${query}`
            );

            setItems(result.data);
            setIsLoading(false);
        };

        fetchItems();
    }, [query]);

    return (
        <section className="App">
            <Header />
            <Search getQuery={(q) => setQuery(q)} />
            <Characters isLoading={isLoading} items={items} />
        </section>
    );
};

export default App;
