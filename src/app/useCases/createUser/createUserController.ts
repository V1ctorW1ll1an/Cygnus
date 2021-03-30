import { CreateUserUseCase } from './createUserUseCase'
import { Request, Response } from 'express'
import { Controller, Post } from '@overnightjs/core'

@Controller('api/users')
export class CreateUserController {
  constructor (private createUserUseCase: CreateUserUseCase) {}

  @Post()
  private async handle (request: Request, response: Response): Promise<Response> {
    const { name, email, password, admin } = request.body

    try {
      await this.createUserUseCase.execute({
        name,
        email,
        password,
        admin
      })

      return response.status(201).send()
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error!'
      })
    }
  }
}
