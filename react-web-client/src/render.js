import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { setPainterStyle, initializeData, deletePainterStyle, updatePainterStyle, setPainter, deletePainter, updatePainter } from './redux/state';

export let rerenderEntireTree = (state) => {
  let painterMethods = {
    setPainter,
    deletePainter,
    updatePainter
  }
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} setPainterStyle={setPainterStyle} deletePainterStyle={deletePainterStyle} updatePainterStyle={updatePainterStyle} painterMethods={painterMethods}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

initializeData();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
