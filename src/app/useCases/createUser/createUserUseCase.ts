import { UserEntity } from './../../entities/user.entity'
import { ICreateUserRequestDTO } from './createUserDTO'
import { IUserRepository } from './../../repositories/IUserRepository'

export class CreateUserUseCase {
  constructor (
    private userRepository: IUserRepository
  ) {}

  async execute (data: ICreateUserRequestDTO): Promise<void> {
    const userAlreadyExists = await this.userRepository.findByEmail(data.email)

    if (userAlreadyExists) {
      throw new Error('User already exists!')
    }

    const user = new UserEntity(data)

    await this.userRepository.save(user)
  }
}
