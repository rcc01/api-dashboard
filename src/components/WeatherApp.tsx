import "../App.css";
import React, { useEffect, useState } from "react";
import { FaSun, FaCloudSun, FaCloud } from "react-icons/fa";
import { BsFillCloudsFill, BsFillCloudRainFill } from "react-icons/bs";
import { BsCloudHaze2Fill } from "react-icons/bs";
import { FaRegSun } from "react-icons/fa";

interface DailyWeatherForecast {
  temperature: number;
  summary: string;
  day: string;
  weather: string;
  // children?: React.ReactNode;
}

const WeatherApp: React.FC = () => {
  const [weatherForecast, setWeatherForecast] = useState<
    DailyWeatherForecast[] | null
  >(null);

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
        // PENDING: change the API to accept longitud and latitude to get any location and show the weather. Atm, it's only for Madrid
        const response = await fetch(
          "https://ai-weather-by-meteosource.p.rapidapi.com/daily?place_id=madrid&language=es&units=metric",
          options
        );

        const data = await response.json();
        const dataArr = data.daily.data;

        setWeatherForecast(dataArr.slice(0, 10));
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchForecast();
  }, []);

  const reverseDate = (americanDate: string) => {
    // destructuring:
    // const splitDate = americanDate.split("-");
    // const year = splitDate[0];
    // const month = splitDate[1];
    // const day = splitDate[2];
    const [year, month, day] = americanDate.split("-");
    const europeanDate = `${day}-${month}-${year}`;
    return europeanDate;
  };

  return (
    <div id="weather-section" className="menu-section">
      <div className="menu-section-title">
        <FaRegSun />
        <span className="menu-section-title-text">
          What's the weather like?
        </span>
      </div>
      <div className="scrollable-component menu-section-content">
        {weatherForecast?.map((item, index) => (
          <div key={index} className="day-card">
            <div className="day-card-content">
              <span className="day-weather-temperature">
                {item.temperature} °C
              </span>
              <i className="day-weather-icon">
                {item.weather === "mostly_sunny" && <FaSun />}
                {item.weather === "partly_sunny" && <FaCloudSun />}
                {item.weather === "cloudy" && <FaCloud />}
                {item.weather === "mostly_cloudy" && <BsFillCloudsFill />}
                {item.weather === "psbl_rain" && <BsFillCloudRainFill />}
                {item.weather === "overcast" && <BsCloudHaze2Fill />}
              </i>
              {/* pra mostrar la descripcion haz lo mismo de arriba */}
              <div className="day-weather-description">
                {item.weather === "partly_sunny" && "Partly sunny"}
                {item.weather === "cloudy" && "Cloudy"}
                {item.weather === "psbl_rain" && "Possible Rain"}
                {item.weather === "mostly_cloudy" && "Mostly Cloudy"}
                {item.weather === "overcast" && "Overcast"}
              </div>
              <p style={{ fontSize: "0.7em", textAlign: "center" }}>
                {/* how to reverse this? */}
                {reverseDate(item.day)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherApp;
