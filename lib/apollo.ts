import { IncomingMessage, ServerResponse } from "http";
import { useMemo } from "react";
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

export type ResolverContext = {
  req?: IncomingMessage;
  res?: ServerResponse;
};

const createIsomorphLink = (context: ResolverContext = {}) => {
  if (typeof window === "undefined") {
    const { SchemaLink } = require("@apollo/client/link/schema");
    const { schema } = require("../pages/api/graphql");
    return new SchemaLink({ schema, context });
  } else {
    const { HttpLink, split } = require("@apollo/client");
    const { WebSocketLink } = require("apollo-link-ws");
    const { getMainDefinition } = require("@apollo/client/utilities");
    const httpLink = new HttpLink({
      uri: "/api/graphql",
      credentials: "same-origin",
    });
    const wsLink = new WebSocketLink({
      uri: `ws://${document.location.host}/api/graphqlSubscriptions`,
      options: {
        reconnect: true,
      },
    });

    const splitLink = split(
      //@ts-ignore
      ({ query }) => {
        const definition = getMainDefinition(query);
        return (
          definition.kind === "OperationDefinition" &&
          definition.operation === "subscription"
        );
      },
      wsLink,
      httpLink
    );
    return splitLink;
  }
};

const createApolloClient = (context?: ResolverContext) => {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: createIsomorphLink(context),
    cache: new InMemoryCache(),
  });
};

export const initializeApollo = (
  initialState: any = null,
  // Pages with Next.js data fetching methods, like `getStaticProps`, can send
  // a custom context which will be used by `SchemaLink` to server render pages
  context?: ResolverContext
) => {
  const _apolloClient = apolloClient ?? createApolloClient(context);

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // get hydrated here
  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
};

export const useApollo = (initialState: any) => {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
};
