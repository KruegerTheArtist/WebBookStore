import React from 'react';
import './Header.css';
import Logo from './Logo';
import Search from './Search';

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <div className="title-bar">
                    <button className="title-btn">Contact Us</button>
                    <button className="title-btn">Profile</button>
                    <button className="title-btn">Settings</button>
                    <button className="title-btn">About</button>
                    <button className="title-btn">Exit</button>
                </div>
                <div className="search-bar">
                    <Logo />
                    <Search />
                </div>
                <div className="nav-bar">
                    <button className="title-btn">Bestsellers</button>
                    <button className="title-btn">News</button>
                    <button className="title-btn">Catalog</button>
                    <button className="title-btn">Genres</button>
                    <button className="title-btn">Sale</button>
                    <button className="title-btn">Presents</button>
                    <button className="title-btn">Preorder</button>
                </div>
            </div>
        </header>
    );
}

export default Header;
