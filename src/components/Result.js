import React from "react";
import "./result.css";

const Result = ({
  city,
  temp,
  desc,
  icon,
  windspeed,
  time,
  weathercode,
  setTemp,
}) => {
  const targetDate = time ? new Date(time + "Z") : new Date();

  const formattedDate = targetDate.toLocaleDateString("en-US", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const hours = targetDate.getHours();
  const minutes = targetDate.getMinutes().toString().padStart(2, "0");
  const timeString = `${hours.toString().padStart(2, "0")}:${minutes}`;

  const handleBack = () => {
    setTemp("");
  };

  return (
    <div className="result-screen">
      <button className="back-btn" onClick={handleBack}>
        <svg
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
        Back
      </button>

      <div className="city-name">
        {city ? city.toUpperCase() : "UNKNOWN"}
      </div>

      <div className="weather-main">
        <div className="weather-icon-large">{icon || "🌤️"}</div>

        <div className="temperature">
          <span className="temp-value">{temp ?? "--"}</span>
          <span className="temp-unit">°C</span>
        </div>

        <div className="weather-desc">{desc || "No data"}</div>

        <div className="weather-time">
          {formattedDate} · {timeString}
        </div>
      </div>

      <div className="divider"></div>

      <div className="weather-details">
        <div className="detail-card">
          <div className="detail-title">
            WIND<br />SPEED
          </div>
          <div className="detail-value">
            {windspeed ?? "--"}{" "}
            <span className="detail-unit">km/h</span>
          </div>
        </div>

        <div className="detail-card">
          <div className="detail-title">
            WEATHER<br />CODE
          </div>
          <div className="detail-value">
            {weathercode ?? "--"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;