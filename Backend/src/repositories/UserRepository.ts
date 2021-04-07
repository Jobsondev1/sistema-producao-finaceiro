import Usuario from '../models/Usuario';
import IUserRepository from './IUserRepository';
import CreateUserDTO from '../dtos/CreateUserDTO';
import { getRepository, Repository } from 'typeorm';


class UserRepository implements IUserRepository{

    private ormRepository: Repository<Usuario>;

    constructor(){
        this.ormRepository = getRepository(Usuario);
    }
    //pesquisar usuario por nome
  public async findByNome(nome: string): Promise<Usuario | undefined> {
   const usuario = await this.ormRepository.findOne({
       where: {nome},
   }) ;  
   return usuario;
  }
  //Criar usuario
  public async create({nome, senha}: CreateUserDTO): Promise<Usuario> {
   const usuario = this.ormRepository.create({
    nome,
    senha,
   });
   await this.ormRepository.save(usuario);
   
   return usuario
  }
}

export default UserRepository;