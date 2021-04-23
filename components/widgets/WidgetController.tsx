import Weather from "./widgets/Weather";
import ControlPanel from "./widgets/ControlPanel";
import Sensor from "./widgets/Sensor";
import Search from "./widgets/Search";

const Widget = ({ widgetName, name, position }) => {
  switch (widgetName) {
    case "controlPanel":
      return <ControlPanel position={position} />;
    case "weather":
      return <Weather position={position} />;
    case "search":
      return <Search name={name} position={position} />;
    case "sensor":
      return <Sensor name={name} position={position} />;
  }
};

export default Widget;
