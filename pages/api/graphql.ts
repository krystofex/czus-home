import { ApolloServer, makeExecutableSchema } from 'apollo-server-micro';
import { PubSub } from 'graphql-subscriptions';
import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeTypeDefs } from '@graphql-tools/merge';
import { join } from 'path';
import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../src/utils/dbConnect';

const loadedFiles = loadFilesSync(join(process.cwd(), '**/*.graphqls'));
const typeDefs = mergeTypeDefs(loadedFiles);
const pubsub = new PubSub();

const getOpenWeatherData = async (cityId: number, units: string) =>
    await fetch(
        `http://api.openweathermap.org/data/2.5/weather?id=${cityId.toString()}&mode=json&units=${units}&appid=${
            process.env.OPENWEATHER_KEY
        }`
    ).then((x) => x.json());

const getSensorData = async (ipAddress: string) =>
    await fetch(`http://${ipAddress}/api`).then((x) => x.json());

const getWidgets = async (roomName: string) => {
    const { db } = await connectToDatabase();
    const response = await db
        .collection('widgets')
        .find({ room: roomName })
        .toArray();
    return response;
};

const getConfiguration = async () => {
    const { db } = await connectToDatabase();
    const response = await db.collection('configuration').toArray();
    return response;
};

setInterval(
    async () =>
        pubsub.publish(
            'getSensorDataSub',
            await getSensorData('192.168.1.185')
        ),
    10000
);

setInterval(
    async () =>
        pubsub.publish(
            'getOpenWeatherSub',
            await getOpenWeatherData(3068582, 'metric')
        ),
    10000
);

const resolvers = {
    Query: {
        openWeather: async () => await getOpenWeatherData(3068582, 'metric'),

        sensor: async () => await getSensorData('192.168.1.185'),

        widget: async () => await getWidgets('myRoom'),

        configuration: async () => {
            const { db } = await connectToDatabase();
            const response = await db
                .collection('configuration')
                .find({ id: 0 })
                .toArray();
            return response;
        },

        value: async () => {
            const { db } = await connectToDatabase();
            const sensorMac = '00:1B:44:11:3A:B7';
            const response = await db
                .collection('values')
                .find({ mac: sensorMac })
                .toArray();
            return response;
        },
    },
    Subscription: {
        sensor: {
            subscribe: async () => pubsub.asyncIterator('getSensorDataSub'),
            resolve: (data) => data,
        },
        openWeather: {
            subscribe: async () => pubsub.asyncIterator('getOpenWeatherSub'),
            resolve: (data) => data,
        },
    },
};

export const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

const apolloServer = new ApolloServer({
    schema,
    context: async ({ req, connection, res }) => {
        return connection
            ? connection.context
            : {
                  user: req.user,
                  useragent: req.useragent,
                  res,
                  req,
              };
    },
    playground: {
        subscriptionEndpoint: '/api/graphqlSubscriptions',
        settings: {
            'request.credentials': 'same-origin',
        },
    },
    subscriptions: {
        path: '/api/graphqlSubscriptions',
    },
});

type CustomSocket = Exclude<NextApiResponse<any>['socket'], null> & {
    server: Parameters<ApolloServer['installSubscriptionHandlers']>[0] & {
        apolloServer?: ApolloServer;
        apolloServerHandler?: any;
    };
};

type CUstomNextApiResponse<T = any> = NextApiResponse<T> & {
    socket: CustomSocket;
};

export const config = {
    api: {
        bodyParser: false,
    },
};

const graphqlWithSubscriptionHandler = (
    req: NextApiRequest,
    res: CUstomNextApiResponse
) => {
    const oldOne = res.socket.server.apolloServer;
    if (oldOne && oldOne !== apolloServer) {
        console.warn('FIXING HOT RELOAD');
        delete res.socket.server.apolloServer;
    }
    if (!res.socket.server.apolloServer) {
        console.log('ApolloServer (re)initialization');
        apolloServer.installSubscriptionHandlers(res.socket.server);
        res.socket.server.apolloServer = apolloServer;
        const handler = apolloServer.createHandler({ path: '/api/graphql' });
        res.socket.server.apolloServerHandler = handler;
        oldOne?.stop();
    }
    return res.socket.server.apolloServerHandler(req, res);
};

export default graphqlWithSubscriptionHandler;
