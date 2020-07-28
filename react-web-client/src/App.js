import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/head/Header';
import Navbar from './components/body/navbar/Navbar';
import Content from './components/body/content/Content';
import { BrowserRouter } from 'react-router-dom';

const Test = () => {
  return (
    <div className="app-wrapper">
      <BrowserRouter>
        <Header />
        <Navbar />
        <Content />
      </BrowserRouter>
    </div>
  );
}

export default Test;
