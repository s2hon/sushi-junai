import React from "react";

function Col(props) {
  return <div className={`col-${props.size}-${props.number}`}>{props.children}</div>;
}

export default Col;