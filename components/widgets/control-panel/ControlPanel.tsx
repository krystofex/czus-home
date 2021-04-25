import { GridPosition } from "../WidgetController";
import useDarkMode from "../../../src/hooks/useDarkMode";

const ControlPanel = ({ position }) => {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <>
      <div
        className={`${GridPosition(
          position
        )} max-h-12 p-2 text-light-text dark:text-dark-text`}
      >
        <button onClick={() => setTheme(colorTheme)} className="h-4">
          {colorTheme === "dark" ? "dark" : "light"}
        </button>
      </div>
    </>
  );
};

export default ControlPanel;
