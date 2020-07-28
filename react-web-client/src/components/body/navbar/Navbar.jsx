import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="div">
                <a className="some-title">Some filter by genre</a>
                <br></br>
                <select>
                    <option value="comedy">Comedy</option>
                    <option value="horror">Horror</option>
                    <option value="adventure">Adventure</option>
                    <option value="fantastic">Fantastic</option>
                </select>
            </div>
            <div className="div">
                <a className="some-title">Some filter by author</a>
                <br></br>
                <select>
                    <option value="dostoevsky">Dostoevsky</option>
                    <option value="tolstoy">Tolstoy</option>
                    <option value="pushkin">Pushkin</option>
                    <option value="nikitin">Nikitin</option>
                </select>
            </div>
            <div className="div">
                <a className="some-title">Some filter by year</a>
                <br></br>
                <select>
                    <option value="1980-1990">1980-1990</option>
                    <option value="1991-2000">1991-2000</option>
                    <option value="2000-2010">2000-2010</option>
                    <option value="2010-our_time">2000-our time</option>
                </select>
            </div>
            <div className="div">
                <a className="some-title">Some filter by sales</a>
                <br></br>
                <select className="some-select">
                    <option value="mostPopular">Most popular</option>
                    <option value="badBooks">Bad books</option>
                    <option value="notOrdinaryBooks">Not ordinary books</option>
                    <option value="rareBooks">Rare books</option>
                </select>
            </div>
        </nav>
    );
}

export default Navbar;
