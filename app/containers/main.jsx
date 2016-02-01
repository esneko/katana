import React from 'react'
import {connect} from 'react-redux'
import actions from '../actions/index'
import bindActionCreatorsDeep from '../utils/bindActionCreatorsDeep'
import Calculator from '../components/calculator'

const app = ({calculus, dispatch}) => {
  const scopedActions = bindActionCreatorsDeep(actions, dispatch)
  return (
    <Calculator
        {...calculus}
        actions={scopedActions}
    />
  )
}
const mapStateToProps = state => state
export default connect(mapStateToProps)(app)
