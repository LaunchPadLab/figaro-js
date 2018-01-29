
// Centralize this dependency in case we want to change it later.
// Is this overkill? Maybe :-)

function log (...args) {
  return console.log(...args)  // eslint-disable-line no-console
}

export default log