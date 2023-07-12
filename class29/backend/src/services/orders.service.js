import OrdersRepository from '../repositories/orders.repository.js';
import UsersRepository from '../repositories/users.repository.js';

const ordersRepository = new OrdersRepository();
const usersRepository = new UsersRepository();


const createOrder = async(user, business, products) => {
    const currentProducts = business.products.filter(prod =>
        products.includes(prod.id)
    );

    const sum = currentProducts.reduce((acc, prev) => {
        acc += prev.price;
        return acc;
    }, 0);

    const orderNumber = Date.now() + Math.floor(Math.random() * 100000 + 1);

    const order = {
        number: orderNumber,
        business: business._id,
        user: user._id,
        status: 'pending',
        products: currentProducts.map(prod => prod.id),
        total_price: sum
    };

    const orderResult = await ordersRepository.createOrder(order);

    user.orders.push(orderResult._id);

    await usersRepository.updateUser(user._id, user)

    return orderResult;
};

const getOrders = async () => {
    const result = await ordersRepository.getOrders();
    return result;
};

const getOrderById = async (id) => {
    const result = await ordersRepository.getOrderById(id);
    return result;
};

const resolveOrder = async (status, order) => {
    order.status = status;
    await ordersRepository.resolveOrder(order);
    return order;
};

export {
    createOrder,
    getOrders,
    getOrderById,
    resolveOrder
};