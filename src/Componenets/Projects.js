import { tab } from "@testing-library/user-event/dist/tab";
import React from "react";
import './ComponentStyles.css';

function Project() {

    return (
        <div id="project" className="text-light font project">
            <div className="project-container">
                <h2>Projects</h2>
                <div className="tabs w-tabs">
                    <div className="projecttab-menu w-tab-menu">
                        <a className="tab-link w-tab-link tab-link-current" role='tab'><div className="tab-link-text">All Projects</div></a>
                        <a className="tab-link w-tab-link" role='tab'><div className="tab-link-text">Full-Stack app</div></a>
                        <a className="tab-link w-tab-link" role='tab'><div className="tab-link-text">Desktop app</div></a>
                        <a className="tab-link w-tab-link" role='tab'><div className="tab-link-text">Website</div></a>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Project;