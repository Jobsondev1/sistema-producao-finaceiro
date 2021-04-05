import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CriaUsuario1617577112696 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:'usuarios',
            columns:[
                {
                    name: 'id',
                    type:'uuid',
                    isPrimary:true,
                    generationStrategy:'uuid',
                    default: 'uuid_generate_v4()',
                },
                {
                    name: 'nome',
                    type:'varchar',
                },
                {
                    name:'senha',
                    type:'varchar'
                },
                {
                    name:'active',
                    type: 'bollean',
                    default: true,
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('usuarios');
    }

}
