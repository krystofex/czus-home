import { TailwindPosition, Heading } from "./TailwindPosition";
import React, { useState, useEffect } from "react";

const Main = (props) => {
  return (
    <div
      className={`${TailwindPosition(
        props.position
      )} max-w-weather content-end bg-light-widget dark:bg-dark-widget`}
    >
      {props.children}
    </div>
  );
};

const Weather = ({ position }) => {
  return (
    <Main position={position}>
      <Heading>weather</Heading>
      <div className="grid grid-cols-3 p-1 text-light-text dark:text-dark-text">
        <img src="" className="h-full" />
        <div>
          <span className="font-normal text-nextBlue text-3xl">°C</span>
          <br></br>
          feels like: °C<br></br>
        </div>
        <div>
          min: °C<br></br> max: °C<br></br> pressure: hPa
        </div>
      </div>
    </Main>
  );
};

export default Weather;
