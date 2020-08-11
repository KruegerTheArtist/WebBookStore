import React from 'react';
import cs from './../../body/content/Content.module.css';
import AddCoverType from './add-cover-type/AddCoverType';
import UpdateCoverType from './update-cover-type/UpdateCoverType';
import DeleteCoverType from './delete-cover-type/DeleteCoverType';


const CoverTypeForm = (props) => {
    
    return (

        <div className={cs.content}>
            <AddCoverType addCoverType={props}/>
            <DeleteCoverType deleteCoverType={props}/>
            <UpdateCoverType updateCoverType={props}/>
        </div>
    );
}

export default CoverTypeForm;
