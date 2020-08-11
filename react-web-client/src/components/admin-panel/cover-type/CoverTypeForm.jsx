import React from 'react';
import cs from './../../body/content/Content.module.css';
import AddCoverType from './add-cover-type/AddCoverType';


const CoverTypeForm = (props) => {
    
    return (

        <div className={cs.content}>
            <AddCoverType addCoverType={props}/>
            {/* <DeletePainter deletePainter={props}/> */}
            {/* <UpdatePainter updatePainter={props}/> */}
        </div>
    );
}

export default CoverTypeForm;
