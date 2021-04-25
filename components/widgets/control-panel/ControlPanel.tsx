import { GridPosition } from "../WidgetController";
import useDarkMode from "../../../src/hooks/useDarkMode";
import Moment from "react-moment";
import Draggable from "react-draggable";
const ControlPanel = ({ position }) => {
    const [colorTheme, setTheme] = useDarkMode();

    return (
        <Draggable grid={[25, 25]}>
            <div
                className={`${GridPosition(
                    position
                )} w-full max-h-12 p-2 text-light-text dark:text-dark-text inline`}
            >
                <Moment format="hh:mm:ss" interval={10} className="floatLeft" />
                <a onClick={() => setTheme(colorTheme)}>
                    {colorTheme === "dark" ? "dark" : "light"}
                </a>
            </div>
        </Draggable>
    );
};

export default ControlPanel;
