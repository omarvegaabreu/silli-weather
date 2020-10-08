import React from "react";

const ErrorMessage = (props) => {
  console.log(props);
  return <div>{props.error}</div>;
};

export default ErrorMessage;
