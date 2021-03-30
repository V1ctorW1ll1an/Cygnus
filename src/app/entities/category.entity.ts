import { Column, OneToOne, PrimaryGeneratedColumn } from 'typeorm'

export class CategoryEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({
    length: 200,
    nullable: false
  })
  name: string

  @Column()
  @OneToOne(() => CategoryEntity)
  parentId: string
}
