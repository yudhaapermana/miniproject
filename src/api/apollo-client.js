import { ApolloClient, InMemoryCache, split, HttpLink } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { createClient } from "graphql-ws";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";

const httpLink = new HttpLink({
     uri: 'https://cool-locust-13.hasura.app/v1/graphql',
     headers: {
          'x-hasura-admin-secret': 'c3hnUAMp9tnLw9ZGmzddrmXINdPimXuybKQRciKYGiy2cwI86S62o2hS4cQWFDhD'
     }
});

const wsLink = new GraphQLWsLink(createClient({
     url: 'ws://cool-locust-13.hasura.app/v1/graphql',
     connectionParams: {
          headers: {
               'x-hasura-admin-secret': 'c3hnUAMp9tnLw9ZGmzddrmXINdPimXuybKQRciKYGiy2cwI86S62o2hS4cQWFDhD'          
          }
     }
}))

const splitLink = split(
     ({ query }) => {
          const definition = getMainDefinition(query);
          return (
               definition.kind === 'OperationDefinition' &&
               definition.operation === 'subscription'
          );
     },
     wsLink,
     httpLink
);

const client = new ApolloClient({
     link: splitLink,
     cache: new InMemoryCache(),
});

export default client