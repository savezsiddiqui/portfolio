import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App-dark.css';

const App = () =>
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path='/home' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/projects' component={Projects} />
      <Route exact path='/experience' component={Experience} />
      <Route exact path='/' component={Home} />
    </Switch>
  </BrowserRouter>

export default App;
