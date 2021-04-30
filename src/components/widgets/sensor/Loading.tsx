import { GridPosition } from '../WidgetController';
import ContentLoader from 'react-content-loader';

export const LoadingChart = (props) => {
    return (
        <ContentLoader
            className="w-full "
            speed={1}
            backgroundColor="rgba(0, 0, 0, 0.1)"
            foregroundColor="rgba(0, 0, 0, 0.18)"
        >
            <rect x="0" y="8" rx="5" ry="5" width="200" height="10" />
            <rect x="0" y="44" rx="5" ry="5" width="360" height="200" />
            <rect x="340" y="44" rx="5" ry="5" width="360" height="200" />
        </ContentLoader>
    );
};

export const LoadingValue = (props) => {
    return (
        <ContentLoader
            className="w-full"
            speed={1}
            backgroundColor="rgba(0, 0, 0, 0.1)"
            foregroundColor="rgba(0, 0, 0, 0.18)"
        >
            <rect x="0" y="8" rx="5" ry="5" width="88" height="10" />
            <rect x="0" y="44" rx="5" ry="5" width="95" height="10" />
            <rect x="0" y="62" rx="5" ry="5" width="102" height="10" />
            <rect x="0" y="80" rx="5" ry="5" width="70" height="10" />
        </ContentLoader>
    );
};
