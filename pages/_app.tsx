//import "../styles/widgets.css";
//import Weather from "../components/widgets/Weather";
//import widgetStyles from "../styles/widgets.css";
import 'tailwindcss/tailwind.css';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apollo';
import { DraggableProvider } from '../src/hooks/DraggableContext';

function MyApp({ Component, pageProps }) {
    const apolloClient = useApollo(null);
    return (
        <ApolloProvider client={apolloClient}>
            <DraggableProvider>
                <Component {...pageProps} />
            </DraggableProvider>
        </ApolloProvider>
    );
}

export default MyApp;
