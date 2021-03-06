import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class createUsersTable1616957570412 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')

    await queryRunner.createTable(
      new Table({
        name: 'users',
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
            name: 'email',
            type: 'varchar',
            length: '200',
            isUnique: true,
            isNullable: false
          },
          {
            name: 'password',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'admin',
            type: 'boolean',
            isNullable: false,
            default: false
          }
        ],
      }), true
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users')
    await queryRunner.query('DROP EXTENSION "uuid-ossp"')
  }
}
