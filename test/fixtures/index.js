import path from 'path'

export const PROJECT_ROOT = path.resolve(__dirname, '../../')
export const CONFIG_FILE_PATH = path.resolve(__dirname, './application.yml')
export const JSON_CONFIG_FILE_PATH = path.resolve(__dirname, './application.json')

export const DEVELOPMENT_ENV = {
  SHARED_VAR: 'SHARED_VAR',
  DEVELOPMENT_VAR: 'DEVELOPMENT_VAR',
  OVERRIDE_VAR: 'OVERRIDE_VAR',
}

export const PRODUCTION_ENV = {
  SHARED_VAR: 'SHARED_VAR',
  PRODUCTION_VAR: 'PRODUCTION_VAR',
  OVERRIDE_VAR: 'PRODUCTION_OVERRIDE_VAR'
}

