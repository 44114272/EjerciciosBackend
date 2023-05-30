import express from 'express';
import session from 'express-session';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

function auth (req, res, next){
    if(req.session?.user === 'pepe' && req.session?.admin)
        return next();
    
    return res.status(401).send('Error de autenticacion');
}

app.use(session({
    secret: 'Coder397690',
    // no cierra la sesion automaticamente
    resave: true,
    // crea un objeto antes de que el usuario haga login
    saveUninitialized: true
}));

app.get('/session', (req,res) => {
    // Contador de inicios de sesion
    if(req.session.counter){
        req.session.counter++;
        res.send(`Se ha visitado el sitio ${req.session.counter} veces`);
    } else {
        // si es la primera vez lo inicializa en 1
        req.session.counter = 1;
        res.send('Bienvenido');
    }
}); 

app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        !err 
            ? res.send('Ok') 
            : res.send({status: 'error', error: err});
    })
});

app.get('/login', (req,res) => {
    const {username, password} = req.query;

    if (username !== 'pepe' || password !== 'pepepass')
        return res.send('Login fallido');

    req.session.user = username;
    req.session.admin = true;
    res.send('Login exitoso');
});

app.get('/private', auth, (req,res) => {
    res.send('Estas logueado')
});

app.listen(8080)
