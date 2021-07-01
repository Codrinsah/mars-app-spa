import React from 'react';
import logo from './logo.svg';
import './App.css';
import {NasaCard} from "./NasaCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NasaCard
          title="Title" imgSrc="Image link goes here" paragraph1="Paragraph 1" paragraph2="Paragraph 2"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
