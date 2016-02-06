import React, {PropTypes as T} from 'react'
import pure from 'recompose/pure'

const NumberInput = props => {
  const {setField, store} = props
  const onChange = event => setField(store, event.target.name, +event.target.value)
  return (
    <input
        {...props}
        onChange={onChange}
    />
  )
}

NumberInput.propTypes = {
  setField: T.func.isRequired,
  store: T.string.isRequired
}

export default pure(NumberInput)
