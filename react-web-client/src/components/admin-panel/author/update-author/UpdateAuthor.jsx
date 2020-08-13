import React from 'react';
import "./UpdateAuthor.css";

const UpdateAuthor = (props) => {
    let oldName = React.createRef();
    let name = React.createRef();
    let age = React.createRef();
    let description = React.createRef();
    let style = React.createRef();

    let add = () => {
        let currentoldName = oldName.current.value;
        let currentName = name.current.value;
        let currentAge = age.current.value;
        let currentDescription = description.current.value;
        let currentStyle = style.current.value;

        props.updatePainter.painterMethods.updatePainter(currentoldName, currentName, currentAge, currentDescription, currentStyle );
    }

    let clear = () => {
        oldName.current.value = '';
        name.current.value = '';
        age.current.value = '';
        description.current.value = '';
        style.current.value = '';
    }
    return (
        <div className="add-form">
            <h3>Update painter</h3>
            <div>
                <input className="input" ref={oldName} placeholder="Старое художника" />
                <input className="input" ref={name} placeholder="Имя художника" />

            </div>
            <div>
                <input className="input" ref={age} placeholder="Лет художнику" />
            </div>
            <div>
                <input className="input" ref={description} placeholder="Описание" />
            </div>
            <div>
                <input className="input" ref={style} placeholder="Стиль" />
            </div>
            <div>
                <button className="button" onClick={add}>Add</button>
                <button className="button" onClick={clear}>Clear</button>
            </div>
        </div >
    );
}

export default UpdateAuthor;
