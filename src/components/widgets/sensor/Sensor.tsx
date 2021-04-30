import { Heading } from '../WidgetController';
import { LoadingChart, LoadingValue } from './Loading';
import { useSensorDataQuery } from '../../../graphql/hello.graphql';
import { Line } from 'react-chartjs-2';

const Sensor = ({ name }) => {
    const { data, loading, error } = useSensorDataQuery();

    if (error)
        return (
            <div>
                <Heading>{name}</Heading>{' '}
                <h4 className="text-dogeBlood text-2xl text-center pt-2 ">
                    error
                </h4>
            </div>
        );

    if (loading) return LoadingValue;

    var widgetValue;
    //const =
    switch (name) {
        case 'temperature':
            widgetValue = data.sensor.temperature;
            break;
        case 'pressure':
            widgetValue = data.sensor.pressure;
            break;
        case 'humidity':
            widgetValue = data.sensor.humidity;
            break;
    }
    const chartData = {
        labels: [
            '12:25',
            '12:30',
            '12:35',
            '12:40',
            '12:45',
            '12:50',
            '12:55',
            '13:00',
            '13:05',
            '13:10',
        ],
        datasets: [
            {
                label: 'temperature',
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
                borderColor: 'rgba(68, 106, 212, 1)',
            },
        ],
    };

    return (
        <div>
            <Heading>{name}</Heading>

            <h4 className="text-nextBlue text-2xl text-center pt-2 ">
                {widgetValue.toFixed(2)}
            </h4>
        </div>
    );
};

export default Sensor;
