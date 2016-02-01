import {SET_FIELD} from '../constants/actionTypes'

export default (scopedReducer) => (...args) => {
  const state = args[0]
  const action = args[1]
  switch (action.type) {
    case SET_FIELD: {
      const {root, path, value} = action.payload
      return {
        ...state,
        [root]: state[root].merge({[path]: value})
      }
    }
    default:
      return scopedReducer.apply(null, args)
  }
}
