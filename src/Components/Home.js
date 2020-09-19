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
              <button onClick={this.handleProject} className="purple btn-main">
                Checkout my work
              </button>
            </Link>

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
    );
  }
}

export default Home;
