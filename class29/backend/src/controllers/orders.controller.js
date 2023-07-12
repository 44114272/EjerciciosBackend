import * as usersService from '../services/users.service.js';
import * as businessService from '../services/business.service.js';
import * as ordersService from '../services/orders.service.js';

const getOrders = async (req, res) => {
    try {
        //llamando a capa orders
        const result = await ordersService.getOrders();
        res.send({status: 'success', result});
    } catch (error) {
        res.status(500).send({status: 'error', message: error.message});
    }
}

const getOrderById = async (req, res) => {
    try {
        const {id} = req.paramas;
        const result = await ordersService.getOrderByid(id);
        
        // si no se encuentra order en DB
        if(!result) {
            return res.status(404).send({status: 'error', message: 'User not found'})
        }
        res.send({status: 'success', result});
    } catch (error) {
        res.status(500).send({status: 'error', message: error.message});
    }
}

const createOrder = async (req, res) => {
    try {
        //obteniendo datos user
        const {user, products, business} = req.body;
        const userResult = await usersService.getUserById(user);

        // si no se encuentra user en DB
        if(!userResult) {
            return res.status(404).send({status: 'error', message: 'User not found'})
        }

        const businessResult = await businessService.getBusinessById(business);

        // si no se encuentra business en DB
        if(!businessResult) {
            return res.status(404).send({status: 'error', message: 'Business not found'})
        }

        const result = await ordersService.createOrder(userResult, businessResult, products);

        res.send({status: 'success', result});
    } catch (error) {
        res.status(500).send({status: 'error', message: error.message});
    }
}

const resolveOrder = async (req, res) => {
    try {
        //obteniendo datos user
        const {status} = req.body;
        const {id} = req.body;
        const orderResult = await ordersService.getOrderById(id);

        // si no se encuentra order en DB
        if(!orderResult) {
            return res.status(404).send({status: 'error', message: 'Order not found'})
        }

        const result = await ordersService.resolveOrder(orderResult, status);

        res.send({status: 'success', result});
    } catch (error) {
        res.status(500).send({status: 'error', message: error.message});
    }
}

export {
    getOrders,
    getOrderById,
    createOrder,
    resolveOrder
}