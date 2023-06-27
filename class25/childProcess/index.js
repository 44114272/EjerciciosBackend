import express  from "express";
import {fork} from 'child_process';

const app = express();


app.get('/suma', (req, res) => {
    const result = complexOperation();
    res.send(`Result: ${result}`);
});

app.get('/test', (req, res) => {
    res.send(`Hello world`);
});

app.get('/suma-no-bloq', (req, res) => {
    const child = fork('./complexOperation.js');
    child.send('Inicia el calculo');
    child.on('message', result => {
        res.send(`Result: ${result}`);
    })
})

app.listen(8080);