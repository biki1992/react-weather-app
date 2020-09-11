import React, { useState, useEffect } from "react";
import "./App.css";
import Weather from "./coponent/Weather";
import Form from "./coponent/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "weather-icons/css/weather-icons.css";
import axios from "axios";

function App() {
  const [weather, setWeather] = useState({});
  const [error, setError] = useState(false);
  const [errorMassage, setErrorMessage] = useState({ code: null, message: "" });
  const [value, setValue] = useState({ city: "delhi", country: "india" });
  const api_key = "4dbbe6a151d803231ffdc90d9c5ded7b";

  //form changes
  const handleChange = (e) => {
    if (e.target.id === "city") {
      setValue({ ...value, city: e.target.value });
    } else if (e.target.id === "country") {
      setValue({ ...value, country: e.target.value });
    }
  };

  // //initial api call
  useEffect(() => {
    const getWeather = () => {
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?q=${value.city},${value.country}&units=metric&appid=${api_key}`
        )
        .then((res) => {
          setWeather(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err.response);
          setError("true");
          setErrorMessage({
            code: err.response.data.cod,
            message: err.response.data.message,
          });
        });
    };
    getWeather();
  }, []);

  const getCityWeather = (e) => {
    e.preventDefault();
    const country = e.target.elements.country.value;
    const city = e.target.elements.city.value;
    if (country && city) {
      const getWeather = async () => {
        await axios
          .get(
            `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${api_key}`
          )
          .then((res) => {
            setWeather(res.data);
          })
          .catch((err) => {
            setError("true");
            setErrorMessage({
              code: err.response.data.cod,
              message: err.response.data.message,
            });
          });
      };
      getWeather();
    }
  };

  return (
    <div className="app">
      <Form
        onSubmit={getCityWeather}
        handleChange={handleChange}
        value={value}
      />
      {error !== false && errorMassage && (
        <div className="my-3 text-center ">
          <h1>{errorMassage.code}</h1>
          <p className="text-danger">{errorMassage.message}</p>
        </div>
      )}

      <Weather
        name={weather.name}
        temperature={weather.main}
        weather={weather.weather}
      />
    </div>
  );
}

export default App;
