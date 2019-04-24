const fs = require('fs')
const yaml = require('js-yaml')

// Read and parse a yaml file - returns a JS object.

function readYamlFile (filePath) {
  try {
    return yaml.load(fs.readFileSync(filePath, 'utf8')) || {}
  } catch (e) {
    // Pretty-print file-not-found errors
    if (e.code !== 'ENOENT') throw e
    // eslint-disable-next-line
    console.warn(`Figaro: config file not found, skipping load (path=${ filePath })`)
    return {}
  }
}

export default readYamlFile