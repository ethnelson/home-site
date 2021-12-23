import React, { Component } from "react";
import logo from '../logo.svg';

import './Home.css';

// Home Page ---------------------------------------------------------------- //
class Home extends Component {
    render() {
      return (
        <div className="home-page">
          <Bio
            avatar={logo}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                          sed do eiusmod tempor incididunt ut labore et dolore 
                          magna aliqua."
          />
        </div>
      );
    }
  }
  
  class Bio extends Component {
    render() {
      return (
        <div className="bio">
          <img src={logo} className="avatar-icon" alt="avatar" />
          <p className="bio-desc">{this.props.description}</p>
        </div>
      );
    }
  }

export default Home;