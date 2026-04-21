import React, { useState } from "react";
import "./App.css";
import Input from "./components/input";
import axios from "axios";
import Result from "./components/Result";

function App() {
  const [input, setInput] = useState("");
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState("");
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState("");
  const [windspeed, setWindspeed] = useState("");
  const [weatherTime, setWeatherTime] = useState("");
  const [weathercode, setWeathercode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const findWeather = async (searchCity) => {
    const targetCity = searchCity || input;
    if (targetCity === "") {
      alert("The city name can't be empty!");
      return;
    }
    setIsLoading(true);
    try {
      const url = "https://weather-app-a5xx.onrender.com/weather?location=" + targetCity;
      const response = await axios.get(url);

      const temp = response.data.temperature;
      const description = response.data.weatherDescription;
      const icon = response.data.weatherIcon;
      const windspeed = response.data.windspeed;
      const time = response.data.time;
      const code = response.data.weathercode;

      setTemp(temp);
      setDescription(description);
      setIcon(icon);
      setWindspeed(windspeed);
      setWeatherTime(time);
      setWeathercode(code);
      setInput("");

    } catch (error) {
      console.log("API Error:", error.response?.data || error.message);
      if (error.response && error.response.status === 500) {
        alert("Enter a valid city name");
      } else {
        alert("Failed to fetch weather. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app">
      {isLoading ? (
        <div className="loader-container">
          <div className="spinner"></div>
          <div className="loader-text">Fetching weather...</div>
        </div>
      ) : temp === "" ? (
        <Input
          setInput={setInput}
          setCity={setCity}
          findWeather={findWeather}
        />
      ) : (
        <Result
          city={city}
          input={input}
          temp={temp}
          desc={description}
          icon={icon}
          windspeed={windspeed}
          time={weatherTime}
          weathercode={weathercode}
          setTemp={setTemp}
        />
      )}
    </div>
  );
}

export default App;
