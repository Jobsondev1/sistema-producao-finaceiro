import {Router } from "express";
import usuarioRoutes from './usuarios';

const routes = Router();
const prefixRoutes = '/api/v1';

routes.get('/', (request, response) =>
    response.json({ messge: ' Sistema'}),
);

routes.use(`${prefixRoutes}/usuarios`, usuarioRoutes);

export default routes;