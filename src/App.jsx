import React from 'react';
import logo from './logo.svg';
import './App.css';
import GlobalStyle from './config/style/GlobalStyle';
import BottomNavBar from './tools/BottomNavBar/index';

export default function App() {
  return (
    <div className="App">
      <div>
        <GlobalStyle />
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BottomNavBar />
    </div>
  );
}
