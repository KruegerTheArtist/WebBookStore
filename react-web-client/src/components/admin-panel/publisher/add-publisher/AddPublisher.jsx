import React from 'react';
import "./../../AdminPanel.module.css";

//TODO сделать выбор изданных книг (пока хардкод)
const AddPublisher = (props) => {
    let name = React.createRef();
    
    let add = () => {
        let text = name.current.value;
        props.addPublisher.publisherMethods.addPublisher(text);
    }

    let clear = () => {
        name.current.value = '';
    }

    return (
        <div className="add-form">
            <h3>Add publisher</h3>
            <div>
                <input className="input" ref={name} placeholder="Название издателя"/>
            </div>
            <div>
                <button className="button" onClick={add}>Add</button>
                <button className="button" onClick={clear}>Clear</button>
            </div>

        </div >
    );
}

export default AddPublisher;
