const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        createdAt: String 
    }

    type Query {
        User: [User]
    }
`;

module.exports = typeDefs;