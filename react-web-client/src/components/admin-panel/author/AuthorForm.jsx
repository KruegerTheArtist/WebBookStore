import React from 'react';
import cs from './../../body/content/Content.module.css';
import AddAuthor from './add-author/AddAuthor';


const AuthorForm = (props) => {
    return (

        <div className={cs.content}>
            <AddAuthor addAuthor={props}/>
            {/* <DeletePainter deletePainter={props}/> */}
            {/* <UpdatePainter updatePainter={props}/> */}
        </div>
    );
}

export default AuthorForm;
