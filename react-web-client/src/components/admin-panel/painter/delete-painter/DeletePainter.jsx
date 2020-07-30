import React from 'react';
import "./DeletePainter.css";

const DeletePainter = (props) => {

    let name = React.createRef();

    let deletePainter = () => {
        let currentName = name.current.value;
        props.deletePainter.painterMethods.deletePainter(currentName);
    }

    let clear = () => {
        name.current.value = '';
    }

    return (
        <div className="add-form">
            <h3>Delete painter</h3>
            <div>
                <input className="input" ref={name} placeholder="Имя художника" />
            </div>
            <div>
                <button className="button" onClick={deletePainter}>Delete</button>
                <button className="button" onClick={clear}>Clear</button>
            </div>
        </div >
    );
}

export default DeletePainter;
