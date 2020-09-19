import Home from "./Home";
import Memoji from "./Memoji";
import React, { Component } from "react";

import jfile from "../json/final.json";

class LandingPage extends Component {
  render() {
    return (
      <div className="blackbg ">
        <div className="container">
          <Home json={jfile} />
          <Memoji src={jfile.memoji} />
        </div>
      </div>
    );
  }
}

export default LandingPage;
