//basic code for a container

import React from "react";

function Container(props) {
  return (
    <div className={`container${props.fluid ? "-fluid" : ""}`} {...props} />
  );
}

export default Container;
