import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import homeIconDark from './home-icon-dark.svg';
import projectArchDark from './project-archive-dark.svg';
import codeLinkDark from './code-link-dark.svg';
import colorSwitchDark from './color-switch-dark.svg';
import coffeeDark from './coffee-dark.png';

import './Navigation.css';

// Navigation Components ---------------------------------------------------- //
class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
        <HomeButton />
        <ProjectArchive />
        <CodeLink />
        <ColorSwitch />
        <Coffee />
      </div>
    );
  }
}

class HomeButton extends Component {
  render() {
    return (
//      <button className="home-button">
        <NavLink className="home-button" to="/">
          <img src={homeIconDark} className="home-icon-dark" alt="home" />
        </NavLink>
//      </button>
    );
  }
}

class ProjectArchive extends Component {
  render() {
    return (
      <NavLink className="project-arch" to="/projectArch">
        <img src={projectArchDark} className="project-arch-dark" alt="projects" />
      </NavLink>
    );
  }
}

class CodeLink extends Component {
  render() {
    return (
      <a className="code-link" href="https://github.com/ethnelson">
        <img src={codeLinkDark} className="code-link-dark" alt="code" />
      </a>
    );
  }
}

class ColorSwitch extends Component {
  render() {
    return (
      <a className="color-switch">
        <img src={colorSwitchDark} className="color-switch-dark" alt="color mode" />
      </a>
    );
  }
}

class Coffee extends Component {
  render() {
    return (
      <a className="coffee" href="https://ko-fi.com/ethannelson13704">
          <img src={coffeeDark} className="coffee-dark" alt="coffee" />
      </a>
    );
  }
}

export default Navigation;