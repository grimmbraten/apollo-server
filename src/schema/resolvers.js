const resolvers = {
  Query: {
    entries: () => [
      {
        value: 'Mock data'
      },
      {
        value: 'Mock value'
      }
    ]
  }
};

module.exports = {
  resolvers
};
