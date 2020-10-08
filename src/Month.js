import React from "react";

const date = new Date();
const monthNumeral = date.getMonth();

const SeasonDisplay = (props) => {
  let month;
  switch (monthNumeral) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "February";
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December";
      break;

    default:
      month = "Unknown month";
  }
  console.log(month);
  return <div>{props.lat}</div>;
};

export default SeasonDisplay;
