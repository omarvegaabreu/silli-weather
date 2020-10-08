import React from "react";

const date = new Date();
const month = date.getMonth();

const getSeason = (lat, month) => {
  if ((lat > 0 && month >= 8) || (lat > 0 && month <= 10)) {
    return "fall";
  } else if (lat > 0 && month >= 11) {
    return "winter";
  } else if ((lat > 0 && month >= 11) || (lat > 0 && month <= 1)) {
    return "winter";
  } else if ((lat > 0 && month >= 2) || (lat > 0 && month <= 4)) {
    return "spring";
  } else if ((lat > 0 && month >= 5) || (lat > 0 && month <= 7)) {
    return "Summer";
  } else {
    return "Unknown Month";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, month);
  console.log(season);
  return <div>{season}</div>;
};

export default SeasonDisplay;
