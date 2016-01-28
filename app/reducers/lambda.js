import {SET_FIELD} from '../constants/actionTypes'
import si from 'seamless-immutable'

const initialState = si({
  amount: 400,
  term: 30,
  rate: 10
})

const lambda = (state = initialState, action) => {
  switch (action.type) {
    case SET_FIELD: {
      const {name, value} = action.payload
      return state.merge({
        [name]: value
      })
    }
    default:
      return state
  }
}

export default lambda
