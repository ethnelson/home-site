import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import './ProjectArchive.css';

// Projects Archive Page ---------------------------------------------------- //
class ProjectArchive extends Component {
    render() {
        return (
            <div className="project-archive" id="project-archive">
                <ProjectListItem name="Testing name" link="testing-link"/>
                
            </div>
        );
    }
}

class ProjectListItem extends Component {
    render() {
        return (
            <div className="project-list-item">
                <NavLink className="project-name" to={this.props.link}>
                    {this.props.name}
                </NavLink>
            </div>
        );
    }
}

/*
<p class="noProjectoMr">
                    dang, looks like I don't have any projects here rn
                </p>


*/
export default ProjectArchive;