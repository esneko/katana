import test from 'blue-tape'
import tapDevTool from 'tap-dev-tool/register'
import appTest from '../components/__tests__/app.test.jsx'

test('promise error', () => {
  return Promise.resolve().then(() => {
    throw new Error('Promise failed')
  })
})
