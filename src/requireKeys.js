
function requireKeys (...keys) {
  const envKeys = Object.keys(process.env)
  keys.forEach(key => {
    if (!envKeys.includes(key)) throw new Error(`Figaro: Required key "${ key }" not found.`)
  })
  return true
}

export default requireKeys
