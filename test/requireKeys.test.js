import { requireKeys } from '../src'

test('throws an error when required keys are not present in process.env', () => {
  process.env.TEST_VAR = 'TEST_VAR'
  expect(() => requireKeys('TEST_VAR')).not.toThrow()
  expect(() => requireKeys('OTHER_VAR')).toThrow()
})

test('returns true when keys are present', () => {
  process.env.TEST_VAR = 'TEST_VAR'
  process.env.OTHER_VAR = 'OTHER_VAR'
  expect(requireKeys('TEST_VAR', 'OTHER_VAR')).toBe(true)
})