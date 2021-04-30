import { Heading } from '../WidgetController';
import React, { useState, useEffect } from 'react';

const Weather = () => {
    return (
        <div className="w-weather content-end">
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
    );
};

export default Weather;
