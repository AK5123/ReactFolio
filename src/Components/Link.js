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
        {this.props.linkedin
          ? icon("linkedin", this.props.linkedin, "linkedin-square")
          : null}
        {this.props.medium ? icon("medium", this.props.medium, "medium") : null}
        {icon("mail", "mailto:" + this.props.mail, "envelope")}
      </div>
    );
  }
}

export default Links;
