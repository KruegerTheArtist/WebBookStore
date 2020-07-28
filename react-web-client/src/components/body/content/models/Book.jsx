import React from 'react';
import "./Book.css"

const Book = (props) => {

  return (
    <div className="book">
      <h3 className="book-title">{props.title}</h3>
      <img src={props.url} style={{ marginLeft: 30 + 'px' }} height="200px" width="150px" />
      <span className="author">Author: {props.author}</span><br></br>
      <span className="price">Price: {props.price}</span>
    </div>
  );
}
export default Book;
