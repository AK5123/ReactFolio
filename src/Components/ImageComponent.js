import React from "react";

class Image extends React.Component {
  render() {
    return <img className="ui image" alt="unsplash" src={this.props.src}></img>;
  }
}

export default Image;
