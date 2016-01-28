import React from 'react'
import {connect} from 'react-redux'
import actions from '../actions/index'
import bindActionCreatorsDeep from '../utils/bindActionCreatorsDeep'
import Calculator from '../components/calculator'

const app = ({lambda, dispatch}) => {
  const actionCreators = bindActionCreatorsDeep(actions, dispatch)
  return (
    <Calculator
        {...lambda}
        actions={actionCreators}
    />
  )
}
const mapStateToProps = state => state
export default connect(mapStateToProps)(app)
