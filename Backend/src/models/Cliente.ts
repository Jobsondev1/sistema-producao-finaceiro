import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('clientes')
class Cliente{
    
    @PrimaryGeneratedColumn('uuid')
    id:string;
    
    @Column()
    nome:string;

    @Column()
    endereco:string;

    @Column()
    telefone:string;

}

export default Cliente;