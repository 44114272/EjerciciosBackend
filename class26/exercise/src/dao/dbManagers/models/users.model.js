import mongoose from 'mongoose';

const usersCollection = 'users';

const usersSchema = new mongoose.Schema({
    name: String,
    last_name: String,
    email: String
});

const usersModel = mongoose.model(usersCollection, usersSchema);

export default usersModel