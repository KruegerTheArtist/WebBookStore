import React from 'react';
import cs from './../../body/content/Content.module.css';
import AddAuthor from './add-author/AddAuthor';
import UpdateAuthor from './update-author/UpdateAuthor';


const AuthorForm = (props) => {
    return (

        <div className={cs.content}>
            <AddAuthor addAuthor={props}/>
            {/* <DeletePainter deletePainter={props}/> */}
            <UpdateAuthor updateAuthor={props}/>
        </div>
    );
}

export default AuthorForm;
