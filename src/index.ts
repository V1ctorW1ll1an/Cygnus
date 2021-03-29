import 'reflect-metadata'
import './database/connect'
import { SetupServer } from './server'

console.log('run');

(async (): Promise<void> => {
  // const server = new SetupServer(config.get('App.port'))
  const server = new SetupServer(3000)

  await server.init()
  server.start()
})()
