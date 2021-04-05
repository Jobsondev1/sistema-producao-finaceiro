import { Column, Entity, PrimaryGeneratedColumn} from "typeorm"

@Entity( 'usuarios')
class Usuario {

    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    nome:string;

    @Column()
   senha: string;

    }

export default Usuario;