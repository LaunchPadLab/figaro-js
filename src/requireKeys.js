
function requireKeys (...keys) {
  const envKeys = Object.keys(process.env)
  return keys.forEach(key => {
    if (!envKeys.includes(key)) throw new Error(`Figaro: Required key "${ key }" not found.`)
  })
}

export default requireKeys
