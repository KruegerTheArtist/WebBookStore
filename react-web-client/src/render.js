import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { setPainterStyle, initializeData, deletePainterStyle, updatePainterStyle, 
  setPainter, deletePainter, updatePainter, 
  getPainterByCount, addPublisher, getPublishersByCount, deletePublisher, updatePublisher, 
  getCoverTypes, addCoverType, updateCoverType, deleteCoverType, 
  addInterpreter, deleteInterpreter, updateInterpreter,
  addAuthor, updateAuthor, deleteAuthor,
  addBook } from './redux/state';

export let rerenderEntireTree = (state) => {
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
    addBook
  }
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} setPainterStyle={setPainterStyle} deletePainterStyle={deletePainterStyle} updatePainterStyle={updatePainterStyle} bookMethods={bookMethods} authorMethods={authorMethods} interpreterMethods={interpreterMethods} painterMethods={painterMethods} publisherMethods={publisherMethods} coverTypeMethods={coverTypeMethods} />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

initializeData();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
