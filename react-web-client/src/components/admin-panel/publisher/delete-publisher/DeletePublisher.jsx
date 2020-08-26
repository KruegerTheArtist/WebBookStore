import React, { Component } from 'react';
import "./DeletePublisher.css";

class DeletePublisher extends Component {
    name = React.createRef();

    deletePublisher = () => {
        let currentName = this.name.current.value;
        this.props.deletePublisher.publisherMethods.deletePublisher(currentName);
    }
    render() {
        return (
            <div className="add-form">
                <h3>Delete publisher</h3>
                <div>
                    <input className="input" ref={this.name} placeholder="Название издателя" />
                </div>
                <div>
                    <button className="button" onClick={this.deletePublisher}>delete</button>
                </div>

            </div >
        );
    }

}

export default DeletePublisher;
