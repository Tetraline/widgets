import "./Weather.scss";
import { useState, useEffect } from "react";

const Weather = () => {
  const [position, setPosition] = useState({});
  const [weather, setWeather] = useState({});
  const getWeatherInfo = async () => {};
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => setPosition(position),
      () => console.error("cannot get user's position")
    );
  }, []);
  useEffect(() => {
    getWeatherInfo();
  }, [position]);
  return <p>{position.coords.latitude}</p>;
};

export default Weather;
