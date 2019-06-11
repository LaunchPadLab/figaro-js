import path from 'path'
import { 
  omitObjectValues,
  readYamlFile,
  toStringValues,
} from './utils'

/**
 * A function that loads env variables from a file and returns an object containing them.
 * The file may contain plain key-value pairs ("shared" variables) or key-values pairs nested under environment keys.
 * The latter will only be loaded if the current environment matches the environment key.
 * 
 * **Options**
 * 
 * `read` may be passed an options object containing the following keys:
 * - `path`: The path to the config file (default: './config/application.yml')
 * - `environment`: The string name of the current environment (default: 'development')
 *
 * @name read
 * @type Function
 * @param {object} options - Options for the function as specified above.
 *
 * @example
 * 
 * // Let's say we've got an application.yml that looks like:
 * // SOME_VAR: 'FOO'
 * // development:
 * //   IS_DEV: true
 * // production:
 * //   IS_PROD: true
 *
 * const Figaro = require('figaro-js')
 * const path = require('path')
 * 
 * const myEnv = Figaro.read({
 *    path: path.resolve(__dirname, './application.yml')
 * })
 * 
 * console.log(myEnv) 
 * // -> {
 * //   SOME_VAR: 'FOO',
 * //   IS_DEV: true
 * // }
 *
**/

function read ({
  path:filePath=path.resolve('config/application.yml'),
  environment=process.env.NODE_ENV || 'development',
}={}) {
  // Add vars from application.yml
  const allVars = readYamlFile(filePath)
  // Get shared vars
  const sharedVars = omitObjectValues(allVars)
  // Get environment vars
  const environmentVars = allVars[environment] || {}
  return toStringValues({ ...sharedVars, ...environmentVars })
}

export default read