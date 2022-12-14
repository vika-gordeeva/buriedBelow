import http from 'http';

import app from './app';
import config from '../config';

const port = config.get('port');

const server = http.createServer(app).listen(port);