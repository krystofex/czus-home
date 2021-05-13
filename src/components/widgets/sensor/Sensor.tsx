import { FC } from 'react';
import { Heading } from '../WidgetController';
import {
    useSensorDataQuery,
    useValueQuery,
} from '../../../graphql/hello.graphql';
import ContentLoader from 'react-content-loader';
import { toast } from 'react-toastify';
import CountUp from 'react-countup';
import Chart from 'react-chartjs-2';

type widgetProps = { name: string; size: [number, number, number, number] };
const Sensor: FC<widgetProps> = ({ name, size }) => {
    const chartType = 'line';
    if (size[2] > 3 && size[3] > 4) {
        const { data, loading, error } = useValueQuery();

        if (error) {
            toast.error("couldn't connect to database");

            return (
                <div>
                    <Heading>{name}</Heading>{' '}
                    <h4 className="text-dogeBlood text-2xl text-center pt-2 ">
                        error
                    </h4>
                </div>
            );
        }

        if (loading) {
            return (
                <ContentLoader
                    className="w-full"
                    speed={1}
                    backgroundColor="rgba(0, 0, 0, 0.1)"
                    foregroundColor="rgba(0, 0, 0, 0.18)"
                >
                    <rect x="0" y="8" rx="5" ry="5" width="88" height="10" />
                    <rect x="0" y="22" rx="5" ry="5" width="95" height="10" />
                    <rect x="0" y="36" rx="5" ry="5" width="102" height="10" />
                </ContentLoader>
            );
        }

        let loadedFromDb = {
            temperature: data.value.map((x) => {
                return x.values.temp;
            }),
            pressure: data.value.map((x) => {
                return x.values.pressure;
            }),
            humidity: data.value.map((x) => {
                return x.values.humidity;
            }),
            time: data.value.map((x) => {
                return x.time;
            }),
        };

        const chartData = {
            labels: loadedFromDb.time,
            datasets: [
                {
                    label: 'Temperature',
                    data: loadedFromDb.temperature,
                    fill: true,
                    borderColor: '#4ECDC4',
                    backgroundColor: 'rgba(78,205,196,0.2)',
                    hidden: name !== 'temperature',
                    tension: 0.2,
                },
                {
                    label: 'Pressure',
                    data: loadedFromDb.pressure,
                    fill: true,
                    borderColor: '#D90368',
                    backgroundColor: 'rgba(217,3,104,0.2)',
                    hidden: name !== 'pressure',
                    tension: 0.2,
                },
                {
                    label: 'Humidity',
                    data: loadedFromDb.humidity,
                    fill: true,
                    borderColor: '#F75C03',
                    backgroundColor: 'rgba(247,92,3,0.2)',
                    hidden: name !== 'humidity',
                    tension: 0.2,
                },
            ],
        };

        const chartOptions = {
            animation: {
                duration: 1500,
                easing: 'easeInCubic',
            },
        };
        return (
            <>
                <Heading>{name}</Heading>
                <div
                    style={{
                        height: '400px',
                        width: '100%',
                    }}
                >
                    <Chart
                        type={chartType}
                        data={chartData}
                        options={chartOptions}
                    />
                </div>
            </>
        );
    } else {
        const { data, loading, error } = useSensorDataQuery();

        if (error) {
            toast.error("couldn't connect to sensor");

            return (
                <div>
                    <Heading>{name}</Heading>{' '}
                    <h4 className="text-dogeBlood text-2xl text-center pt-2 ">
                        error
                    </h4>
                </div>
            );
        }

        if (loading) {
            return (
                <ContentLoader
                    className="w-full"
                    speed={1}
                    backgroundColor="rgba(0, 0, 0, 0.1)"
                    foregroundColor="rgba(0, 0, 0, 0.18)"
                >
                    <rect x="0" y="8" rx="5" ry="5" width="88" height="10" />
                    <rect x="0" y="22" rx="5" ry="5" width="95" height="10" />
                    <rect x="0" y="36" rx="5" ry="5" width="102" height="10" />
                </ContentLoader>
            );
        }

        let widgetValue;
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

        return (
            <div>
                <Heading>{name}</Heading>
                <h4 className="text-nextBlue text-2xl text-center pt-2 ">
                    <CountUp
                        start={0}
                        end={widgetValue}
                        duration={0.4}
                        separator=" "
                        decimals={2}
                    />
                </h4>
            </div>
        );
    }
};

export default Sensor;
