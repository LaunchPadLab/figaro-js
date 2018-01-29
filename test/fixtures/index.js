import path from 'path'

export const PROJECT_ROOT = path.resolve(__dirname, '../../')
export const CONFIG_FILE_PATH = path.resolve(__dirname, './application.yml')

export const DEVELOPMENT_ENV = {
  SHARED_VAR: 'SHARED_VAR',
  DEVELOPMENT_VAR: 'DEVELOPMENT_VAR',
}

export const PRODUCTION_ENV = {
  SHARED_VAR: 'SHARED_VAR',
  PRODUCTION_VAR: 'PRODUCTION_VAR',
}

