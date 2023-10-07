import "./Forecast.css";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const WEEK_DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();

  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  const result_12 = data.list.filter((item) => {
    return item.dt_txt.split(" ")[1] === "12:00:00";
  });
  const result_15 = data.list.filter((item) => {
    return item.dt_txt.split(" ")[1] === "15:00:00";
  });
  const result_18 = data.list.filter((item) => {
    return item.dt_txt.split(" ")[1] === "18:00:00";
  });
  const result_21 = data.list.filter((item) => {
    return item.dt_txt.split(" ")[1] === "21:00:00";
  });
  const result_00 = data.list.filter((item) => {
    return item.dt_txt.split(" ")[1] === "00:00:00";
  });
  const result_3 = data.list.filter((item) => {
    return item.dt_txt.split(" ")[1] === "03:00:00";
  });
  const result_6 = data.list.filter((item) => {
    return item.dt_txt.split(" ")[1] === "06:00:00";
  });
  const result_9 = data.list.filter((item) => {
    return item.dt_txt.split(" ")[1] === "09:00:00";
  });

  console.log(result_12);

  return (
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {result_15.map((item, idx) => {
          return (
            <AccordionItem key={idx}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="daily-item">
                    <img
                      src={`icons/${item.weather[0].icon}.png`}
                      className="icon-small"
                      alt="weather"
                    />
                    <label className="day">{forecastDays[idx + 1]}</label>
                    <label className="description">
                      {item.weather[0].description}
                    </label>
                    <label className="min-max">
                      {Math.round(result_12[idx].main.temp)}°C /
                      {Math.round(result_00[idx].main.temp)}°C
                    </label>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="hourlyWeather">
                  <div className="hourlyWeatherItem">
                    <span>
                      {result_6[idx].dt_txt.split(" ")[1].slice(0, 1) == "0"
                        ? result_6[idx].dt_txt.split(" ")[1].slice(1, 5)
                        : result_6[idx].dt_txt.split(" ")[1].slice(0, 5)} Am
                    </span>
                    <img
                      src={`icons/${result_6[idx].weather[0].icon}.png`}
                      alt=""
                    />
                    <h2>{Math.round(result_6[idx].main.temp)}°C</h2>
                  </div>
                  <div className="hourlyWeatherItem">
                    <span>
                      {result_9[idx].dt_txt.split(" ")[1].slice(0, 1) == "0"
                        ? result_9[idx].dt_txt.split(" ")[1].slice(1, 5)
                        : result_9[idx].dt_txt.split(" ")[1].slice(0, 5)} Am
                    </span>
                    <img
                      src={`icons/${result_9[idx].weather[0].icon}.png`}
                      alt=""
                    />
                    <h2>{Math.round(result_9[idx].main.temp)}°C</h2>
                  </div>
                  <div className="hourlyWeatherItem">
                    <span>
                      {result_12[idx].dt_txt.split(" ")[1].slice(0, 1) == "0"
                        ? result_12[idx].dt_txt.split(" ")[1].slice(1, 5)
                        : result_12[idx].dt_txt.split(" ")[1].slice(0, 5)} Pm
                    </span>
                    <img
                      src={`icons/${result_12[idx].weather[0].icon}.png`}
                      alt=""
                    />
                    <h2>{Math.round(result_12[idx].main.temp)}°C</h2>
                  </div>
                  <div className="hourlyWeatherItem">
                    <span>
                      {result_15[idx].dt_txt.split(" ")[1].slice(0, 1) == "0"
                        ? result_15[idx].dt_txt.split(" ")[1].slice(1, 5)
                        : result_15[idx].dt_txt.split(" ")[1].slice(0, 5)} Pm
                    </span>
                    <img
                      src={`icons/${result_15[idx].weather[0].icon}.png`}
                      alt=""
                    />
                    <h2>{Math.round(result_15[idx].main.temp)}°C</h2>
                  </div>
                  <div className="hourlyWeatherItem">
                    <span>
                      {result_18[idx].dt_txt.split(" ")[1].slice(0, 1) == "0"
                        ? result_18[idx].dt_txt.split(" ")[1].slice(1, 5)
                        : result_18[idx].dt_txt.split(" ")[1].slice(0, 5)} Pm
                    </span>
                    <img
                      src={`icons/${result_18[idx].weather[0].icon}.png`}
                      alt=""
                    />
                    <h2>{Math.round(result_18[idx].main.temp)}°C</h2>
                  </div>
                  <div className="hourlyWeatherItem">
                    <span>
                      {result_21[idx].dt_txt.split(" ")[1].slice(0, 1) == "0"
                        ? result_21[idx].dt_txt.split(" ")[1].slice(1, 5)
                        : result_21[idx].dt_txt.split(" ")[1].slice(0, 5)} Pm
                    </span>
                    <img
                      src={`icons/${result_21[idx].weather[0].icon}.png`}
                      alt=""
                    />
                    <h2>{Math.round(result_21[idx].main.temp)}°C</h2>
                  </div>
                  <div className="hourlyWeatherItem">
                    <span>
                      {result_00[idx].dt_txt.split(" ")[1].slice(0, 1) == "0"
                        ? result_00[idx].dt_txt.split(" ")[1].slice(1, 5)
                        : result_00[idx].dt_txt.split(" ")[1].slice(0, 5)} Am
                    </span>
                    <img
                      src={`icons/${result_00[idx].weather[0].icon}.png`}
                      alt=""
                    />
                    <h2>{Math.round(result_00[idx].main.temp)}°C</h2>
                  </div>
                  <div className="hourlyWeatherItem none">
                    <span>
                      {result_3[idx].dt_txt.split(" ")[1].slice(0, 1) == "0"
                        ? result_3[idx].dt_txt.split(" ")[1].slice(1, 5)
                        : result_3[idx].dt_txt.split(" ")[1].slice(0, 5)} Am
                    </span>
                    <img
                      src={`icons/${result_3[idx].weather[0].icon}.png`}
                      alt=""
                    />
                    <h2>{Math.round(result_3[idx].main.temp)}°C</h2>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </>
  );
};

export default Forecast;
