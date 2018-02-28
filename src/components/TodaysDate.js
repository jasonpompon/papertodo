import React, { Component } from "react";
import "./TodaysDate.css";

class TodaysDate extends React.Component {
  
   getDate() {

    var today = new Date();
    var dd = today.getDate();
    var yyyy = today.getFullYear();
    var day = today.getDay() + 1;

    var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var monthInWord = month[today.getMonth()];

    var days = ["Mon", "Tues", "Wed", "Thu", "Fri", "Sat", "Sun"];
    var dayInWord = days[today.getDay() - 1];
    
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


    today = dayInWord + " " + ordinal_suffix_of(dd) + " " + monthInWord + " " + yyyy;

    return today;
  };

  render() {
    return <h1>{this.getDate()}</h1>;
  }
}

export default TodaysDate;
