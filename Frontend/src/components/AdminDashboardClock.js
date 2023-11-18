import "./adminDashboardClock.css";
import React, { useState, useEffect } from "react";

function AdminDashboardClock() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatDateTimeParts = () => {
    const options = {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    };
    const dateString = dateTime.toLocaleDateString(undefined, options);
    const [dayOfWeekPart, monthPart, dayPart, yearPart] =
      dateString.split("  ");
    const [timePart, ampmPart] = dateTime.toLocaleTimeString().split(" ");
    const [hoursPart, minutesPart, secondsPart] = timePart.split(":");
    return {
      dayOfWeekPart,
      monthPart,
      dayPart,
      yearPart,
      hoursPart,
      minutesPart,
      secondsPart,
      ampmPart,
    };
  };

  const dateTimeParts = formatDateTimeParts();

  return (
    <>
      <div className="container date-time-container">
        <div className="date-time">
          <div className="date">
            <span className="day-of-week">{dateTimeParts.dayOfWeekPart}</span>
            <span className="month">{dateTimeParts.monthPart}</span>
            <span className="day">{dateTimeParts.dayPart}</span>
            <span className="year">{dateTimeParts.yearPart}</span>
          </div>
          <div className="clock">
            <span className="hour">{dateTimeParts.hoursPart}</span>:
            <span className="minute">{dateTimeParts.minutesPart}</span>:
            <span className="second">{dateTimeParts.secondsPart}</span>{" "}
            <span className="ampm">{dateTimeParts.ampmPart}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDashboardClock;
