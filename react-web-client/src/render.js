import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { getPainterStyle, deletePainterStyle, updatePainterStyle, setPainterStyle } from './redux/API/PainterStyles';
import { setPainter, deletePainter, updatePainter, getPainterByCount } from './redux/API/Painter';
import { addPublisher, getPublishersByCount, deletePublisher, updatePublisher } from './redux/API/Publisher';
import { getCoverTypes, addCoverType, updateCoverType, deleteCoverType } from './redux/API/CoverTypes';
import { addInterpreter, deleteInterpreter, updateInterpreter, getInterpretersByCount } from './redux/API/Interpreter';
import { addAuthor, updateAuthor, deleteAuthor } from './redux/API/Author';
import { addBook, updateBook, deleteBook } from './redux/API/Book';
import { login, register, getToken } from './redux/API/Auth';

import { initializeData } from './redux/state';
import Login from './authorization/Login';
import AuthForm from './authorization/AuthForm';
import { BrowserRouter } from 'react-router-dom';

export let rerenderEntireTree = (state) => {
  let painterStyleMethods = {
    setPainterStyle,
    deletePainterStyle,
    updatePainterStyle,
    getPainterStyle
  }

  let painterMethods = {
    setPainter,
    deletePainter,
    updatePainter,
    getPainterByCount
  }

  let publisherMethods = {
    addPublisher,
    getPublishersByCount,
    deletePublisher,
    updatePublisher
  }

  let coverTypeMethods = {
    getCoverTypes,
    addCoverType,
    updateCoverType,
    deleteCoverType
  }

  let interpreterMethods = {
    addInterpreter,
    deleteInterpreter,
    updateInterpreter,
    getInterpretersByCount
  }

  let authorMethods = {
    addAuthor,
    updateAuthor,
    deleteAuthor
  }

  let bookMethods = {
    addBook,
    updateBook,
    deleteBook
  }

  let authMethods = {
    login,
    register,
    getToken
  }

  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <AuthForm authMethods={authMethods} path='/login' />
        {/* <App state={state} painterStyleMethods={painterStyleMethods} bookMethods={bookMethods} authorMethods={authorMethods} interpreterMethods={interpreterMethods} painterMethods={painterMethods} publisherMethods={publisherMethods} coverTypeMethods={coverTypeMethods} /> */}
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

initializeData();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
