const fs = require('fs')
const yaml = require('js-yaml')

// Read and parse a yaml file - returns a JS object.

function readYamlFile (filename) {
  return yaml.load(fs.readFileSync(filename, 'utf8'))
}

export default readYamlFile