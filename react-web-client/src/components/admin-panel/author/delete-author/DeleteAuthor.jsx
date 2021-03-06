import React from 'react';
import "./../../AdminPanel.module.css";

const DeleteAuthor = (props) => {

    let name = React.createRef();

    let deleteAuthor = () => {
        let currentName = name.current.value;
        props.deleteAuthor.authorMethods.deleteAuthor(currentName);
    }

    let clear = () => {
        name.current.value = '';
    }

    return (
        <div className="add-form">
            <h3>Delete author</h3>
            <div>
                <input className="input" ref={name} placeholder="Имя автора" />
            </div>
            <div>
                <button className="button" onClick={deleteAuthor}>Delete</button>
                <button className="button" onClick={clear}>Clear</button>
            </div>
        </div >
    );
}

export default DeleteAuthor;
