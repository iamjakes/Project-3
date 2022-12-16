const { User } = require('../models')

const resolvers = {
    Query: {
        User: async ()=> {
            return User.find().sort({ createdAt: -1 });
        }
    }
};

module.exports = resolvers;