import React, { Component } from "react";
import {
  Route,
  Routes
} from "react-router-dom";

import Home from './Home/Home';
import Navigation from './Navigation/Navigation';
import ProjectArchive from './ProjectArchive/ProjectArchive';
import './App.css';

// -------------------------------------------------------------------------- //
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
          <Routes>
            <Route exact path="/" element={<Home />} />

            <Route path="/projectArch" element={<ProjectArchive />} />
          </Routes>
      </div>
    );
  }
}


/*
function AppThang() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
        <p>ooo react</p>
      </header>
    </div>
  );
}
*/
export default App;
