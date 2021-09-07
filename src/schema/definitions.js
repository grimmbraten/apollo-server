const { gql } = require('apollo-server');

const typeDefs = gql`
  type Data {
    value: String
  }

  type Query {
    entries: [Data]
  }
`;

module.exports = {
  typeDefs
};
