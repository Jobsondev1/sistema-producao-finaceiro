import {Router } from "express";
import UserController from '../controller/UserController';

const usuarioRoutes = Router();
const userController = new UserController();

usuarioRoutes.post('/', userController.create); 

export default usuarioRoutes;