import React, { useEffect, useState } from "react";
import Thermometer from "../SVG/thermometer.svg";
import wind from "../SVG/Wind.svg";
import Humidity from "../SVG/Humidity.svg";
import Line from "../SVG/Line.svg";

export default function Weather() {
  const [weatherData, setWeatherData] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [tempC, setTempC] = useState();
  const [windSpeed, setWindSpeed] = useState();
  const [humidity, setHumidity] = useState();
  const [pressure, setPressure] = useState();
  const [icon, setIcon] = useState();
  const [iconTitle, setIconTitle] = useState();
  const zeroPad = (num, places) => String(num).padStart(places, "0");
  useEffect(() => {
    let url = "/weather";
    let req = new Request(url);
    let getApi = async () => {
      const res = await fetch(req);
      const data = await res.json().then((response) => response);

      setWeatherData(data);

      const dateTime = new Date(data.location.localtime);

      const day = dateTime.getDate();
      const year = dateTime.getFullYear();
      const month = dateTime.getMonth() + 1;
      const newDate = `${zeroPad(day, 2)}-${zeroPad(month, 2)}-${year}`;

      const hours = dateTime.getHours();
      const minutes = dateTime.getMinutes();
      const amOrPm = hours >= 12 ? "PM" : "AM";
      const formattedHours = hours % 12 || 12;
      const newTime = `${zeroPad(formattedHours, 2)}:${zeroPad(
        minutes,
        2
      )} ${amOrPm}`;

      setDate(newDate);
      setTime(newTime);
      setTempC(data.current.temp_c);
      setWindSpeed(data.current.wind_kph);
      setHumidity(data.current.humidity);
      setPressure(data.current.pressure_mb);
      setIcon(data.current.condition.icon);
      setIconTitle(data.current.condition.text);
    };
    getApi();
  }, []);
  return (
    <div>
      {weatherData && (
        <div className="weatherData">
          <div className="weatherSection1">
            <h1 className="weatherDate"> {date} </h1>
            <h1 className=" weathertime"> {time}</h1>
          </div>

          <div className="weatherSection2">
            <div className="row1">
              <img className="icon" src={icon} />
              <h4 className="iconTitle">{iconTitle}</h4>
            </div>
            <img src={Line} />
            <div className="row2">
              <h1 className="temp">{tempC}°C</h1>
              <div className="pressure">
                <img src={Thermometer} />
                <p className="displayPressure">
                  {pressure} mbar <br /> Pressure
                </p>
              </div>
            </div>
            <img src={Line} />
            <div className="row3">
              <div className="WindContainer">
                <img className="windIcon" src={wind} />
                <p className="windDetails">{windSpeed} km/h Wind</p>
              </div>

              <div className="humidityContainer">
                <img className="humidityIcon" src={Humidity} />
                <p className="humidityDetails">{humidity}% Humidiy</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
