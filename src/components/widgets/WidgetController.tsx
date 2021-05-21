import { FC } from 'react';
import Weather from './weather/Weather';
import ControlPanel from './controlPanel/ControlPanel';
import Sensor from './sensor/Sensor';
import Search from './search/Search';

import SearchSettings from './search/SearchSettings';
import SensorSettings from './sensor/SensorSettings';
import WeatherSettings from './weather/WeatherSettings';

type widgetControllerProps = {
    widgetName: string;
    name: string;
    size: [number, number, number, number];
};
export const Widget: FC<widgetControllerProps> = ({
    widgetName,
    name,
    size,
}) => {
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

type widgetSettingsProps = {
    widgetName: string;
    name: string;
};
export const WidgetSettings: FC<widgetSettingsProps> = ({
    widgetName,
    name,
}) => {
    switch (widgetName) {
        case 'weather':
            return <WeatherSettings name={name} />;
        case 'search':
            return <SearchSettings name={name} />;
        case 'sensor':
            return <SensorSettings name={name} />;
    }
};

export const Heading = ({ children }) => {
    return (
        <h3 className="pl-4 text-xl text-light-text dark:text-dark-text">
            {children}
        </h3>
    );
};
