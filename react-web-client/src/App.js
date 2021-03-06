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
        <Content content={props.state.contentPage} bookMethods={props.bookMethods} authorMethods={props.authorMethods} interpreterMethods={props.interpreterMethods} painterMethods={props.painterMethods} publisherMethods={props.publisherMethods} coverTypeMethods={props.coverTypeMethods} painterStyleMethods={props.painterStyleMethods}/>
      </BrowserRouter>
    </div>
  );
}

export default Test;
