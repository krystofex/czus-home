import { TailwindPosition, Heading } from "./TailwindPosition";
import { Line } from "react-chartjs-2";
import Image from "next/image";
import { useSensorDataQuery } from "../../../graphql/hello.graphql";

const Main = (props) => {
  return (
    <>
      <div className={TailwindPosition(props.position)}>{props.children}</div>
    </>
  );
};

const Value = (props) => {
  return (
    <h4 className="text-next text-2xl text-center font-hairline pt-2 animate-shake">
      {props.children}
    </h4>
  );
};

const Sensor = ({ name, position }) => {
  const { data, loading, error } = useSensorDataQuery();
  if (error) return "error";
  if (loading) return "loading";

  const widgetValue =
    name == "temperature"
      ? data.sensor.temperature
      : name == "pressure"
      ? data.sensor.pressure
      : data.sensor.humidity;

  var output = <></>;

  const data1 = {
    labels: [
      "12:25",
      "12:30",
      "12:35",
      "12:40",
      "12:45",
      "12:50",
      "12:55",
      "13:00",
      "13:05",
      "13:10",
    ],
    datasets: [
      {
        label: "temperature",
        data: [
          22.1,
          22.6,
          22,
          21,
          21.4,
          22,
          21.8,
          22.6,
          23,
          data.sensor.temperature,
        ],
        fill: false,
        borderColor: "rgba(68, 106, 212, 1)",
      },
    ],
  };

  if (position[2] > 1 && position[3] > 1)
    output = (
      <Main position={position}>
        <Heading>{name}:</Heading>
        <Line data={data1} />
      </Main>
    );
  else
    output = (
      <Main position={position}>
        <Heading>{name}:</Heading>
        <Value>{widgetValue}</Value>
      </Main>
    );

  return output;
};

export default Sensor;
