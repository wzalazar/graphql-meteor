import express from 'express';
import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';

import { apolloExpress, graphiqlExpress } from 'apollo-server';
import { makeExecutableSchema } from 'graphql-tools';
import bodyParser from 'body-parser';

const GRAPHQL_PORT = 8000;
const graphQLServer = express();

const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers
});

// `context` must be an object and can't be undefined when using connectors
graphQLServer.use('/graphql', bodyParser.json(), apolloExpress({
  schema: executableSchema,
  context: {} //at least(!) an empty object
}));

graphQLServer.use('/graphiql', bodyParser.json(), graphiqlExpress({
  endpointURL: '/graphql',
}));

graphQLServer.listen(GRAPHQL_PORT, () => console.log(
  `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}/graphql`
));
