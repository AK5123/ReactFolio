import React, { Component } from "react";
import { Link } from "react-router-dom";

import VideoElement from "./VideoElement";
import Skills from "./skills.js";
import WebHandles from "./WebHandles";

class ProjectDescription extends Component {
  render() {
    const project = this.props.location.state;
    return (
      // <React.Fragment>
      <div>
        <div className="projname">
          <h1 className="title">
            <p style={{ marginTop: "3vh", marginBottom: "4vh" }}>
              {project.projectName}
            </p>
          </h1>
        </div>
        <div className="proj-desc-container">
          <div className="backbtn">
            <Link
              to={{
                pathname: "/Projects",
              }}
            >
              <a className="backicon">
                <i className="fa fa-arrow-circle-left" aria-hidden="true"></i>
              </a>
            </Link>
          </div>
          <div className="projdesc">
            <h2 className="subtitle">What it does</h2>
            <p>{project.projectDesc}</p>
          </div>
          <div className="video">
            <VideoElement src={project.videoUrl} controls={true} />
          </div>
          <div className="stack">
            <h2 className="subtitle">Tech Stack</h2>
            <Skills list={project.techStack} />
          </div>
          <div className="handles">
            <WebHandles
              github={project.github}
              medium={project.medium || ""}
              hyperlinks={project.hyperlinks || []}
            />
          </div>
        </div>
        </div>
      // </React.Fragment>
    );
  }
}

export default ProjectDescription;
