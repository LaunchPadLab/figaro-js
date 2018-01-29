import path from 'path'
import { 
  findRoot,
  omitObjectValues,
  readYamlFile,
} from './utils'

function getDefaultFilename () {
  const projectRoot = findRoot()
  return path.resolve(projectRoot, 'config/application.yml')
}

function getDefaultEnvironment () {
  return process.env.NODE_ENV || 'development'
}

function readConfigFile (filename, log=log) {
  try {
    return readYamlFile(filename)
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn(`Figaro: (WARNING) file ${ filename } not loaded.`)
    return {}
  }
}

function read ({
  filename=getDefaultFilename(),
  environment=getDefaultEnvironment(),
}={}) {
  // Add vars from application.yml
  const allVars = readConfigFile(filename)
  // Get shared vars
  const sharedVars = omitObjectValues(allVars)
  // Get environment vars
  const environmentVars = allVars[environment] || {}
  return { ...environmentVars, ...sharedVars }
}

export default read