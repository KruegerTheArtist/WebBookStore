import React from 'react';
import AddAuthor from './add-author/AddAuthor';
import UpdateAuthor from './update-author/UpdateAuthor';
import DeleteAuthor from './delete-author/DeleteAuthor';
import './AuthorForm.css';


const AuthorForm = (props) => {
    return (
        <div className="author-form">
            <span className="title">Автор:</span>
            <div className="author-form-content">
                <AddAuthor className="add-panel" addAuthor={props} />
                <DeleteAuthor className="delete-panel" deleteAuthor={props} />
                <UpdateAuthor className="update-panel" updateAuthor={props} />
            </div>
        </div>

    );
}

export default AuthorForm;
