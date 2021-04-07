import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CriaClientes1617653978246 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'clientes',
            columns:[
                {
                    name:'id',
                    type:'uuid',
                    isPrimary:true,
                    default: 'uuid_generate_v4()',
                },
                {
                    name: 'nome',
                    type: 'varchar',
                },
                {
                    name: 'endereco',
                    type: 'varchar',
                },
                {
                    name: 'telefone',
                    type:'varchar',
                },
            ],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('clientes');
    }

}
