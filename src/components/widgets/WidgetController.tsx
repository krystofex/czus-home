import React from 'react';
import Weather from './weather/Weather';
import ControlPanel from './controlPanel/ControlPanel';
import Sensor from './sensor/Sensor';
import Search from './search/Search';

import SearchSettings from './search/SearchSettings';
import SensorSettings from './sensor/SensorSettings';
import WeatherSettings from './weather/WeatherSettings';

export const Widget = ({
    widgetName,
    name,
    size,
}: {
    widgetName: string;
    name: string;
    size: [number, number, number, number];
}): JSX.Element => {
    switch (widgetName) {
        case 'controlPanel':
            return <ControlPanel />;
        case 'weather':
            return <Weather name={name} size={size} />;
        case 'search':
            return <Search name={name} />;
        case 'sensor':
            return <Sensor name={name} size={size} />;
    }
};

export const WidgetSettings = ({
    widgetName,
    name,
}: {
    widgetName: string;
    name: string;
}): JSX.Element => {
    switch (widgetName) {
        case 'weather':
            return <WeatherSettings name={name} />;
        case 'search':
            return <SearchSettings name={name} />;
        case 'sensor':
            return <SensorSettings name={name} />;
    }
};

export const Heading = ({ children }: { children: string }): JSX.Element => {
    return (
        <h3 className="pl-4 text-xl text-light-text dark:text-dark-text">
            {children}
        </h3>
    );
};
