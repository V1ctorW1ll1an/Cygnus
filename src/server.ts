import { UserRepository } from './app/repositories/userRepository'
import { CreateUserController } from './app/useCases/createUser/createUserController'
import './utils/module-alias'
import { Server } from '@overnightjs/core'
import express, { Application } from 'express'
import { CreateUserUseCase } from './app/useCases/createUser/createUserUseCase'

export class SetupServer extends Server {
  private userRepository;
  private createUserUseCase;

  constructor (private port = 3000) {
    super()
    this.userRepository = new UserRepository()
    this.createUserUseCase = new CreateUserUseCase(this.userRepository)
  }

  public async init (): Promise<void> {
    this.setupExpress()
    this.setupControllers()
  }

  private setupExpress (): void {
    this.app.use(express.json())
  }

  private setupControllers (): void {
    const userController = new CreateUserController(this.createUserUseCase)
    this.addControllers([
      userController
    ])
  }

  public start (): void {
    this.app.listen(this.port, () => {
      console.info('Server listening of port: ', this.port)
    })
  }

  public getApp (): Application {
    return this.app
  }
}
