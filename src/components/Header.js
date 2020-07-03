import React from 'react';

import logo from '../img/logo.png';

const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt="breaking bad logo" className="header__image" />
        </header>
    );
};

export default Header;
