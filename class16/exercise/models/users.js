import mongoose from 'mongoose';

const userCollection = 'usersbulk';

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        // el indice se usa solo en campos que sabemos que vamos a realizar busquedas
        index: true
    },
    last_name: String,
    email: String,
    gender: String
});

const userModel = mongoose.model(userCollection, userSchema);

export default userModel;