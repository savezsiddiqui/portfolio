import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Education from './components/Education';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Experience from './components/Experience';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

const App = () =>
  <>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/education' component={Education} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/experience' component={Experience} />
        <Route exact path='/' component={Home} />
      </Switch>
    </BrowserRouter>
    <Footer />
  </>

export default App;
