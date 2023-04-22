import "./App.css";
import { RxBell } from "react-icons/rx";
import { AiOutlineLogout } from "react-icons/ai";
import { FaRegSun } from "react-icons/fa";
import { useEffect, useState, useRef } from "react";
import WeatherApp from "./components/WeatherApp";
import FoodApp from "./components/FoodApp";
import AppsApp from "./components/AppsApp";
import MoviesApp from "./components/MoviesApp";

//interface for example Conversion Rate from RapidAPI guide

interface ConversionData {
  success: boolean;
  query: {
    from: string;
    to: string;
    amount: number;
  };
  info?: {
    timestamp: string;
    rate: number;
  };
  date: string;
  result: number;
}

// use types insteand of enums
// this should have been enum but it is not recommended to use them
// enums are used to represent constant values not likely to change
enum UserStatus {
  LoggedIn = "Logged In",
  LoggingIn = "Loggin In",
  LoggedOut = "Logged Out",
  LoginError = "Loging Error",
  VerifyingLogIn = "Verifying Login",
}

enum Default {
  PIN = "1234",
}

enum WeatherType {
  Cloudy = "Cloudy",
  Rainy = "Rainy",
  Stormy = "Stormy",
  Sunny = "Sunny",
}

interface IPosition {
  left: number;
  x: number;
}

// ? y esto para que es?
const defaultPosition = (): IPosition => ({
  left: 0,
  x: 0,
});

interface WeatherData {
  temperature: number;
  weatherDescription: string;
}

function App() {
  const weatherRef = useRef<HTMLDivElement>(null);
  const foodRef = useRef<HTMLDivElement>(null);
  const appsRef = useRef<HTMLDivElement>(null);
  const moviesRef = useRef<HTMLDivElement>(null);

  const handleScrollToWeather = () => {
    weatherRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollToFood = () => {
    foodRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollToApps = () => {
    appsRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollToMovies = () => {
    moviesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  function getConvertedData(): Promise<any> {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "3ace987a02msh8849bb088ed91b1p150168jsn51cecf385982",
        "X-RapidAPI-Host":
          "currency-conversion-and-exchange-rates.p.rapidapi.com",
      },
    };
    const from = (
      document.getElementById("inputCurrencyFrom") as HTMLInputElement
    ).value;
    console.log(from);

    const to = (document.getElementById("inputCurrencyTo") as HTMLInputElement)
      .value;

    const amount = (
      document.getElementById("currencyAmount") as HTMLInputElement
    ).value;

    return fetch(
      "https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert?from=" +
        from +
        "&to=" +
        to +
        "&amount=" +
        amount,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response as ConversionData);

        //display data
        (document.getElementById("currencyResult") as HTMLElement).innerHTML =
          response.result;
      })

      .catch((err) => console.error(err));
  }

  // show HH:MM
  const [currentDateTime, setCurrentDateTime] = useState<string>("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const dateTimeString = now.toLocaleString();
      const timeString = dateTimeString.slice(12, dateTimeString.length - 3);
      setCurrentDateTime(timeString);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  //show weather
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
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
          "https://ai-weather-by-meteosource.p.rapidapi.com/current?place_id=madrid&timezone=auto&language=es&units=metric",
          options
        );

        const data = await response.json();
        // console.log(data);
        setWeatherData({
          temperature: data.current.temperature,
          weatherDescription: data.current.summary,
        });
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };
    fetchWeatherData();
  }, []);

  return (
    <div id="app" className="logged-in">
      {/* <div>
        <h2>Currency Converter</h2>
        <p>Amount</p>
        <input type="number" id="currencyAmount" className="ip2" />
        <br />
        <label htmlFor="currency">From </label>
        <br />
        <select id="inputCurrencyFrom" name="currency">
          <option value="GBP">GBP</option>
          <option value="USD">USD</option>
          <option value="CAD">CAD</option>
          <option value="EUR">EUR</option>
        </select>
        <br />
        <label htmlFor="currency">To </label>
        <br />
        <select id="inputCurrencyTo" name="currency">
          <option value="GBP">GBP</option>
          <option value="USD">USD</option>
          <option value="CAD">CAD</option>
          <option value="EUR">EUR</option>
        </select>
        <br />
        <button style={{ marginTop: "2rem" }} onClick={getConvertedData}>
          Convert Data
        </button>
        <br />
        <h4>Result:</h4>
        <p id="currencyResult"></p>
      </div> */}
      <div id="app-menu">
        <div id="app-menu-content-wrapper">
          <div id="app-menu-content">
            <div id="app-menu-content-header">
              <div className="app-menu-content-header-section">
                <div id="app-menu-info" className="info">
                  <span className="time">{currentDateTime}</span>
                  <span className="weather">
                    {weatherData ? (
                      <div>
                        <FaRegSun className="weather-icon-info" />
                        <span className="weather-temperature-value">
                          {weatherData.temperature}
                        </span>
                        <span className="weather-temperature-unit">°C</span>
                      </div>
                    ) : (
                      <p>Loading weather data...</p>
                    )}
                  </span>
                </div>
                <div className="reminder">
                  <div className="reminder-icon">
                    <RxBell
                      style={{
                        color: "whitesmoke",
                        alignItems: "center",
                        display: "inline-flex",
                        fontSize: "0.9em",
                      }}
                    />
                  </div>
                  <span className="reminder-text">
                    Meeting with Michael Martin
                    <span className="reminder-time">10:OO</span>
                  </span>
                </div>
              </div>
              <div className="app-menu-content-header-section">
                <button
                  id="sign-out-button"
                  className="user-status-button clear-button"
                >
                  <AiOutlineLogout
                    style={{ color: "whitesmoke", fontSize: "1.5em" }}
                  />
                </button>
              </div>
            </div>

            <div id="quick-nav" className="scrollable-component">
              <div
                onClick={handleScrollToWeather}
                className="quick-nav-item clear-button"
              >
                <span className="quick-nav-item-label">Weather</span>
              </div>
              <div
                onClick={handleScrollToFood}
                className="quick-nav-item clear-button"
              >
                <span className="quick-nav-item-label">Food</span>
              </div>
              <div
                onClick={handleScrollToApps}
                className="quick-nav-item clear-button"
              >
                <span className="quick-nav-item-label">Apps</span>
              </div>
              <div
                onClick={handleScrollToMovies}
                className="quick-nav-item clear-button"
              >
                <span className="quick-nav-item-label">Movies</span>
              </div>
            </div>
            <div ref={weatherRef}>
              <WeatherApp />
            </div>
            <div ref={foodRef}>
              <FoodApp />
            </div>
            <div ref={appsRef}>
              <AppsApp />
            </div>
            <div ref={moviesRef}>
              <MoviesApp />
            </div>
          </div>
        </div>
      </div>
      <div id="app-background">
        <div id="app-background-image" className="background-image"></div>
      </div>
    </div>
  );
}

export default App;
