import React from 'react';
import cs from './../../body/content/Content.module.css';
import AddPublisher from './add-publisher/AddPublisher';
import DeletePublisher from './delete-publisher/DeletePublisher';
import UpdatePublisher from './update-publisher/UpdatePublisher';


const PublisherForm = (props) => {
    
    return (

        <div className={cs.content}>
            <AddPublisher addPublisher={props} />
            <DeletePublisher deletePublisher={props}/>
            <UpdatePublisher updatePublisher={props}/>
        </div>
    );
}

export default PublisherForm;
