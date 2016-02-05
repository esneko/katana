import React, {PropTypes as T} from 'react'
import pure from 'recompose/pure'

const TextInput = props => {
  const {setField, store} = props
  const onChange = event => setField(store, event.target.name, event.target.value)

  return (
    <input
        {...props}
        onChange={onChange}
    />
  )
}

TextInput.propTypes = {
  setField: T.func.isRequired,
  store: T.string.isRequired
}

export default pure(TextInput)
