import { PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { UserEntity } from './user.entity'
import { CategoryEntity } from './category.entity'

export class ArticleEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({
    length: 200,
    nullable: false
  })
  name:string

  @Column({
    length: 1000,
    nullable: false
  })
  description:string

  @Column({
    nullable: false
  })
  content:Buffer

  @Column()
  @ManyToOne(() => UserEntity, user => user.id)
  userId: string

  @Column()
  @ManyToOne(() => CategoryEntity, category => category.id)
  categoryId: string
}
