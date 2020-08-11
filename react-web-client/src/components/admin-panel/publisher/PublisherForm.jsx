import React from 'react';
import cs from './../../body/content/Content.module.css';
import AddPublisher from './add-publisher/AddPublisher';
import DeletePublisher from './delete-publisher/DeletePublisher';


const PublisherForm = (props) => {
    
    return (

        <div className={cs.content}>
            <AddPublisher addPublisher={props} />
            <DeletePublisher deletePublisher={props}/>
            {/* <UpdatePainterStyle/> */}
        </div>
    );
}

export default PublisherForm;
