import React from 'react';
import "./AddPainterStyle.css";

const AddPainterStyle = (props) => {
    let name1 = React.createRef();

    let add = () => {
        let text = name1.current.value;
        props.setPainterStyle(text);
    }

    let clear = () => {
        name1.current.value = '';
    }

    return (
        <div className="add-form">
            <h3>Add painter style</h3>
            <div>
                <input className="input" ref={name1} placeholder="Название жанра"/>
            </div>
            <div>
                <button className="button" onClick={add}>Add</button>
                <button className="button" onClick={clear}>Clear</button>
            </div>

        </div >
    );
}

export default AddPainterStyle;
