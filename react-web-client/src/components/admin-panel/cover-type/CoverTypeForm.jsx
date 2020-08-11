import React from 'react';
import cs from './../../body/content/Content.module.css';


const CoverTypeForm = (props) => {
    console.log('PAAAA', props);
    
    return (

        <div className={cs.content}>
            {/* <AddPainter setPainter={props}/> */}
            {/* <DeletePainter deletePainter={props}/> */}
            {/* <UpdatePainter updatePainter={props}/> */}
        </div>
    );
}

export default CoverTypeForm;
