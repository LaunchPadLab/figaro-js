import { read } from '../src'
import { 
  DEVELOPMENT_ENV,
  PRODUCTION_ENV,
  CONFIG_FILE_PATH,
  INVALID_CONFIG_FILE_PATH,
  JSON_CONFIG_FILE_PATH,
  PROJECT_ROOT,
} from './fixtures'

// Global console.warn mock
const warn = jest.spyOn(console, 'warn')
const last = arr => arr[arr.length - 1]
const getLastCall = fn => last(fn.mock.calls)

test('path defaults to {project_root}/config/application.yml', () => {
  read()
  const warning = getLastCall(warn)[0]
  expect(warning).toEqual(`Figaro: config file not found, skipping load (path=${ PROJECT_ROOT }/config/application.yml)`)
})

test('returns empty object if file is not found', () => {
  const env = read({
    path: '',
  })
  expect(env).toEqual({})
})

test('throws exception if file is invalid', () => {
  expect(() => read({
    path: INVALID_CONFIG_FILE_PATH,
  })).toThrow()
})

test('environment defaults to development', () => {
  process.env.NODE_ENV = ''
  const env = read({
    path: CONFIG_FILE_PATH
  })
  expect(env).toEqual(DEVELOPMENT_ENV)
  process.env.NODE_ENV = 'test'
})

test('environment reads from NODE_ENV', () => {
  process.env.NODE_ENV = 'development'
  const env = read({
    path: CONFIG_FILE_PATH
  })
  expect(env).toEqual(DEVELOPMENT_ENV)
  process.env.NODE_ENV = 'test'
})

test('accepts custom environment option', () => {
  const env = read({
    path: CONFIG_FILE_PATH, 
    environment: 'production'
  })
  expect(env).toEqual(PRODUCTION_ENV)
})

test('can read json file', () => {
  process.env.NODE_ENV = 'development'
  const env = read({
    path: JSON_CONFIG_FILE_PATH
  })
  expect(env).toEqual(DEVELOPMENT_ENV)
  process.env.NODE_ENV = 'test'
})

test('parses all values as strings', () => {
  process.env.NODE_ENV = 'development'
  const env = read({
    path: CONFIG_FILE_PATH
  })
  expect(typeof env.BOOLEAN_VAR).toBe('string')
  expect(typeof env.NUMBER_VAR).toBe('string')
  process.env.NODE_ENV = 'test'
})