import React, { Component } from "react";
import { Link } from "react-router-dom";

import SwiperContainer from "./SwiperContainer";

import proj from "../json/final.json";

class Projects extends Component {
  state = {
    projrcts: [],
  };

  render() {
    if (this.props.location.state) {
      return (
        <div className="prject-container">
          <div className="header">
            <div className="titler">
              <h1 className="title">Things that I've worked on</h1>
            </div>
            <div className="backbtn">
              <Link to="/">
                <a className="backicon black">
                  <i className="fa fa-arrow-circle-left" aria-hidden="true"></i>
                </a>
              </Link>
            </div>
          </div>
          <br></br>
          <br></br>
          <div className="slides">
            <SwiperContainer projects={this.props.location.state} />
          </div>
        </div>
      );
    } else {
      return (
        <div className="prject-container">
          <div className="header">
            <div className="titler">
              <h1 className="title">Things that I've worked on</h1>
            </div>
            <div className="backbtn">
              <Link to="/">
                <a className="backicon black">
                  <i
                    style={{ margin: "3vh" }}
                    className="fa fa-arrow-circle-left"
                    aria-hidden="true"
                  ></i>
                </a>
              </Link>
            </div>
          </div>
          <br></br>
          <br></br>
          <div className="slides">
            {console.log(proj)}
            <SwiperContainer projects={proj.projects} />
          </div>
        </div>
      );
    }
  }
}

export default Projects;
