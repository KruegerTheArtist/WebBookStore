import React from 'react';
import "./UpdatePublisher.css";

const UpdatePublisher = (props) => {
    let oldName = React.createRef();
    let newName = React.createRef();

    
    let updatePublisher = () => {
        let currentName = newName.current.value;
        let currentoldName = oldName.current.value;
        props.updatePublisher.publisherMethods.updatePublisher(currentoldName, currentName);
    }

    let clear = () => {
        oldName.current.value = '';
        newName.current.value = '';
    }

    return (
        <div className="add-form">
            <h3>Update publisher</h3>
            <div>
                <input className="input" ref={oldName} placeholder="Старое название издателя"/>
            </div>
            <div>
                <input className="input" ref={newName} placeholder="Новое название издателя"/>
            </div>
            <div>
                <button className="button" onClick={updatePublisher}>update</button>
                <button className="button" onClick={clear}>Clear</button>
            </div>

        </div >
    );
}

export default UpdatePublisher;
