import express from 'express';
import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import {__dirname} from './utils.js';

const app = express();

// Parametros de config
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//middlewar(intermediario) = operaciones que se ejecutan de manera 
//intermedia entre la peticion cliente y el servicio de nuestro servidor 
const middlewar1 = (req,res,next) => {
     console.log('Time: ', Date.now());
     next()
}
// Config para agregar funcionalidad de archivos estaticos
app.use(express.static(`${__dirname}/public`));

app.use('/api/users', usersRouter);
app.use('/api/pets', petsRouter);

app.get('/test', middlewar1, (req, res) => {
     res.send('Hello world');
} )

app.use((err,req,res,next) => {
     console.log(err);
     res.status(500).send('Error not handled')
})

app.listen(8080, () => console.log('Server running on port 8080'));