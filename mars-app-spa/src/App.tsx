import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {NasaCard} from "./NasaCard";
import {ClickCounter} from "./ClickCounter";
import {Component2} from "./complex_tree_components/Component2";
import {Component3} from "./complex_tree_components/Component3";
import {Component1} from "./complex_tree_components/Component1";
import {Component4} from "./complex_tree_components/Component4";

interface ClickContext {
  clickCount: number,
  setClickCount: (clickCount: number) => void
}

export const Context = React.createContext<ClickContext>({
  clickCount: 0,
  setClickCount: () => {}
});

function App() {
  const [clickCount, setClickCount] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NasaCard title="Title" imgSrc="Image link goes here" paragraph1="Paragraph 1" paragraph2="Paragraph 2"/>
        <Context.Provider value = {{clickCount, setClickCount}}>
          <Component1 />
        </Context.Provider>
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
