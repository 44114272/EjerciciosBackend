import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cookieParser('Coder39760'));

// Creating cookie
app.get('/set-cookies', (req, res) => {
    res.cookie('CoderCookie', 'Esta es una cookie seteada', 
    { maxAge: 30000 }).send('Cookie seteada');
});

// Geting the cookie
app.get('/cookies', (req,res) => {
    res.send(req.cookies);
});

// Deleting cookie
app.get('/delete-cookie', (req,res) => {
    res.clearCookie('CoderCookie').send('Cookie removed')
});

// signing cookie 
app.get('/set-signed-cookie', (req,res ) => {
    res.cookie('CoderSignedCookie', 'Esta es una cookie mas poderosa',
        {maxAge: 30000, signed: true}).send('Cookie firmada');
});

// geting signed cookies
app.get('/signed-cookies', (req,res) => {
    res.send(req.signedCookies)
});

app.listen(8080);