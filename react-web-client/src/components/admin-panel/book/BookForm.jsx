import React from 'react';
import cs from './../../body/content/Content.module.css';
import AddBook from './add-book/AddBook';
import UpdateBook from './update-book/UpdateBook';
import DeleteBook from './delete-book/DeleteBook';


const BookForm = (props) => {
    return (

        <div className={cs.content}>
            <AddBook addBook={props}/>
            <DeleteBook deleteBook={props}/>
            <UpdateBook updateBook={props}/>
        </div>
    );
}

export default BookForm;
