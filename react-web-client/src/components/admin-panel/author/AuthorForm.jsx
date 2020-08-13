import React from 'react';
import cs from './../../body/content/Content.module.css';
import AddPainter from './add-painter/AddPainter';
import DeletePainter from './delete-painter/DeletePainter';
import UpdatePainter from './update-painter/UpdatePainter';


const AuthorForm = (props) => {
    return (

        <div className={cs.content}>
            {/* <AddPainter setPainter={props}/>
            <DeletePainter deletePainter={props}/>
            <UpdatePainter updatePainter={props}/> */}
        </div>
    );
}

export default AuthorForm;
