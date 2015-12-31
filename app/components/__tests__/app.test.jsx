import test from 'tape'
import React from 'react'
//import app from '../../containers/app'
//import lambda from '../../reducers/lambda'

test("app test", function (assert) {
  const app = React.createElement('h1', {}, 'Hello')
  assert.equal(app.props.children, 'Hello', 'should display title')
  assert.end()
});
