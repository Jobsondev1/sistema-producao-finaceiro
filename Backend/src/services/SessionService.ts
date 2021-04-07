import UserRepository from '../repositories/UserRepository';
import IUserRepository from '../repositories/IUserRepository';
import { compare, hash } from 'bcryptjs';
import Usuario from '../models/Usuario';
import AppError from '../erros/AppEror';
import { sign } from 'jsonwebtoken';
import Response from 'express';

//Serviço de altenticação do usuario
interface Request{
    nome: string;
    senha: string; 
}

interface Response{
  token:string;
  usuario:Usuario;      
}
//conectar 
class SessionService {
    private userRepository: IUserRepository;

    constructor(userRepository: UserRepository){
        this.userRepository = userRepository;
    }

    public async execute({nome, senha}: Request): Promise<Response> {
        const usuario = await this.userRepository.findByNome(nome);

        if (!usuario) {
            throw new AppError('Usuario ou senha invalida',4001);
        }
        const senhaCompara = await compare(senha, usuario.senha);
        if (!senhaCompara) {
            throw new AppError(' susuario ou senha invalida', 4001)
        }

        const token = sign(usuario.id, process.env.APP_SECRET as string,{
            expiresIn: 'id',
        });

    delete usuario.senha;

  return {
   token,
   usuario,   
  };
 }
}

export default SessionService