import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <div className="App">
      <Link to="/">Início</Link>
      <br />
      <Link to="/about">Sobre</Link>
      <br />
      <Link to="/projects">Projetos</Link>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route component={NotFound} />
        </Switch>
    </div>
  );
}

export default App;
