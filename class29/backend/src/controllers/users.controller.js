import * as usersService from '../services/users.service.js';

const getUsers = async (req, res) => {
    try {
        // Llamado a capa services
        const result = await usersService.getUsers();
        res.send({status: 'success', result});
    } catch (error) {
        res.status(500).send({status: 'error', message: error.message});
    }
}
const getUserById = async (req, res) => {
    try {
        const {id} = req.paramas;
        const result = await usersService.getUserByid(id);
        
        // si no se encuentra el user en DB
        if(!result) {
            return res.status(404).send({status: 'error', message: 'User not found'})
        }
        res.send({status: 'success', result});
    } catch (error) {
        res.status(500).send({status: 'error', message: error.message});
    }
}

const createUser = async (req, res) => {
    try {
        //obteniendo datos user
        const user = req.body;
        const result = await usersService.createUser(user);

        res.send({status: 'success', result});
    } catch (error) {
        res.status(500).send({status: 'error', message: error.message});
    }
}

export {
    getUsers,
    getUserById,
    createUser
}