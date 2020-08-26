import React from 'react';
import "./../../AdminPanel.module.css";

const AddCoverType = (props) => {
    let name = React.createRef();

    let add = () => {
        let currentName = name.current.value;
        props.addCoverType.coverTypeMethods.addCoverType(currentName);
    }

    let clear = () => {
        name.current.value = '';
    }

    return (
        <div className="add-form">
            <h3>Add cover type</h3>
            <div>
                <input className="input" ref={name} placeholder="Название переплета" />
            </div>
            <div>
                <button className="button" onClick={add}>Add</button>
                <button className="button" onClick={clear}>Clear</button>
            </div>
        </div >
    );
}

export default AddCoverType;
