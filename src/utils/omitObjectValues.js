import { omitBy, isObject } from 'lodash'

// Omits keys from an object that have an object as their value.

function omitObjectValues (obj) {
  return omitBy(obj, isObject)
}

export default omitObjectValues