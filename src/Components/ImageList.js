import React from "react";
import Image from "./ImageComponent";

class ImageList extends React.Component {
  render() {
    return (
      <div className="ui grid">
        <div className="three column row">
          {this.props.srcs.map((x) => (
            <div className="column">
              <Image src={x} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ImageList;
