import React from 'react';
import './Header.css';
import Logo from './Logo';
import Search from './Search';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <div className="title-bar">
                    <button className="title-btn" >
                        <NavLink to="/adminPanel">Admin panel</NavLink>
                    </button>
                    <button className="title-btn" >
                        <NavLink to="/contactUs">Contact Us</NavLink>
                    </button>
                    <button className="title-btn" >
                        <NavLink to="/profile">Profile</NavLink>
                    </button>
                    <button className="title-btn" >
                        <NavLink to="/settings">Settings</NavLink>
                    </button>
                    <button className="title-btn" >
                        <NavLink to="/about">About</NavLink>
                    </button>
                    <button className="title-btn" >
                        <NavLink to="/exit">Exit</NavLink>
                    </button>
                </div>
                <div className="search-bar">
                    <Logo />
                    <Search />
                </div>
                <div className="nav-bar">
                    <button className="nav-btn" >
                        <NavLink to="/bestsellers">Best sellers</NavLink>
                    </button>
                    <button className="nav-btn" >
                        <NavLink to="/news">News</NavLink>
                    </button>
                    <button className="nav-btn" >
                        <NavLink to="/catalog">Catalog</NavLink>
                    </button>
                    <button className="nav-btn" >
                        <NavLink to="/genres">Catalog</NavLink>
                    </button>
                    <button className="nav-btn" >
                        <NavLink to="/sale">Sale</NavLink>
                    </button>
                    <button className="nav-btn" >
                        <NavLink to="/presents">Presents</NavLink>
                    </button>
                    <button className="nav-btn" >
                        <NavLink to="/preorder">Preorder</NavLink>
                    </button>
                </div>
            </div>
        </header>

    );
}

export default Header;
