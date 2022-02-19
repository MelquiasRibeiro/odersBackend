import {MigrationInterface, QueryRunner,Table,TableForeignKey} from "typeorm";

export class CreateOrderItem1645038946907 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                   name:'order_item',
                   columns: [
                {
                    name:'id',
                    type:'uuid',
                    isPrimary:true,  
                },
                {
                    name:'order_id',
                    type:'uuid',
                    
                },
                {
                    name:'product_name',
                    type:'varchar',
                },
                {
                    name:'product_price',
                    type:'float',
                },
                {
                    name:'product_quantity',
                    type:'int',
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
        const foreignKey = new TableForeignKey({
            columnNames: ["order_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "order",
            onDelete: "CASCADE"
        });
        await queryRunner.createForeignKey("order_item", foreignKey);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('order_items')

    }

}
