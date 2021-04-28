import { GridPosition, Heading } from "../WidgetController";
import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";

const Weather = ({ position }) => {
    return (
        <Draggable grid={[25, 25]}>
            <div
                className={`${GridPosition(
                    position
                )} max-w-weather content-end `}
            >
                <Heading>weather</Heading>
                <div className="grid grid-cols-3 p-1 text-light-text dark:text-dark-text">
                    <img src="" className="h-full" />
                    <div>
                        <span className="font-normal text-nextBlue text-3xl">
                            °C
                        </span>
                        <br></br>
                        feels like: °C<br></br>
                    </div>
                    <div>
                        min: °C<br></br> max: °C<br></br> pressure: hPa
                    </div>
                </div>
            </div>
        </Draggable>
    );
};

export default Weather;
