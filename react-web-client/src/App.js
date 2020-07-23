import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/head/Header';
import Navbar from './components/body/navbar/Navbar';
import Content from './components/body/content/Content';

const Test = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Content />
    </div>
  );
}

export default Test;
