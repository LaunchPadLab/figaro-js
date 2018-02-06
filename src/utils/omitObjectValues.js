import omitBy from 'lodash.omitby'

// Omits keys from an object that have an object as their value.

function isObject (val) {
  return typeof val == 'object'
}

function omitObjectValues (obj) {
  return omitBy(obj, isObject)
}

export default omitObjectValues