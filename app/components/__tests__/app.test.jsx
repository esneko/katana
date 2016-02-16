import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'
import test from 'tape'
import Calculator from '../calculator'
//import app from '../../containers/app'
//import lambda from '../../reducers/lambda'

/* http://localhost:3000/tests
import tape from 'tape'
import tape_dom from 'tape-dom'
tape_dom.installCSS()
tape_dom.stream(tape)
*/

const createComponent = (component, props, ...children) => {
  const shallowRenderer = ReactTestUtils.createRenderer()
  const reactElement = React.createElement(
    component,
    props,
    children.length > 1 ? children : children[0]
  )

  shallowRenderer.render(reactElement)
  return shallowRenderer.getRenderOutput()
}

test('component type', t => {
  const props = {actions: {}, amount: 0, term: 0, rate: 0}
  t.equal(createComponent(Calculator, props).type, 'div')
  t.end()
})

test('component props', t => {
  const props = {actions: {}, amount: 1, term: 2, rate: 3}
  t.equal(createComponent(Calculator, props).props.children, props)
  t.end()
})
