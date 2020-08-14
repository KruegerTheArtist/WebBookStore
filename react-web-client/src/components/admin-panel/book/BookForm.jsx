import React from 'react';
import cs from './../../body/content/Content.module.css';
import AddBook from './add-book/AddBook';


const BookForm = (props) => {
    return (

        <div className={cs.content}>
            <AddBook addBook={props}/>
            {/* <DeleteAuthor deleteAuthor={props}/> */}
            {/* <UpdateAuthor updateAuthor={props}/> */}
        </div>
    );
}

export default BookForm;
