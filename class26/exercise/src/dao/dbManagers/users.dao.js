import usersModel from "./models/users.model.js";

export default class usersDao {
    constructor() {}

    async getAll() {
        return await usersModel.find();
    }

    async save(user) {
        return await usersModel.create(user);
    }
}