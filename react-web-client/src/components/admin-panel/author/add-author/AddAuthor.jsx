import React from 'react';
import "./../../AdminPanel.module.css";

const AddAuthor = (props) => {
    let name = React.createRef();
    let age = React.createRef();
    let description = React.createRef();

    let add = () => {
        let currentName = name.current.value;
        let currentAge = age.current.value;
        let currentDescription = description.current.value;

        props.addAuthor.authorMethods.addAuthor(currentName, currentAge, currentDescription);
    }

    let clear = () => {
        name.current.value = '';
        age.current.value = '';
        description.current.value = '';
    }

    return (
        <div className="add-form">
            <h3>Add author</h3>
            <div>
                <input className="input" ref={name} placeholder="Имя автора" />
            </div>
            <div>
                <input className="input" ref={age} placeholder="Лет автору" />
            </div>
            <div>
                <input className="input" ref={description} placeholder="Описание" />
            </div>
            <div>
                <button className="button" onClick={add}>Add</button>
                <button className="button" onClick={clear}>Clear</button>
            </div>
        </div >
    );
}

export default AddAuthor;
