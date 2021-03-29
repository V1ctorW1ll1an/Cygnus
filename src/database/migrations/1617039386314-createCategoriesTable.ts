import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class createCategoriesTable1617039386314 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(new Table({
      name: 'categories',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true,
          generationStrategy: 'uuid',
          default: 'uuid_generate_v4()'
        },
        {
          name: 'name',
          type: 'varchar',
          length: '200',
          isNullable: false
        },
        {
          name: 'parentId',
          type: 'uuid',
        }
      ]
    }), true)
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('categories')
  }
}
