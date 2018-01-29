import { read } from '../src'
import { 
  DEVELOPMENT_ENV,
  PRODUCTION_ENV,
  PROJECT_ROOT,
  CONFIG_FILE_PATH,
} from './fixtures'

test('filename defaults to {project_root}/config/application.yml', () => {
  const warn = jest.spyOn(console, 'warn')
  read()
  expect(warn).toHaveBeenCalledWith(`Figaro: (WARNING) file ${ PROJECT_ROOT }/config/application.yml not loaded.`)
})

test('returns empty object if file is not found', () => {
  const env = read({
    filename: '',
  })
  expect(env).toEqual({})
})

test('environment defaults to development', () => {
  process.env.NODE_ENV = undefined
  const env = read({
    filename: CONFIG_FILE_PATH
  })
  expect(env).toEqual(DEVELOPMENT_ENV)
  process.env.NODE_ENV = 'test'
})

test('environment reads from NODE_ENV', () => {
  process.env.NODE_ENV = 'development'
  const env = read({
    filename: CONFIG_FILE_PATH
  })
  expect(env).toEqual(DEVELOPMENT_ENV)
  process.env.NODE_ENV = 'test'
})

test('accepts custom environment option', () => {
  const env = read({
    filename: CONFIG_FILE_PATH, 
    environment: 'production'
  })
  expect(env).toEqual(PRODUCTION_ENV)
  process.env.NODE_ENV = 'test'
})