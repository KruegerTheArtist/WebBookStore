import React from 'react';
import cs from './../../body/content/Content.module.css';
import AddPublisher from './add-publisher/AddPublisher';


const PublisherForm = (props) => {
    
    return (

        <div className={cs.content}>
            <AddPublisher addPublisher={props} />
            {/* <DeletePainterStyle /> */}
            {/* <UpdatePainterStyle/> */}
        </div>
    );
}

export default PublisherForm;
