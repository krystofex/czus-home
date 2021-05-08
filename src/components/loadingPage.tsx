import useDarkMode from '../hooks/useDarkMode';
import ContentLoader from 'react-content-loader';
import { Responsive, WidthProvider } from 'react-grid-layout';

const LoadingPage = () => {
    useDarkMode();
    const ResponsiveGridLayout = WidthProvider(Responsive);

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
            cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
            rowHeight={20}
        ></ResponsiveGridLayout>
    );
};

export default LoadingPage;
