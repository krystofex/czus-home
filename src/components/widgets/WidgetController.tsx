import Weather from './weather/Weather';
import ControlPanel from './control-panel/ControlPanel';
import Sensor from './sensor/Sensor';
import Search from './search/Search';

const Widget = ({ widgetName, name, position }) => {
    switch (widgetName) {
        case 'controlPanel':
            return <ControlPanel position={position} />;
        case 'weather':
            return <Weather position={position} />;
        case 'search':
            return <Search name={name} position={position} />;
        case 'sensor':
            return <Sensor name={name} />;
    }
};

export function GridPosition(position) {
    return `col-start-${position[0]} row-start-${position[1]} col-span-${position[2]} row-span-${position[3]} rounded-widget shadow-custom p-2 bg-light-widget dark:bg-dark-widget`;
}

export const Heading = (props) => {
    return (
        <h3 className="pl-4 text-xl text-light-text dark:text-dark-text">
            {props.children}
        </h3>
    );
};

export default Widget;
