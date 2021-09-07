const { ApolloServer } = require('apollo-server');
const { typeDefs, resolvers } = require('../schema');

const server = new ApolloServer({ typeDefs, resolvers });

const [, , arg] = process.argv;
const port = arg || 4000;

server.listen({ port }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
