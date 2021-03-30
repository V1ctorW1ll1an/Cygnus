/* eslint-disable-next-line */
const { resolve } = require('path')
const root = resolve(__dirname, '..')
/* eslint-disable-next-line */
const rootConfig = require(`${root}/jest.config.js`)

module.exports = {
  ...rootConfig,
  ...{
    rootDir: root,
    displayName: 'end2end-tests',
    setupFilesAfterEnv: ['<rootDir>/test/jest-setup.ts'],
    testMatch: ['<rootDir>/test/**/*.spec.ts'],
  },
}
