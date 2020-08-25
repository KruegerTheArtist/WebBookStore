import React from 'react';
import AddPainterStyle from './add-painter-style/AddPainterStyle';
import DeletePainterStyle from './delete-painter-style/DeletePainterStyle';
import UpdatePainterStyle from './update-painter-style/UpdatePainterStyle';
import './PainterStyleForm.css';


const PainterStyleForm = (props) => {
    return (
        <div className="painter-style-form">
            <span className="title">Стиль художника:</span>
            <div className="painter-style-form-content">
                <AddPainterStyle className="add-panel" setPainterStyle={props} />
                <DeletePainterStyle className="delete-panel" deletePainterStyle={props} />
                <UpdatePainterStyle className="update-panel" updatePainterStyle={props} />
            </div>
        </div>
    );
}

export default PainterStyleForm;
