import { Heading } from '../widgets/WidgetController';

const SettingsWindow = () => {
    return (
        <div className="absolute left-0 top-0 w-9/12 rounded-widget shadow-custom p-2 bg-light-widget dark:bg-dark-widget">
            <Heading> Settings</Heading>
        </div>
    );
};

export default SettingsWindow;
