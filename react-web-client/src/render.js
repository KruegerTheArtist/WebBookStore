import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { getPainterStyle, deletePainterStyle, updatePainterStyle, setPainterStyle } from './redux/API/PainterStyles';
import { setPainter, deletePainter, updatePainter, getPainterByCount } from './redux/API/Painter';

import {
  addPublisher, getPublishersByCount, deletePublisher, updatePublisher,
  getCoverTypes, addCoverType, updateCoverType, deleteCoverType,
  addInterpreter, deleteInterpreter, updateInterpreter,
  addAuthor, updateAuthor, deleteAuthor,
  addBook, updateBook, deleteBook, initializeData
} from './redux/state';

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
    updateInterpreter
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
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} painterStyleMethods={painterStyleMethods} bookMethods={bookMethods} authorMethods={authorMethods} interpreterMethods={interpreterMethods} painterMethods={painterMethods} publisherMethods={publisherMethods} coverTypeMethods={coverTypeMethods} />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

initializeData();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
