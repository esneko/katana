export default (stateProps = {}) => state =>
  Object.keys(stateProps).reduce((localState, propName) => {
    const root = stateProps[propName][0]
    const path = stateProps[propName][1]

    if (state[root] === undefined)
      console.error(`Unable to find '${root}' in state keys: ${Object.keys(state)}`)

    const part = path.length > 0 ? state[root][path] : state[root]
    return {...localState, [propName]: part}
  }, {})
