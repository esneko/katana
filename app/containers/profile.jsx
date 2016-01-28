import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as LoanActions from '../actions/loanActions'
import Summary from '../components/summary'
import '../../public/styles/app.scss'

const app = ({payday, dispatch}) => {
  const actions = bindActionCreators(LoanActions, dispatch)
  return (
    <Summary
        {...payday}
        actions={actions}
    />
  )
}
const mapStateToProps = state => state
export default connect(mapStateToProps)(app)
