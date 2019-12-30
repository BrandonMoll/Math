import React from 'react';
import {Link, Route} from 'react-router-dom';

import Card from './components/Card';
import Menu from './components/Menu'
import Header from './components/Header'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
    </div>
  );
}

export default App;
