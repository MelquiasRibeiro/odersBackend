import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class CreateOrder1645035496571 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                   name:'order',
                   columns: [
                {
                    name:'id',
                    type:'uuid',
                    isPrimary:true,  
                },
                {
                    name:'customer_name',
                    type:'varchar',
                },
                {
                    name:'customer_email',
                    type:'varchar',
                },
                {
                    name:'customer_address',
                    type:'varchar',
                },
                {
                    name:'amount',
                    type:'float',
                },
                {
                    name:'dolar_amount',
                    type:'float',
                },
                {
                    name:'created_at',
                    type:'timestamp',
                    default:'now()'
                },
                {
                    name:'updated_at',
                    type:'timestamp',
                    default:'now()'
                },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('order')

    }

}
