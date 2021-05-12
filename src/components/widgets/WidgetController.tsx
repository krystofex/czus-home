import Weather from './weather/Weather';
import ControlPanel from './control-panel/ControlPanel';
import Sensor from './sensor/Sensor';
import Search from './search/Search';
import { FC } from 'react';

type widgetControllerProps = {
    widgetName: string;
    name: string;
    size: [number, number, number, number];
};
const Widget: FC<widgetControllerProps> = ({ widgetName, name, size }) => {
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

export const Heading = (props) => {
    return (
        <h3 className="pl-4 text-xl text-light-text dark:text-dark-text">
            {props.children}
        </h3>
    );
};

export default Widget;
