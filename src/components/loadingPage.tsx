import useDarkMode from '../hooks/useDarkMode';
import ContentLoader from 'react-content-loader';
import GridLayout, { Responsive, WidthProvider } from 'react-grid-layout';

const LoadingPage = () => {
    const ResponsiveGridLayout = WidthProvider(Responsive);
    useDarkMode();

    return (
        <ResponsiveGridLayout
            className="layout"
            breakpoints={{
                lg: 1200,
                md: 996,
                sm: 768,
                xs: 480,
                xxs: 0,
            }}
            cols={{ lg: 12, md: 12, sm: 12, xs: 12, xxs: 12 }}
            rowHeight={20}
        >
            <div
                className="rounded-widget shadow-custom p-2 bg-light-widget dark:bg-dark-widget"
                key="a"
                data-grid={{ x: 0, y: 0, w: 2, h: 2, static: true }}
            ></div>
            <div
                className="rounded-widget shadow-custom p-2 bg-light-widget dark:bg-dark-widget"
                key="b"
                data-grid={{ x: 0, y: 2, w: 2, h: 6, static: true }}
            ></div>
            <div
                className="rounded-widget shadow-custom p-2 bg-light-widget dark:bg-dark-widget"
                key="c"
                data-grid={{ x: 2, y: 0, w: 6, h: 8, static: true }}
            ></div>
            <div
                className="rounded-widget shadow-custom p-2 bg-light-widget dark:bg-dark-widget"
                key="d"
                data-grid={{ x: 0, y: 8, w: 4, h: 4, static: true }}
            ></div>
            <div
                className="rounded-widget shadow-custom p-2 bg-light-widget dark:bg-dark-widget"
                key="e"
                data-grid={{ x: 4, y: 8, w: 3, h: 4, static: true }}
            ></div>
        </ResponsiveGridLayout>
    );
};

export default LoadingPage;
