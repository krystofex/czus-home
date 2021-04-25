import { TailwindPosition, Heading } from "./TailwindPosition";
import useDarkMode from "../../../src/hooks/useDarkMode";

const Main = (props) => {
  return (
    <>
      <div
        className={`${TailwindPosition(
          props.position
        )} max-h-12 p-2 text-light-text dark:text-dark-text bg-light-widget dark:bg-dark-widget`}
      >
        {props.children}
      </div>
    </>
  );
};

const ControlPanel = ({ position }) => {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <>
      <Main position={position}>
        <button onClick={() => setTheme(colorTheme)} className="h-4">
          {colorTheme === "dark" ? "dark" : "light"}
        </button>
      </Main>
    </>
  );
};

export default ControlPanel;
