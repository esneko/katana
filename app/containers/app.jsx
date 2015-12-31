import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as LoanActions from '../actions/loanActions'
import Calculator from '../components/calculator'
import '../../public/styles/app.scss'

const app = ({lambda, dispatch}) => {
  const actions = bindActionCreators(LoanActions, dispatch)
  return (
    <Calculator
        {...lambda}
        actions={actions}
    />
  )
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(app)
