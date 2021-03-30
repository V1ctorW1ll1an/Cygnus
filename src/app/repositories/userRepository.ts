import { IUserRepository } from './IUserRepository'
import { getRepository } from 'typeorm'
import { UserEntity } from '../entities/user.entity'

export class UserRepository implements IUserRepository {
  async save (user: UserEntity): Promise<void> {
    await getRepository(UserEntity).save(user)
  }

  async findByEmail (email: string): Promise<any> {
    const response = await getRepository(UserEntity).findOne({ email })

    return response
  }
}
