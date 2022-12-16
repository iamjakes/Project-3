const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String
    },
    email: {
        type: String
    },
    createdAt: {
        
    }
});

const User = model('User',userSchema);

module.exports = User;