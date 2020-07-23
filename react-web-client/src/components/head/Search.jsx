import React from 'react';
import './Header.css';

const Search = () => {
    return (
        <div className="search">
            <form>
                <label>
                    Поиск:
                            <input type="text" name="name" />
                </label>
                <input className="input-btn" type="submit" value="Отправить" />
            </form>
        </div>
    );
}

export default Search;
