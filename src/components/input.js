import React from "react";
import "./Input.css";

const input = ({ input, setInput, setCity, findWeather }) => {
  const handleChange = (event) => {
    setInput(event.target.value);
    setCity(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    findWeather();
  };

  const handleRecentClick = (city) => {
    setInput(city);
    setCity(city);
    findWeather(city);
  };

  return (
    <div className="search-screen">
      <div className="search-header">
        <h1>What's the<br/>weather<br/>like today?</h1>
        <p>Enter a city name to get<br/>live weather updates.</p>
      </div>

      <form className="search-form" onSubmit={handleClick}>
        <input
          type="text"
          placeholder="e.g. Chennai, Mumbai"
          onChange={handleChange}
          value={input}
          className="search-input"
        />
        <button type="submit" className="search-btn">
          Check weather
        </button>
      </form>

      <div className="recent-searches">
        <span className="recent-title">RECENT</span>
        <div className="recent-tags">
          <button type="button" className="recent-tag" onClick={() => handleRecentClick("Chennai")}>Chennai</button>
          <button type="button" className="recent-tag" onClick={() => handleRecentClick("Mumbai")}>Mumbai</button>
          <button type="button" className="recent-tag" onClick={() => handleRecentClick("Delhi")}>Delhi</button>
        </div>
      </div>
    </div>
  );
};

export default input;
