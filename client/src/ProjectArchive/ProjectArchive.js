import React, { Component } from "react";

import './ProjectArchive.css';
import logo from '../logo.svg';

// Projects Archive Page ---------------------------------------------------- //
class ProjectArchive extends Component {
    render() {
        return (
            <div className="project-archive">
                <ProjectSnippet
                    projectIcon={logo}
                    name="HDIGH"
                    description="How did I get here?"/>
                <ProjectSnippet
                    projectIcon={logo}
                    name="Weird Tool"
                    description="Ever wonder what a weird tool looks like?"/>
                <ProjectSnippet
                    projectIcon={logo}
                    name="Game 2"
                    description="OOooo a game, what a mystery."/>
                <ProjectSnippet
                    projectIcon={logo}
                    name="Sound generator"
                    description="This makes some weird sounds, or whatever you
                    want really."/>
            </div>
        );
    }
}

class ProjectSnippet extends Component {
    render() {
        return (
            <div className="project-snippet">
                <img src={this.props.projectIcon} className="project-icon" alt="project" />
                <span className="project-details">
                    <h3 className="project-name">{this.props.name}</h3>
                    <p className="project-desc">{this.props.description}</p>
                </span>
            </div>
        );
    }
}

export default ProjectArchive;