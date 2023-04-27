import express from 'express';
import {Server} from 'socket.io';
import handlebars from 'express-handlebars';
import __dirname from './utils.js'; 
import viewsRouter from './routes/views.router.js'

const app = express();

app.use(express.static(`${__dirname}/public`))

app.engine('handlebars', handlebars.engine());
app.set('views', `${__dirname}/views`);
app.set('view engine', 'handlebars');

app.use('/', viewsRouter)

const server = app.listen(8080, console.log('Server running on 8080'));

const io = new Server(server);

// io.on('connection', socket => {
//     console.log('Nuevo cliente conectado'); 

//     socket.on('message', data => {
//         console.log(data);
//     })

//     socket.emit('evento_socket_individual', 'este mensaje solo debe recibir el socket')

//     socket.broadcast.emit('evento_todos_menos_actual', 'Lo veran todos los clientes menos el actual')

//     io.emit('evento_todos', 'Lo reciviran todos los clientes');
// })

// second part
const logs = [];

io.on('connection', socket => {
    console.log('Conectado');
    socket.on('message1', data => {
        io.emit('log', data);
    })
    socket.on('message2', data => {
        logs.push({socketId: socket.id, message: data});
        io.emit('log', {logs})
    })
});
