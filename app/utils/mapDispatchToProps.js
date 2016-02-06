import actions from '../actions/index'
import {bindActionCreators} from 'redux'

export default (actionsProps = {}) => (dispatch) => {
  return Object.keys(actionsProps).reduce((localState, name) => {
    const key = actionsProps[name][0]
    const path = actionsProps[name][1]

    if (actions[key] === undefined)
      throw new Error(`Unable to find actions for '${name}' by scope '${key}'`)

    if (path !== undefined)
      if (actions[key][path] === undefined)
        throw new Error(`Unable to find action for '${name}' by '${key}.${path}'`)
      else
        return {...localState, [name]: bindActionCreators(actions[key][path], dispatch)}
  }, {dispatch})
}
