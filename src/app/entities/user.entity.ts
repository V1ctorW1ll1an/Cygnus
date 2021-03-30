import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({
    length: 200,
    nullable: false
  })
  name:string

  @Column({
    length: 200,
    nullable: false
  })
  email:string

  @Column({
    nullable: false
  })
  password:string

  @Column()
  admin: boolean

  constructor (props: Omit<UserEntity, 'id'>) {
    Object.assign(this, props)
  }
}
