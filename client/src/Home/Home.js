import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";

import ProjectArchive from "../ProjectArchive/ProjectArchive";


import './Home.css';

// Home Page ---------------------------------------------------------------- //
class Home extends Component {
    render() {
      return (
        <div className="home-page">
          <HomeHeader />
          <ProjectArchive />
        </div>
      );
    }
  }
  
  class HomeHeader extends Component {
    render() {
      return (
        <div className="home-header">
          <Bio />
          <HomeNav />
        </div>
      )
    }
  }

  class Bio extends Component {
    render() {
      return (
        <div className="bio">
          <h1>My Name's Ethan</h1>
          <p>I make stuff</p>
        </div>
      );
    }
  }

  class HomeNav extends Component {
    render() {
      return (
        <div className="home-nav"> 
          <Link className="project-arch-link" smooth to="#project-archive">Projects</Link>
          <a className="code-link" href="https://github.com/ethnelson">Github</a>
        </div>
      )
    }
  }

export default Home;