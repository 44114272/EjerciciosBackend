import mongoToyDao from './dbManagers/toys.dao.js'
import mongoUserDao from './dbManagers/users.dao.js'

const MongoToyDao = new mongoToyDao();
const MongoUserDao = new mongoUserDao();

export const TOYSDAO = MongoToyDao;
export const USERSDAO = MongoUserDao;
