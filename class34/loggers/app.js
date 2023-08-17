import express  from "express";
import { addLogger } from "./utils/logger.js";

const app = express();

app.use(addLogger);

app.get('/', (req, res) => {
    // default levels
    req.logger.error('Prueba error');
    req.logger.warn('Prueba warn');
    req.logger.info('Prueba info');
    req.logger.debug('Prueba debug');
    req.logger.verbose('Prueba verbose');
    req.logger.silly('Prueba silly');

    // Custom levels
    // req.logger.fatal('Prueba fatal');
    // req.logger.error('Prueba error');
    // req.logger.warning('Prueba warning');
    // req.logger.info('Prueba info');
    // req.logger.debug('Prueba debug');
});

app.listen(8080);