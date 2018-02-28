import React, { Component } from "react";
import "./TodaysDate.css";

class TodaysDate extends React.Component {
  
  getDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    var monthInWord = month[today.getMonth()];

    function ordinal_suffix_of(i) {
      var j = i % 10,
        k = i % 100;
        if (j == 1 && k != 11) {
          return i + "st";
        }
        if (j == 2 && k != 12) {
          return i + "nd";
        }
        if (j == 3 && k != 13) {
          return i + "rd";
        }
        return i + "th";
    }

    if (dd < 10) {
      dd = "0" + dd;
    }

    if (mm < 10) {
      mm = "0" + mm;
    }

    today = ordinal_suffix_of(dd) + " " + monthInWord + " " + yyyy;

    return today;
  }
  
  render() {
    return <h1>{this.getDate()}</h1>;
  }
}

export default TodaysDate;
