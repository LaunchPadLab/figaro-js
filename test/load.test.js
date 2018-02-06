import { load } from '../src'
import { 
  DEVELOPMENT_ENV,
  CONFIG_FILE_PATH
} from './fixtures'

test('adds new env object to process.env', () => {
  const priorProcessEnv = { ...process.env }
  load({
    path: CONFIG_FILE_PATH,
    environment: 'development',
  })
  expect(process.env).toEqual({ ...priorProcessEnv, ...DEVELOPMENT_ENV })
})
