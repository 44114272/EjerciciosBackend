import mongoose from 'mongoose';

const contactsCollection = 'contacts'

const contactsSchema = new mongoose.Schema({
    name: String,
    phone: String
});

const contactModel = mongoose.model(contactsCollection, contactsSchema);

export default contactModel;