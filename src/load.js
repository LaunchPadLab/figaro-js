import read from './read'

/**
 * A function that loads env variables into `process.env`. 
 * Internally calls {@link read} and merges the result into `process.env`.
 * 
 * **Options**
 * 
 * `load` may be passed an options object containing the following keys:
 * - `path`: The path to the config file (default: './config/application.yml')
 * - `environment`: The string name of the current environment (default: 'development')
 *
 * @name load
 * @type Function
 * @param {object} options - Options for the function as specified above.
 *
 * @example
 * 
 * // Let's say we've got an application.yml that looks like:
 * // SOME_VAR: 'FOO'
 *
 * const Figaro = require('figaro-js')
 * const path = require('path')
 * 
 * console.log(process.env.SOME_VAR) // -> undefined
 * 
 * Figaro.load({
 *  path: path.resolve(__dirname, './application.yml')
 * })
 * 
 * console.log(process.env.SOME_VAR) // -> 'FOO'
 *
**/

function load (options) {
  const readEnv = read(options)
  process.env = { ...process.env, ...readEnv }
}

export default load
