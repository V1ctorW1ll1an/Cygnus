import './utils/module-alias'
import { Server } from '@overnightjs/core'
import express, { Application } from 'express'
import { UserController } from './app/controllers/user.controller'

export class SetupServer extends Server {
  constructor (private port = 3000) {
    super()
  }

  public async init (): Promise<void> {
    this.setupExpress()
    this.setupControllers()
  }

  private setupExpress (): void {
    this.app.use(express.json())
  }

  private setupControllers (): void {
    const userController = new UserController()
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
