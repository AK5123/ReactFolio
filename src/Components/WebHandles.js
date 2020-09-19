import React from "react";

const style = {
  display: "flex",
  justifyContent: "center",
};

const WebHandles = ({ github, medium, hyperlinks }) => {
  console.log(hyperlinks);
  return (
    <React.Fragment>
      <div style={style}>
        <i className="fa fa-github fa-2x margin-sep"></i> &nbsp;
        <a className="margin-sep" href={github}>
          Source code
        </a>
      </div>

      {medium ? (
        <div style={style}>
          <i className="fa fa-medium fa-2x margin-sep"></i> &nbsp;
          <a className="margin-sep" href={github}>
            Read Article
          </a>
        </div>
      ) : null}

      {hyperlinks.map((x) => (
        <div style={style}>
          <i className="fa fa-globe fa-2x margin-sep"></i>&nbsp;
          <a href={x[0]} className="margin-sep">
            {x[1]}
          </a>
        </div>
      ))}
    </React.Fragment>
  );
};

export default WebHandles;
