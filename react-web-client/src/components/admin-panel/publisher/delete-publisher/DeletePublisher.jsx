import React from 'react';
import "./DeletePublisher.css";

const DeletePublisher = (props) => {
    let name = React.createRef();
    
    let deletePublisher = () => {
        let currentName = name.current.value;
        props.deletePublisher.publisherMethods.deletePublisher(currentName);
    }

    let clear = () => {
        name.current.value = '';
    }

    return (
        <div className="add-form">
            <h3>Delete publisher</h3>
            <div>
                <input className="input" ref={name} placeholder="Название издателя"/>
            </div>
            <div>
                <button className="button" onClick={deletePublisher}>delete</button>
                <button className="button" onClick={clear}>Clear</button>
            </div>

        </div >
    );
}

export default DeletePublisher;
