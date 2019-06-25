import { mapValues } from 'lodash'

// Casts values to strings using the String constructor

function toStringValues (obj) {
  return mapValues(obj, String)
}

export default toStringValues