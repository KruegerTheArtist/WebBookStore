import React from 'react';
import "./../../AdminPanel.module.css";

const UpdateInterpreter = (props) => {
    let oldName = React.createRef();
    let name = React.createRef();
    let age = React.createRef();
    let description = React.createRef();

    let add = () => {
        let currentoldName = oldName.current.value;
        let currentName = name.current.value;
        let currentAge = age.current.value;
        let currentDescription = description.current.value;

        props.updateInterpreter.interpreterMethods.updateInterpreter(currentoldName, currentName, currentAge, currentDescription );
    }

    let clear = () => {
        oldName.current.value = '';
        name.current.value = '';
        age.current.value = '';
        description.current.value = '';
    }
    return (
        <div className="add-form">
            <h3>Update interpreter</h3>
            <div>
                <input className="input" ref={oldName} placeholder="Старое имя переводчика" />
                <input className="input" ref={name} placeholder="Имя переводчика" />

            </div>
            <div>
                <input className="input" ref={age} placeholder="Лет переводчику" />
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

export default UpdateInterpreter;
