import React, { Component } from "react";

import logo from '../logo.svg';

// Projects Archive Page ---------------------------------------------------- //
class ProjectArchive extends Component {
    render() {
        return (
            <ProjectSnippet
                projectIcon={logo}
                name="game Game"
                description="Something something something description of this
                    super cool game thing"/>
        );
    }
}

class ProjectSnippet extends Component {
    render() {
        return (
            <div className="project-snippet">
                <img src={this.props.projectIcon} className="project-icon" alt="project" />
                <span className="project-details">
                    <p className="project-name">{this.props.name}</p>
                    <p className="project-desc">{this.props.description}</p>
                </span>
            </div>
        );
    }
}

export default ProjectArchive;