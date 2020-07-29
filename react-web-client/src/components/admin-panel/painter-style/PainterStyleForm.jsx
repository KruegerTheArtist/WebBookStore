import React from 'react';
import cs from './../../body/content/Content.module.css';
import AddPainterStyle from './add-painter-style/AddPainterStyle';
import DeletePainterStyle from './delete-painter-style/DeletePainterStyle';
import UpdatePainterStyle from './update-painter-style/UpdatePainterStyle';


const PainterStyleForm = (props) => {
    console.log(props);
    
    return (

        <div className={cs.content}>
            <AddPainterStyle setPainterStyle={props.setPainterStyle} painterStyles={props.painterStyles} />
            <DeletePainterStyle deletePainterStyle={props.deletePainterStyle} painterStyles={props.painterStyles} />
            <UpdatePainterStyle updatePainterStyle={props.updatePainterStyle} painterStyles={props.painterStyles} />
        </div>
    );
}

export default PainterStyleForm;
