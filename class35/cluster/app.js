import cluster from 'cluster';
import  express  from 'express';
import {cpus} from 'os';

console.log(cluster.isPrimary);

const processNumber = cpus().length;
console.log(processNumber);

if(cluster.isPrimary) {
    console.log('Im a primary process, my work is to generate workers');
    for(let i = 0; i < processNumber; i++) {
        cluster.fork()
    }
    cluster.fork()
} else {
    console.log('Im a forked process, my rol is to be a worker');
    const app = express();

    app.get('/', (req, res) => {
        res.send({message: 'Server in express cluster mode'})
    })

    app.get("/operacionsencilla", (req, res) => {
        let sum = 0;
        for (let i = 0; i < 1000000; i++) {
            sum += i;
        }
        res.send({ message: "Operación sencilla", result: sum });
    });

    app.get("/operacioncompleja", (req, res) => {
        let sum = 0;
        for (let i = 0; i < 5e8; i++) {
            sum += i;
        }
        res.send({ message: "Operación compleja", result: sum });
    });

    app.listen(8080, () => {
        console.log('Server listening on port 8080');
    })
}