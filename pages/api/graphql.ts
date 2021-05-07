import { ApolloServer, makeExecutableSchema } from 'apollo-server-micro';
import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeTypeDefs } from '@graphql-tools/merge';
import { join } from 'path';
import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../src/utils/dbConnect';

const loadedFiles = loadFilesSync(join(process.cwd(), '**/*.graphqls'));

const typeDefs = mergeTypeDefs(loadedFiles);

const resolvers = {
    Query: {
        sensor: async (_parent, _args, _context) => {
            return await fetch('http://192.168.1.185/api').then((x) =>
                x.json()
            );
        },
        openWeather: async (_parent, _args, _context) => {
            return await fetch(
                `http://api.openweathermap.org/data/2.5/weather?q=London&appid=${process.env.OPENWEATHER_KEY}`
            ).then((x) => x.json());
        },

        widget: async () => {
            const { db } = await connectToDatabase();
            const response = await db
                .collection('widgets')
                .find({ room: 'myRoom' })
                .toArray();
            return response;
        },

        value: async () => {
            const { db } = await connectToDatabase();
            const response = await db
                .collection('values')
                .find({ mac: '00:1B:44:11:3A:B7' })
                .toArray();
            return response;
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
