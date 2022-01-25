import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import './ProjectArchive.css';

// Projects Archive Page ---------------------------------------------------- //
let projectItems = {
    test_project: {displayName: "Testing Name", link:"testing-link"},
    test_3: {displayName: "Second Test", link:"testing-link"},
    test_4: {displayName: "Second Test", link:"testing-link"},
    test_5: {displayName: "Second Test", link:"testing-link"},
    test_6: {displayName: "Second Test", link:"testing-link"},
    test_7: {displayName: "Second Test", link:"testing-link"},
    test_8: {displayName: "Second Test", link:"testing-link"},
    test_9: {displayName: "Second Test", link:"testing-link"}
}

class ProjectArchive extends Component {
    render() {
        return (
            <div className="project-archive" id="project-archive">
                <ProjectList projects={projectItems} />
            </div>
        );
    }
}

class ProjectList extends Component {
    constructor(props) {
        super(props);
        this.projects = props.projects;
    }

    render() {
        if (this.projects) {
            return (
                <div className="project-list">
                {
                    Object.entries(this.projects)
                    .map( ([key, value]) => 
                        <div className="project-list-item" key={key} >
                            <NavLink className="project-name" to={value.link}>
                                {value.displayName}
                            </NavLink>
                        </div>
                    )
                }
                </div>
            );
        } else {
            return (
                <div className="project-list">
                    <p className="noProjectoMr">
                        Dang, looks like I don't have any projects here rn
                    </p> 
                </div>
            )
        }
    }
        
}

/*
<p class="noProjectoMr">
                    dang, looks like I don't have any projects here rn
                </p>


*/
export default ProjectArchive;