import React from 'react';
import "./AddPainter.css";

//TODO переделать выбор стиля художника на select или checkboxes
const AddPainter = (props) => {
    console.log('PROS', props);
    let name = React.createRef();
    let age = React.createRef();
    let description = React.createRef();
    let style = React.createRef();

    let add = () => {
        let currentName = name.current.value;
        let currentAge = age.current.value;
        let currentDescription = description.current.value;
        let currentStyle = style.current.value;

        props.setPainter.painterMethods.setPainter(currentName, currentAge, currentDescription, currentStyle );
    }

    let clear = () => {
        name.current.value = '';
        age.current.value = '';
        description.current.value = '';
        style.current.value = '';
    }

    return (
        <div className="add-form">
            <h3>Add painter</h3>
            <div>
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

export default AddPainter;
