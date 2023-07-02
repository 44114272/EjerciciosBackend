import express from 'express';
import './dao/dbManagers/dbConfig.js';
import toysRouter from './routes/toys.router.js';
import userRouter from './routes/users.router.js';

const app = express();

app.use(express.json());

app.use('/api/toys', toysRouter);
app.use('/api/users', userRouter);

app.listen(8080, () => {
    console.log('server running on port 8080');
});
