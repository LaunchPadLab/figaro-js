import cli from '../../src/cli'
import { CONFIG_FILE_PATH } from '../fixtures'
jest.mock('child_process')
const { execSync } = require('child_process')

// CLI test helpers - rely on execSync mock

function getExecutedCommand () {
  const executedCommand = execSync.mock.calls[0][0]
  execSync.mockClear()
  return executedCommand
}

function toArgv (str) {
  return ['_', '_', ...str.split(' ')]
} 

function callCLI (command) {
  cli(toArgv(command))
  return getExecutedCommand()
}

describe('heroku cli', () => {
  test('builds upload command correctly', () => {
    const executedComman = callCLI(`heroku:set --app TEST --path ${ CONFIG_FILE_PATH }`)
    expect(executedComman).toEqual('heroku config:set SHARED_VAR=shared_var OVERRIDE_VAR=override_var --app=TEST')
  })
  test('gets correct env when specified', () => {
    const executedComman = callCLI(`heroku:set -e production --path ${ CONFIG_FILE_PATH }`)
    expect(executedComman).toEqual('heroku config:set SHARED_VAR=shared_var OVERRIDE_VAR=production_override_var PRODUCTION_VAR=production_var')
  })
})
