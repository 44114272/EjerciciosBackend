const users = [];

const getUsers = async () => {
    return users;
}

const saveUser = async (user) => {
    if(users.length === 0) user.id = 1;

    else user.id = users[users.length - 1].id + 1;

    users.push(user);
    return user;
}

export {
    saveUser,
    getUsers
}