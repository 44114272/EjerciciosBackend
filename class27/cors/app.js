import express from "express";
import cors from 'cors'

const app = express();

app.use(cors({
    origin: [""]
}));

app.get('/', (req, res) => {
    res.json({message: 'Saludos'});
});

app.listen(3000); 