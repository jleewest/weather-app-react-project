import React from "react";

export default function FormattedDate(props) {
  console.log(props.date);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let hour = props.date.getHours();
  let minute = props.date.getMinutes();
  let meridiem = "AM";
  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (hour > 12) {
    hour = hour - 12;
    meridiem = "PM";
  }

  if (minute < 10) {
    minute = `0${minute}`;
  }

  return (
    <h2>
      Data Received: {day} at {hour}:{minute} {meridiem}
    </h2>
  );
}
