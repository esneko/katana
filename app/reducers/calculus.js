import si from 'seamless-immutable'

const initialState = si({
  amount: 400,
  term: 30,
  rate: 10
})

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
