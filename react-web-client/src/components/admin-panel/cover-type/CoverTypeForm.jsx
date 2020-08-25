import React from 'react';
import AddCoverType from './add-cover-type/AddCoverType';
import UpdateCoverType from './update-cover-type/UpdateCoverType';
import DeleteCoverType from './delete-cover-type/DeleteCoverType';
import './CoverTypeForm.css';


const CoverTypeForm = (props) => {

    return (
        <div className="cover-type-form">
            <span className="title">Тип переплета:</span>
            <div className="cover-type-form-content">
                <AddCoverType className="add-panel" addCoverType={props} />
                <DeleteCoverType className="delete-panel" deleteCoverType={props} />
                <UpdateCoverType className="update-panel" updateCoverType={props} />
            </div>
        </div>
    );
}

export default CoverTypeForm;
