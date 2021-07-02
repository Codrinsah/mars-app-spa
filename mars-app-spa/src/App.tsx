import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {NasaCard} from "./NasaCard";
import {Component1} from "./complex_tree_components/Component1";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {NasaPhotos} from "./NasaPhotos";

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
        <Router>
          <Switch>
            <Route path = "/nasacard">
              <NasaCard title="Title" imgSrc="Image link goes here" paragraph1="Paragraph 1" paragraph2="Paragraph 2"/>
            </Route>
            <Route path = "/nestedstate">
              <Context.Provider value = {{clickCount, setClickCount}}>
                <Component1 />
              </Context.Provider>
            </Route>
            <Route path = "/nasaphotos">
              <NasaPhotos/>
            </Route>
          </Switch>
        </Router>
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
