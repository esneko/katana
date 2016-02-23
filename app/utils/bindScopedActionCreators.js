import {bindActionCreators} from 'redux'

const bindScopedActionCreators = (actionCreators, dispatch) =>
  Object.keys(actionCreators).reduce((result, key) => {
    if (!actionCreators[key]) {
      return result
    }
    switch (typeof actionCreators[key]) {
      case 'object':
        result[key] = bindScopedActionCreators(actionCreators[key], dispatch)
        break
      case 'function':
        result[key] = bindActionCreators(actionCreators[key], dispatch)
        break
      default:
        break
    }
    return result;
  }, {})

export default bindScopedActionCreators
