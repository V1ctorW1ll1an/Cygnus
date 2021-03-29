import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class createArticlesTable1617039394096 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'articles',
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
            name: 'description',
            type: 'varchar',
            length: '1000',
            isNullable: false
          },
          {
            name: 'content',
            type: 'bytea',
            isNullable: false
          },
          {
            name: 'userId',
            type: 'uuid'
          },
          {
            name: 'categoryId',
            type: 'uuid'
          }
        ],
      }), true
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('articles')
  }
}
