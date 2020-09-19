import React, { Component } from "react";

import AnimatedText from "react-animated-typing/dist";

class Typo extends Component {
  state = { size: null };

  respondWindowSize = () => {
    let width = window.innerWidth;
    if (width > 992) {
      this.setState({ size: "45px" });
    }
    if (width < 992 && width > 768) {
      this.setState({ size: "40px" });
    }
    if (width < 768) {
      this.setState({ size: "28px" });
    }
    if (width < 400) {
      this.setState({ size: "24px" });
    }
  };

  componentDidMount() {
    window.addEventListener("resize", this.respondWindowSize);
    this.respondWindowSize();
  }

  render() {
    const name = this.props.name;
    return (
      <div className="typo">
        <div className="hero-title">
          <AnimatedText
            text="Hi, I'm"
            textStyle={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 800,
              fontSize: this.state.size,
              color: "white",
            }}
            style={{
              fontSize: this.state.size,
            }}
            delay="1200"
          />
          <AnimatedText
            text={name}
            textStyle={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 800,
              color: "rgba(87,78,255,1)",
              fontSize: this.state.size,
            }}
            style={{
              marginLeft: "10px",
              fontSize: this.state.size,
            }}
            delay="2100"
          />
        </div>
      </div>
    );
  }
}

export default Typo;
