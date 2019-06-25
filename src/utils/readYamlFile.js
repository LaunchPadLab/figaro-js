const fs = require('fs')
const yaml = require('js-yaml')

// Read and parse a yaml file - returns a JS object.

const NOT_FOUND_CODE = 'ENOENT'

function readYamlFile (filePath) {
  try {
    return yaml.safeLoad(fs.readFileSync(filePath, 'utf8')) || {}
  } catch (e) {
    // Throw all errors except for file-not-found errors
    if (e.code !== NOT_FOUND_CODE) throw e
    // eslint-disable-next-line
    console.warn(`Figaro: config file not found, skipping load (path=${ filePath })`)
    return {}
  }
}

export default readYamlFile