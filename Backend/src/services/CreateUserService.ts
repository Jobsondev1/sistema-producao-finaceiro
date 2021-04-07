import UserRepository from '../repositories/UserRepository';
import IUserRepository from '../repositories/IUserRepository';
import { hash } from 'bcryptjs';
import Usuario from '../models/Usuario';

//Serviço de altenticação do usuario
interface Request{
    nome: string;
    senha: string;
}

class CreateUserService {
    private userRepository: IUserRepository;

    constructor(userRepository: UserRepository){
        this.userRepository = userRepository;
    }

    public async execute({nome, senha}: Request): Promise<Usuario> {
        const senhaHash = await hash(senha, 8);

    const usuario = await this.userRepository.create({
    nome,
    senha: senhaHash,
  });
  return usuario;
 }
}

export default CreateUserService