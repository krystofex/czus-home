import React, { FC } from 'react';
import { Heading } from '../WidgetController';
import {
    useSensorDataSubSubscription,
    useValueQuery,
} from '../../../graphql/hello.graphql';
import ContentLoader from 'react-content-loader';
import { toast } from 'react-toastify';
import Chart from 'react-chartjs-2';
import { useTranslation } from 'react-i18next';

type widgetProps = { name: string; size: [number, number, number, number] };
const Sensor: FC<widgetProps> = ({ name, size }) => {
    const { t } = useTranslation();

    const chartType = 'line';
    if (size[2] > 3 && size[3] > 4) {
        const { data, loading, error } = useValueQuery();

        if (error) {
            toast.error("couldn't connect to database");

            return (
                <div>
                    <Heading>{name}</Heading>{' '}
                    <h4 className="text-dogeBlood text-2xl text-center pt-2 ">
                        {t('error')}
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

        const loadedFromDb = {
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
                    label: t('temperature'),
                    data: loadedFromDb.temperature,
                    fill: true,
                    borderColor: '#4ECDC4',
                    backgroundColor: 'rgba(78,205,196,0.2)',
                    hidden: name !== 'temperature',
                    tension: 0.2,
                },
                {
                    label: t('pressure'),
                    data: loadedFromDb.pressure,
                    fill: true,
                    borderColor: '#D90368',
                    backgroundColor: 'rgba(217,3,104,0.2)',
                    hidden: name !== 'pressure',
                    tension: 0.2,
                },
                {
                    label: t('humidity'),
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
                <Heading>{t(name)}</Heading>
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
        const { data, loading, error } = useSensorDataSubSubscription();

        if (error) {
            toast.error(t("couldn't connect to sensor"));

            return (
                <div>
                    <Heading>{name}</Heading>{' '}
                    <h4 className="text-dogeBlood text-2xl text-center pt-2 ">
                        {t('error')}
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
                widgetValue = data.sensor.temperature.toFixed(2) + '??C';
                break;
            case 'pressure':
                widgetValue = data.sensor.pressure.toFixed(2) + 'hPa';
                break;
            case 'humidity':
                widgetValue = data.sensor.humidity.toFixed(2) + '%';
                break;
        }

        return (
            <>
                <div className="flex h-full ">
                    <h3 className="absolute top-2 left-0">
                        <Heading>{t(name)}</Heading>
                    </h3>
                    <h4 className="text-nextBlue text-2xl w-full text-center mt-auto mb-auto">
                        {widgetValue}
                    </h4>
                </div>
            </>
        );
    }
};

export default Sensor;
