import React from 'react';
import "./DeletePainterStyle.css";

const DeletePainterStyle = (props) => {
    let name1 = React.createRef();
    
    let deletePainter = () => {
        let painterStyle = props.painterStyles.painterStyles.find(ps => ps.name === name1.current.value);
        props.deletePainterStyle(painterStyle.id);
    }

    let clear = () => {
        name1.current.value = '';
    }

    return (
        <div className="add-form">
            <h3>Delete painter style</h3>
            <div>
                <input className="input" ref={name1} placeholder="Название жанра"/>
            </div>
            <div>
                <button className="button" onClick={deletePainter}>delete</button>
                <button className="button" onClick={clear}>Clear</button>
            </div>

        </div >
    );
}

export default DeletePainterStyle;
