import express, { request, response } from 'express';

import morgan from 'morgan';

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.get('/',(request, response) => response.json({ message: 'sevidor funcionando'}));

app.listen(3001);