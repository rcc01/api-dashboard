import "../App.css";
import React, { useEffect, useState } from "react";

interface DailyWeatherForecast {
  id: number;
  temperature: number;
  weatherDescription: string;
  day: string;
  icon: number;
}

const WeatherApp = () => {
  const [weatherForecast, setWeatherForecast] =
    useState<DailyWeatherForecast | null>(null);

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const options = {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "3ace987a02msh8849bb088ed91b1p150168jsn51cecf385982",
            "X-RapidAPI-Host": "ai-weather-by-meteosource.p.rapidapi.com",
          },
        };
        const response = await fetch(
          "https://ai-weather-by-meteosource.p.rapidapi.com/daily?place_id=madrid&language=es&units=metric",
          options
        );

        const data = await response.json();
        const dataArr = data.daily.data;
        // console.log(dataArr);

        for (let i = 0; i < dataArr.length; i++) {
          // should I assign the console.logs below to a variable const?
          // console.log(
          //   dataArr[i].temperature,
          //   dataArr[i].summary,
          //   dataArr[i].day,
          //   dataArr[i].icon
          // );
          setWeatherForecast({
            id: dataArr[i],
            day: dataArr[i].day,
            temperature: dataArr[i].temperature,
            weatherDescription: dataArr[i].summary,
            icon: dataArr[i].icon,
          });
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };
    fetchForecast();
  }, []);

  return (
    <div id="weather-section" className="menu-section">
      <div className="menu-section-title">
        <i>🌞</i>
        <span className="menu-section-title-text">
          What's the weather like?
        </span>
      </div>
      <div className="scrollable-component menu-section-content">
        {/* 7 day cards */}
        {weatherForecast ? (
          <div key={weatherForecast.id} className="day-card">
            <div className="day-card-content">
              <span className="day-weather-temperature">
                {weatherForecast.temperature}
              </span>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
        <div className="day-card"></div>
      </div>
    </div>
  );
};

export default WeatherApp;
