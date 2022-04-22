import React, { Component } from "react";
import {
  Route,
  Routes
} from "react-router-dom";

import Home from './Home/Home';
import './App.css';

// -------------------------------------------------------------------------- //
class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/testing-link" element={<TestComp />} />
        </Routes>
      </div>
    );
  }
}

class TestComp extends Component {
  render() {
    return(
      <div data-testid="projectTestPage">
        <p>Testing page</p>
      </div>
    )
  }
}

export default App;
