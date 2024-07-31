// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import './index.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
