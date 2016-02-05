import appTest from '../components/__tests__/app.test.jsx'

import test from 'blue-tape'

test('promise error', () => {
  return Promise.resolve().then(() => {
    throw new Error('Promise failed')
  })
})
