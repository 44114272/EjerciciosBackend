import fs from 'fs';
import crypto from 'crypto';

export default class UserManager {
    constructor(path) {
        this.path = path;
    }

    getUsers = async ()=> {
        try {
            if(fs.existsSync(this.path)){
                const data = await fs.promises.readFile(this.path, 'utf-8');
                console.log(data);
                
                const users = JSON.parse(data);
                return users;
            } else{
                return [];
            }
        
        } catch (error) {
            console.log(error);
        }
    }  

    createUser = async (user) => {
        try {
            const users = await this.getUsers();

            if (users.length === 0) {
                user.id = 1;
            } else {
                user.id = users[users.length - 1].id + 1; 
            }
            // password encryption to random character
            user.salt = crypto.randomBytes(128).toString('base64');
            // encryption algorithm
            user.password = crypto.createHmac('sha256', user.salt)
                .update(user.password).digest('hex');

            users.push(user);
            
            await fs.promises.writeFile(this.path, JSON.stringify(users, null, '\t'));
            
            return user;
        } catch (error) {
            console.log(error);
        }
    }
    validateUser = async(userName, password) => {
        try {
            const users = await this.getUsers();
            const userIndex = users.findIndex(u => u.userName === userName)
            if(userIndex === -1) {
                console.log("error, user not found");
                return;
            } 
            const user = users[userIndex];
            const newHash = crypto.createHmac('sha256', user.salt)
                .update(password).digest('hex');

            if (newHash === user.password) {
                console.log('Welcome');
            } else {
                console.log('Invalid password');
            }
        } catch (error) {
            console.log(error);
        }

    }

}