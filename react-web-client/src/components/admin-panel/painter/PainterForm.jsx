import React from 'react';
import cs from './../../body/content/Content.module.css';
import AddPainter from './add-painter/AddPainter';
import DeletePainter from './delete-painter/DeletePainter';
import UpdatePainter from './update-painter/UpdatePainter';


const PainterForm = (props) => {
    
    return (

        <div className={cs.content}>
            <AddPainter/>
            <DeletePainter/>
            <UpdatePainter/>
        </div>
    );
}

export default PainterForm;
