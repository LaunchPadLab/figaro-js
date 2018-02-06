const fs = require('fs')
const yaml = require('js-yaml')

// Read and parse a yaml file - returns a JS object.

function readYamlFile (filePath) {
  return yaml.load(fs.readFileSync(filePath, 'utf8'))
}

export default readYamlFile