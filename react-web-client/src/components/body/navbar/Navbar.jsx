import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="div">
                <a className="some-title">Some filter by genre</a>
                <div>
                    <a style={{marginLeft:10+'px'}}>Comedy</a>
                    <a style={{marginLeft:10+'px'}}>Horror</a>
                    <a style={{marginLeft:10+'px'}}>Adventure</a>
                    <a style={{marginLeft:10+'px'}}>Fantastic</a>
                </div>
            </div>
            <div className="div">
                <a className="some-title">Some filter by author</a>
                <div>
                    <a style={{marginLeft:10+'px'}}>Dostoevsky</a>
                    <a style={{marginLeft:10+'px'}}>Tolstoy</a>
                    <a style={{marginLeft:10+'px'}}>Pushkin</a>
                </div>
            </div>
            <div className="div">
                <a className="some-title">Some filter by year</a>
                <div>
                    <a style={{marginLeft:10+'px'}}>1980-1990</a>
                    <a style={{marginLeft:10+'px'}}>1991-2000</a>
                    <a style={{marginLeft:10+'px'}}>2000 - our time</a>
                </div>
            </div>
            <div className="div">
                <a className="some-title">Some filter by sales</a>
                <div>
                    <a style={{marginLeft:10+'px'}}>Most popular</a>
                    <a style={{marginLeft:10+'px'}}>Bad books</a>
                    <a style={{marginLeft:10+'px'}}>Nor ordinary books</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
