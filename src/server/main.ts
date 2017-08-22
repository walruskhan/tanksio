import * as express from 'express';
import { Server } from 'http';
import * as path from 'path';
import * as socketio from 'socket.io';
import * as util from 'util';
import { create_logger, get as get_logger } from './logger';

const app = express();
const http = new Server(app);
const io = socketio(http);
const log = get_logger('default');

app.use(express.static(path.join(__dirname, './')));

http.listen(3000, () => {
    log.info("Listening on port 3000");
});