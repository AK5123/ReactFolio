import React, { Component } from "react";

class Description extends Component {
  render() {
    return (
      <div className="desc">
        <p>{this.props.data}</p>
      </div>
    );
  }
}

export default Description;
