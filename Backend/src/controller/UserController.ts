
import { Request, Response } from 'express';
import CreateUserService from '../services/CreateUserService';
import UserRepository from '../repositories/UserRepository';


class UserController{
    public async create( request: Request, response: Response): Promise<Response>{
        const {nome, senha } = request.body;

        const userRepository = new UserRepository();
        const createUser = new CreateUserService(userRepository);

        const usuario = await createUser.execute({
            nome,
            senha,
        });

       //delete usuario.senha;

        return response.json(usuario);
    }
}

export default UserController;