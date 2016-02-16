import React from 'react'
import {bindActionCreators} from 'redux'
import connectState from '../utils/connectState'
import * as LoanActions from '../actions/loanActions'
import Summary from '../components/summary'

const app = ({loans, dispatch}) => {
  const actions = bindActionCreators(LoanActions, dispatch)
  return (
    <Summary
        loans={loans}
        actions={actions}
    />
  )
}

export default connectState({
  state: {
    loans: ['payday', 'loans']
  }
})(app)
