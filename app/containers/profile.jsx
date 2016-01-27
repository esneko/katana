import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as LoanActions from '../actions/loanActions'
import Summary from '../components/summary'
import '../../public/styles/app.scss'

const app = ({payday, dispatch}) => {
  const actions = bindActionCreators(LoanActions, dispatch)
  return (
    <div className={"container"}>
      <section className={"flexbox"}>
        <Summary
            {...payday}
            actions={actions}
        />
      </section>
    </div>
  )
}
const mapStateToProps = state => state
export default connect(mapStateToProps)(app)
