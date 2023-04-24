import express from 'express';

const app = express();

const users = [
    {id: 1, name: 'joaquin', lastName: 'elia', age: 20, genre: 'M'},
    {id: 2, name: 'Alex', lastName: 'pinaida', age: 25, genre: 'M'},
    {id: 3, name: 'Nora', lastName: 'saucedo', age: 22, genre: 'F'}
]

app.get('/saludo', (req, res) => {
    res.send('Hola mundo desde express update')
})

app.get('/welcome', (req,res) => {
    res.send(`<h1 style="color:#b4eb0d;">welcome to my server in express</h1>`)
})

app.get('/user', (req, res) => {
    res.send({
        name: 'Joaquin',
        lastName: 'Elia',
        age: 20,
    })
})
// path params
app.get('/user/:id', (req, res) => {
    const userId = Number(req.params.id);
    const user = users.find(u => u.id === userId); 
    res.send(user);
})
// query params
app.get('/user-search', (req, res) => {
    const {genre, age, name} = req.query;
    res.send({genre, age, name});
})


app.listen(8080, () => console.log('listening on port 8080'));