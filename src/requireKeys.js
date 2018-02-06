
/**
 * A function that checks to make sure certain variables have been loaded into `process.env`.
 * If they exist in `process.env`, it returns `true`; if not, it throws an exception.
 * 
 * @name requireKeys
 * @type Function
 * @param {...string} keys - The required keys
 *
 * @example
 * 
 * if (requireKeys('MY_KEY', 'ANOTHER_KEY')) {
 *    runProgram()
 * }
 * 
 * // Above will throw if 'MY_KEY', 'ANOTHER_KEY' are not keys in process.env.
 * 
**/

function requireKeys (...keys) {
  const envKeys = Object.keys(process.env)
  keys.forEach(key => {
    if (!envKeys.includes(key)) throw new Error(`Figaro: Required key "${ key }" not found.`)
  })
  return true
}

export default requireKeys
