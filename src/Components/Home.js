import React, { Component } from "react";
import { Link } from "react-router-dom";

import Typo from "../Components/Typo.js";
import Description from "../Components/Description";
import Modalbutton from "../Components/Modalbutton";
import Links from "../Components/Link";
import Experience from "./Experience";

import "../css/modal.css";

class Home extends Component {
  state = {
    selectedProj: {
      title: "",
      description: "",
      videoUrl: "",
      skills: "",
      github: "",
      medium: "",
      hyperlinks: [],
    },
  };

  onProjectSelected = (proj) => {};

  handleProject = () => {
    console.log("here");
    return <React.Fragment></React.Fragment>;
  };

  render() {
    console.log(this.props.json.projects, "dbvmb");
    return (
      <div>
        <div id="containerMain" className="content">
          <div className="stuff">
            <Typo name={this.props.json.name} />
            <div className="btns">
              <Link
                to={{
                  pathname: "/Projects",
                  state: this.props.json.projects,
                }}
              >
                <button
                  onClick={this.handleProject}
                  className="purple btn-main"
                >
                  Checkout my work
                </button>
              </Link>
              <div className="resume">
                <a href={this.props.json.resume} download>
                  <i class="fa fa-file" aria-hidden="true"></i>
                  <p>Resume / CV</p>
                </a>
              </div>

              <Modalbutton>
                <Experience
                  exp={{
                    list: this.props.json.skills,
                    details: this.props.json.experience,
                  }}
                />
              </Modalbutton>
            </div>
            <Description />

            <Links
              github={this.props.json.github}
              linkedin={this.props.json.linkedin}
              medium={this.props.json.medium}
              mail={this.props.json.mail}
            />
          </div>
        </div>
        <a href={this.props.json.resume}>
          <div className="resume-phone">
            <i class="fa fa-file" style={{ color: "white" }} aria-hidden="true">
              &nbsp;&nbsp;&nbsp;<span style={{}}>Resume / CV</span>
            </i>
          </div>
        </a>
      </div>
    );
  }
}

export default Home;
