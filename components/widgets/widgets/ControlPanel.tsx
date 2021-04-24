import { TailwindPosition, Heading } from "./TailwindPosition";

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
  return (
    <>
      <Main position={position}>idk</Main>
    </>
  );
};

export default ControlPanel;
