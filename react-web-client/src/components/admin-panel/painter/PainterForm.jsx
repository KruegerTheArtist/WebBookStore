import React from 'react';
import AddPainter from './add-painter/AddPainter';
import DeletePainter from './delete-painter/DeletePainter';
import UpdatePainter from './update-painter/UpdatePainter';
import './PainterForm.css';


const PainterForm = (props) => {

    return (
        <div className="painter-form">
            <span className="title">Художник:</span>
            <div className="painter-form-content">
                <AddPainter className="add-panel" setPainter={props} />
                <DeletePainter className="delete-panel" deletePainter={props} />
                <UpdatePainter className="update-panel" updatePainter={props} />
            </div>
        </div>

    );
}

export default PainterForm;
