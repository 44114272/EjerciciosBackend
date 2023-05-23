import mongoose from "mongoose";
import orderModel from "./models/orders.js";



const enviorment = async () => {
    try {
        await mongoose.connect('mongodb+srv://joaquinelia:4iOyPwxbtCoxQlmS@cluster39760je.eja9lgp.mongodb.net/class17?retryWrites=true&w=majority')
        // insertar datos en coleccion de orders

        // await orderModel.insertMany([
        //     {
        //         name: "Pepperoni", 
        //         size: "small", 
        //         price: 19,
        //         quantity: 10, 
        //         date: "2021-03-13T08:14:30Z"
        //     },
        //     {
        //         name: "Pepperoni", 
        //         size: "medium", 
        //         price: 20,
        //         quantity: 20, 
        //         date: "2021-03-13T09:13:24Z"

        //     },
        //     {
        //         name: "Pepperoni", 
        //         size: "family", 
        //         price: 21,
        //         quantity: 30, 
        //         date: "2021-03-17T09:22:12Z"
        //     },
        //     {
        //         name: "Cheese", 
        //         size: "small", 
        //         price: 12,
        //         quantity: 15, 
        //         date: "2021-03-13T11:21:39.736Z"
        //     },
        //     {
        //         name: "Cheese", 
        //         size: "medium", 
        //         price: 13,
        //         quantity: 50, 
        //         date: "2022-01-12T21:23:13.331Z"
        //     },
        //     {
        //         name: "Cheese", 
        //         size: "family", 
        //         price: 14,
        //         quantity: 10, 
        //         date: "2022-01-12T05:08:13Z"
        //     },
        //     {
        //         name: "Vegan", 
        //         size: "small", 
        //         price: 17,
        //         quantity: 10, 
        //         date: "2021-01-13T05:08:13Z"
        //     },
        //     {
        //         name: "Vegan", 
        //         size: "medium", 
        //         price: 18,
        //         quantity: 10, 
        //         date: "2021-01-13T05:10:13Z"
        //     }
        // ]);

        // aggregation
        const orders = await orderModel.aggregate([
            {   
                // stage. Filtra las pizzas medianas
                $match: {size: 'medium'}
            },
            {
                // agrupa por categoria: nombre
                $group: { _id: '$name', totalQuantity: { $sum: '$quantity'}}
            },
            {
                //Ordena de mayor a menor
                $sort: {totalQuantity: -1}
            },
            {
                // agrupa todo en un array. El ROOT hace push de todo el documento
                $group: {_id: 1, orders: { $push: '$$ROOT'}}
            },
            { 
                // Crea una nueva coleccion o documento 
                $project: {
                    '_id': 0, // Le indica a mongo que genere id automatico
                    order: '$orders' 
                }
            },
            {
                // merge toma el doc de fase anterior y lo inserta en nueva coleccion
                $merge: {
                    into: 'reports' // nueva coleccion que generamos
                }
            }

        ])
    console.log(orders);

    } catch (error) {
        console.log(error);
    }
}
enviorment()