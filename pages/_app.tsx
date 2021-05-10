//import "../styles/widgets.css";
//import Weather from "../components/widgets/Weather";
//import widgetStyles from "../styles/widgets.css";
import 'tailwindcss/tailwind.css';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apollo';

function MyApp({ Component, pageProps }) {
    const apolloClient = useApollo(null);
    return (
        <ApolloProvider client={apolloClient}>
            <Component {...pageProps} />
        </ApolloProvider>
    );
}

export default MyApp;
