import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    }
})

export const UserModel = mongoose.model('User', UserSchema)