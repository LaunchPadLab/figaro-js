import read from './read'

function load (options) {
  const readEnv = read(options)
  process.env = { ...readEnv, ...process.env }
}

export default load
