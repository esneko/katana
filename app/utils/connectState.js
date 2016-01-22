import {connect} from 'react-redux'
import mapStateToProps from './mapStateToProps'
import mapDispatchToProps from './mapDispatchToProps'

export default (selectedOptions) => {
  const defaultOptions = {
    actions: {},
    state: {}
  }

  const options = {...defaultOptions, ...selectedOptions}

  return function(Component) {
    const props = mapStateToProps(options.state)
    const actions = mapDispatchToProps(options.actions)

    return connect(props, actions)(Component)
  }
}
