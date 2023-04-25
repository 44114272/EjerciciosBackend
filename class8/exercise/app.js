import express from 'express';

const app = express();

app.use(express.json());

const users = [];


app.get('/users', (req,res) => {
    res.send(users)
});

app.post('/users', (req,res) => {
    const user = req.body;
    user.id = 1;
    if(!user.first_name || !user.last_name) {
        return res.status(400).send({status: 'Error', error: 'incomplete values'})
    }

    users.push(user);
    res.send({status:'success', message:'user created'});
})

app.put('/users/:id', (req,res) => {
    const user = req.body;
    const userId = Number(req.params.id);

    if(!user.first_name || !user.last_name) {
        return res.status(400).send({status: 'Error', error: 'incomplete values'})
    }
    const index = users.findIndex(u => u.id === userId);

    if (index !== -1) {
        users[index] = user;
        res.send({status:'success', message:'user updated'});
    } else {
        res.status(404).send({status: 'Error', error: 'user not found'})
    }
})

app.delete('/users/:id', (req,res) => {
    const userId = Number(req.params.id);
    const index = users.findIndex(u => u.id === userId);

    if (index !== -1) {
        users.splice(index, 1)
        res.send({status:'success', message:'user Delete'});
    } else {
        res.status(404).send({status: 'Error', error: 'user not found'})
    }
})

app.listen(8081);