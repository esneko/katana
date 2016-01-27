import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import actions from '../actions/index'
import Calculator from '../components/calculator'
import bindActionCreatorsDeep from '../utils/bindActionCreatorsDeep'
import '../../public/styles/app.scss'

const app = ({lambda, dispatch}) => {
  const actionCreators = bindActionCreatorsDeep(actions, dispatch)
  return (
    <div className={"container"}>
      <Link to={{pathname: '/login'}}>{"Login"}</Link>
      <Link to={{pathname: '/profile'}}>{"Profile"}</Link>
      <section className={"flexbox"}>
        <Calculator
            {...lambda}
            actions={actionCreators}
        />
      </section>
    </div>
  )
}
const mapStateToProps = state => state
export default connect(mapStateToProps)(app)
