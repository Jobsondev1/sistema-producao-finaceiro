import 'reflect-metadata';
import './config/env';
import express, { NextFunction, Request, Response } from 'express';
import './database';
import morgan from 'morgan';
import routes from './routes';
import response from 'express';
import AppError from './erros/AppEror';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(routes);

app.use((err:Error, request: Request, response:Response, _: NextFunction )=>{
   if (err instanceof AppError){
       return response
       .status(err.statusCode)
       .json({ status: 'error', message: err.message });
   } 
   return response
   .status(500)
   .json({ status: 'error', message: 'Erro interno no sevidor' });
})

app.listen(3001, ()=> console.log('Sevidor rodando na porta 3001'));
