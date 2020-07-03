import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Header from './components/Header';

const App = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className="App">
            <Header />
        </div>
    );
};

export default App;
