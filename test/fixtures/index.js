import path from 'path'

export const PROJECT_ROOT = path.resolve(__dirname, '../../')
export const CONFIG_FILE_PATH = path.resolve(__dirname, './application.yml')
export const INVALID_CONFIG_FILE_PATH = path.resolve(__dirname, './invalid.application.yml')
export const JSON_CONFIG_FILE_PATH = path.resolve(__dirname, './application.json')

export const DEVELOPMENT_ENV = {
  SHARED_VAR: 'shared_var',
  DEVELOPMENT_VAR: 'development_var',
  OVERRIDE_VAR: 'override_var',
  BOOLEAN_VAR: 'true',
  NUMBER_VAR: '1',
}

export const PRODUCTION_ENV = {
  SHARED_VAR: 'shared_var',
  PRODUCTION_VAR: 'production_var',
  OVERRIDE_VAR: 'production_override_var',
  BOOLEAN_VAR: 'true',
  NUMBER_VAR: '1',
}

