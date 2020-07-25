import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';

const initialState = () => {
  const savedMode = JSON.parse(localStorage.getItem('darkMode'));
  return savedMode || false;
};

const App = () => {

  const [darkMode, set] = useState(initialState());

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <HashRouter>
        <Header darkMode={darkMode} set={set} />
        <Switch>
          <Route exact path='/home' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/experience' component={Experience} />
          <Route exact path='/' component={Home} />
        </Switch>
      </HashRouter>
    </div>
  )
}


export default App;
