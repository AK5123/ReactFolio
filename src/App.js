import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import LandingPage from "./Components/LandingPage";
import ProjectDescription from "./Components/ProjectDescription";
import Projects from "./Components/Projects";

import "./css/fade.css";
import "./css/App.css";

class App extends Component {
  render() {
    return (
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} timeout={450} classNames="fade">
              <Switch location={location}>
                <Route exact path="/" component={LandingPage} />
                <Route path="/Projects" component={Projects} />
                <Route
                  path="/ProjectDescription"
                  component={ProjectDescription}
                />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    );
  }
}

export default App;
