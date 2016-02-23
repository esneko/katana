import React from 'react'
import {connect} from 'react-redux'
import actions from '../actions/index'
import bindScopedActionCreators from '../utils/bindScopedActionCreators'
import Calculator from '../components/calculator'

const app = ({calculus, dispatch}) => {
  const scopedActions = bindScopedActionCreators(actions, dispatch)
  return (
    <Calculator
        {...calculus}
        {...scopedActions}
    />
  )
}
const mapStateToProps = state => state
export default connect(mapStateToProps)(app)
