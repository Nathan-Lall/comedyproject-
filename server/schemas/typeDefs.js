const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Comedian {
    _id: ID!
    first_name: String!
    last_name: String!
    shows: [Show]
  }

  type Show {
    _id: ID!
    date: String!
    city: String!
    venue: String!
    time: String!
    comedian: ID!
  }

  type Query {
    comedians: [Comedian]
  }
  
  type Mutation {
    createComedian(first_name: String!, last_name: String!): Comedian
    updateComedian(comedianId: String!, first_name: String!, last_name: String!): Comedian
    deleteComedian(comedianId: String!): Comedian
    
    createShow(date: String!, city: String!, venue: String!, time: String!, comedian: String!):Show
  }
`;

module.exports = typeDefs;
