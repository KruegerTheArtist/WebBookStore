import React from 'react';
import './App.css';
import Header from './components/head/Header';
import Navbar from './components/body/navbar/Navbar';
import Content from './components/body/content/Content';
import { BrowserRouter } from 'react-router-dom';

const Test = (props) => {
  return (
    <div className="app-wrapper">
      <BrowserRouter>
        <Header />
        <Navbar />
        <Content content={props.state.contentPage} setPainterStyle={props.setPainterStyle} deletePainterStyle={props.deletePainterStyle} updatePainterStyle={props.updatePainterStyle}/>
      </BrowserRouter>
    </div>
  );
}

export default Test;
