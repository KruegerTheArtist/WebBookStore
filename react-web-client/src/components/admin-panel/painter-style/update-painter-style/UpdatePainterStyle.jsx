import React from 'react';
import "./UpdatePainterStyle.css";

const UpdatePainterStyle = (props) => {
    let oldName = React.createRef();
    let newName = React.createRef();

    
    let updatePainterStyle = () => {
        let painterStyle = props.painterStyles.painterStyles.find(ps => ps.name === oldName.current.value);
        props.updatePainterStyle(painterStyle.id, newName.current.value);
    }

    let clear = () => {
        oldName.current.value = '';
    }

    return (
        <div className="add-form">
            <h3>Update painter style</h3>
            <div>
                <input className="input" ref={oldName} placeholder="Старое название жанра"/>
            </div>
            <div>
                <input className="input" ref={newName} placeholder="Новое название жанра"/>
            </div>
            <div>
                <button className="button" onClick={updatePainterStyle}>update</button>
                <button className="button" onClick={clear}>Clear</button>
            </div>

        </div >
    );
}

export default UpdatePainterStyle;
