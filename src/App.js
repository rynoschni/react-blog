import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


import Home from './components/Home';
import Blog from './components/Blog';
import About from './components/About';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/about">About</Link>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="*">
            <h2>404 PAGE NOT FOUND!!</h2>
            <Link to="/">Return to Homepage</Link>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
