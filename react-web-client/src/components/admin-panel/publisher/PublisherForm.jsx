import React from 'react';
import AddPublisher from './add-publisher/AddPublisher';
import DeletePublisher from './delete-publisher/DeletePublisher';
import UpdatePublisher from './update-publisher/UpdatePublisher';
import './PublisherForm.css';


const PublisherForm = (props) => {

    return (
        <div className="publisher-form">
            <span className="title">Издатель:</span>
            <div className="publisher-form-content">
                <AddPublisher className="add-panel" addPublisher={props} />
                <DeletePublisher className="delete-panel" deletePublisher={props} />
                <UpdatePublisher className="update-panel" updatePublisher={props} />
            </div>
        </div>

    );
}

export default PublisherForm;
