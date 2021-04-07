import Usuario from '../models/Usuario';
import CreateUserDTO from '../dtos/CreateUserDTO';

export default interface IUserRepository{
    findByNome(nome:string): Promise<Usuario | undefined>;
    create(createUserDTO: CreateUserDTO): Promise<Usuario>;
}