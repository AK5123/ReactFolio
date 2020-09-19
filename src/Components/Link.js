import React, { Component } from "react";

const icon = (name, link, img) => {
  return (
    <a className="icon" name={name} href={link}>
      <i className={"fa fa-" + img} aria-hidden="true"></i>
    </a>
  );
};

class Links extends Component {
  render() {
    return (
      <div className="links">
        {icon("git", this.props.github, "github-square")}
        {icon("linkedin", this.props.linkedin, "linkedin-square")}
        {icon("medium", this.props.medium, "medium")}
        {icon("mail", "mailto:" + this.props.mail, "envelope")}
      </div>
    );
  }
}

export default Links;
