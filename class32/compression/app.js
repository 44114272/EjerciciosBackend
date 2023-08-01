import express from 'express';
import compression from 'express-compression';

const app = express();

app.use(express.json());
// app.use(compression());
app.use(compression({
    brotli: { enable: true, zlib: {}}
}));

app.get('/string', (req, res) => {
    let string = 'This endpoint have a large response'
    for(let i=0; i < 10000; i++) {
        string += 'This endpoint have a large response'
    }
    res.send(string)
})