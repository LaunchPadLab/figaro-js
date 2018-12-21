import read from '../read'
import { execSync } from 'child_process'
import { map, isUndefined, omitBy } from 'lodash'

// Helper for building option arguments
// Ex. stringifyOptions({ FOO: 'bar' }) -> '--FOO=bar'
function stringifyOptions (options) {
  const definedOptions = omitBy(options, isUndefined)
  return map(definedOptions, (value, key) => `--${ key }=${ value }`).join(' ')
}

// Helper for building env var arguments
// Ex. stringifyEnv({ FOO: 'bar' }) -> 'FOO=bar'
function stringifyEnv (env) {
  return map(env, (value, key) => `${ key }=${ value }`).join(' ')
}

// Build and execute command using given arguments
function uploadToHeroku ({ app, environment, path, remote }) {
  const env = read({ path, environment })
  const command = `heroku config:set ${ stringifyEnv(env) } ${ stringifyOptions({ app, remote }) }`.trim()
  return execSync(command, { stdio: 'inherit' })
}

// Register heroku commands
function registerCommands (program) {
  return program
    .command('heroku:set')
    .option('-a, --app [app]', 'Specify a Heroku app')
    .option('-e, --environment [environment]', 'Specify an application environment')
    .option('-p, --path [path]', 'Specify a configuration file path (Default: config/application.yml)')
    .option('--remote [remote]', 'Specify a Heroku git remote')
    .action(uploadToHeroku)
}

export default registerCommands
