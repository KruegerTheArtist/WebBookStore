import React from 'react';
import "./DeleteInterpreter.css";

const DeleteInterpreter = (props) => {

    let name = React.createRef();

    let deleteInterpreter = () => {
        let currentName = name.current.value;
        props.deleteInterpreter.interpreterMethods.deleteInterpreter(currentName);
    }

    let clear = () => {
        name.current.value = '';
    }

    return (
        <div className="add-form">
            <h3>Delete interpreter</h3>
            <div>
                <input className="input" ref={name} placeholder="Имя переводчика" />
            </div>
            <div>
                <button className="button" onClick={deleteInterpreter}>Delete</button>
                <button className="button" onClick={clear}>Clear</button>
            </div>
        </div >
    );
}

export default DeleteInterpreter;
