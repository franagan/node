const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        email: { type: String, required: true },
        password: { type: String, required: true },
        role: { type: String, default: 'user' },
    },
    {
        timestamps: true,
    },
    {
        collection: 'users',
    }
);

const User = mongoose.model('users', UserSchema);
module.exports = User;
