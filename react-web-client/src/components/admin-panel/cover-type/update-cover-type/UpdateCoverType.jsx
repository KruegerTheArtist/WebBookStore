import React from 'react';
import "./../../AdminPanel.module.css";

const UpdateCoverType = (props) => {
    let oldName = React.createRef();
    let newName = React.createRef();

    let updateCoverType = () => {
        let currentoldName = oldName.current.value;
        let currentName = newName.current.value;

        props.updateCoverType.coverTypeMethods.updateCoverType(currentoldName, currentName);
    }

    let clear = () => {
        oldName.current.value = '';
        newName.current.value = '';
    }
    return (
        <div className="add-form">
            <h3>Update cover type</h3>
            <div>
                <input className="input" ref={oldName} placeholder="Старое название переплета" />
                <input className="input" ref={newName} placeholder="Новое название переплета" />

            </div>
            <div>
                <button className="button" onClick={updateCoverType}>Update</button>
                <button className="button" onClick={clear}>Clear</button>
            </div>
        </div >
    );
}

export default UpdateCoverType;
