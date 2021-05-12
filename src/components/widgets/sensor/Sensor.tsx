import { FC } from 'react';
import { Heading } from '../WidgetController';
import { useSensorDataQuery } from '../../../graphql/hello.graphql';
import ContentLoader from 'react-content-loader';
import { toast } from 'react-toastify';
import CountUp from 'react-countup';

type widgetProps = { name: string };
const Sensor: FC<widgetProps> = ({ name }) => {
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
                />{' '}
            </h4>
        </div>
    );
};

export default Sensor;
