import React from 'react';
import AddBook from './add-book/AddBook';
import UpdateBook from './update-book/UpdateBook';
import DeleteBook from './delete-book/DeleteBook';
import './BookForm.css';


const BookForm = (props) => {
    return (
        <div className="book-form">
            <span className="title">Книга:</span>
            <div className="book-form-content">
                <AddBook className="add-panel" addBook={props} />
                <DeleteBook className="delete-panel" deleteBook={props} />
                <UpdateBook className="update-panel" updateBook={props} />
            </div>
        </div>

    );
}

export default BookForm;
