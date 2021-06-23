import React from 'react';
import './header.css';

const Header = () => {
    return <span onClick={() => window.scroll(0, 0)} className='header'><span className='header-icon'>🎬</span> ENTERTAINMENT HUB <span className='header-icon'>🎥</span></span>
};

export default Header;