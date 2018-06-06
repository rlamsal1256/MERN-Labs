import React, { Component } from "react";
import "./App.css";
import Home from "./Home";
import About from "./About";
import { BrowserRouter, Route, Redirect, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h3>React Router App</h3>
          <nav>
            <Link to="/home">Home</Link>&nbsp;
            <Link to="/about">About</Link>
            <br />
          </nav>
          <Redirect from="/" to="/home" />
          <Route exact path="/home" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
