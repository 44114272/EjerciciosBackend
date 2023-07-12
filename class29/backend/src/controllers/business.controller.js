import * as businessService from '../services/business.service.js';

const getBusiness = async (req, res) => {
    try {
        // Llamado a capa services
        const result = await businessService.getBusiness();
        res.send({status: 'success', result});
    } catch (error) {
        res.status(500).send({status: 'error', message: error.message});
    }
}
const getBusinessById = async (req, res) => {
    try {
        const {id} = req.paramas;
        const result = await businessService.getBusinessById(id);
        
        // si no se encuentra el Business en DB
        if(!result) {
            return res.status(404).send({status: 'error', message: 'Busnes not found'})
        }
        res.send({status: 'success', result});
    } catch (error) {
        res.status(500).send({status: 'error', message: error.message});
    }
}

const createBusiness = async (req, res) => {
    try {
        //obteniendo datos Busnes
        const business = req.body;
        const result = await businessService.createBusiness(business);

        res.send({status: 'success', result});
    } catch (error) {
        res.status(500).send({status: 'error', message: error.message});
    }
}

const addProduct = async (req, res) => {
    try {
        const product = req.body;
        //obteniendo id del business
        const business = await businessService.getBusinesById(req.params.id);

        if(!business) {
            return res.status(404).send({status: 'error', message: 'Business not found'})
        }

        const updateResult = await businessService.updateBusiness(
            business,
            product
        )

        res.send({status: 'success', result: updateResult});
    } catch (error) {
        res.status(500).send({status: 'error', message: error.message});
    }
}

export {
    getBusiness,
    getBusinessById,
    createBusiness,
    addProduct
}