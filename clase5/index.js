import UserManager from './managers/UserManager.js';

const manager = new UserManager('./files/Users.json');

const send = async() => {
    const users = await manager.getUsers();
    console.log(users);

    // const user = {
    //     name: 'Joaquin',
    //     lastName: 'Elia',
    //     userName: 'joaco',
    //     password: '1234'
    // };

    // await manager.createUser(user);
    await manager.validateUser('joaco', '1545434')
}

send();