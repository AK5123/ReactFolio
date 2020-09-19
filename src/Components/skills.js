import React from "react";
import skill from "../json/names.json";
import "../css/colors.css";

class Skills extends React.Component {
  state = {
    actlist: [],
  };
  componentDidMount() {
    let actlist = this.props.list.map((name) => {
      let result = window.stringSimilarity.findBestMatch(name, skill.list);
      return result.bestMatch.target;
    });
    this.setState({ actlist });
  }

  renderList = () => {
    return this.state.actlist.map((title) => {
      return (
        <div key={title}>
          <img
            src={`./images/svg/${title}`}
            alt={title}
            style={{ verticalAlign: "top", margin: "6px 4px" }}
          />
        </div>
      );
    });
  };

  render() {
    return <div className="flexit">{this.renderList()}</div>;
  }
}
export default Skills;

const styles = {
  row: {
    display: "table",
    clear: "both",
    content: "",
    width: "100%",
  },
  column: {
    width: "100%",
    float: "left",
    padding: "5px",
  },
};
