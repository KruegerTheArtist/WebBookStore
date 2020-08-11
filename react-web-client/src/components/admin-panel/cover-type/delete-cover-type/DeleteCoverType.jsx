import React from 'react';
import "./DeleteCoverType.css";

const DeleteCoverType = (props) => {

    let name = React.createRef();

    let deleteCoverType = () => {
        let currentName = name.current.value;
        props.deleteCoverType.coverTypeMethods.deleteCoverType(currentName);
    }

    let clear = () => {
        name.current.value = '';
    }

    return (
        <div className="add-form">
            <h3>Delete cover type</h3>
            <div>
                <input className="input" ref={name} placeholder="Название типа переплета" />
            </div>
            <div>
                <button className="button" onClick={deleteCoverType}>Delete</button>
                <button className="button" onClick={clear}>Clear</button>
            </div>
        </div >
    );
}

export default DeleteCoverType;
