export default (stateProps = {}) => {
  return (state) => {
    return Object.keys(stateProps).reduce((localState, propName) => {
      const root = stateProps[propName][0]
      const path = stateProps[propName].slice(1)
      if (state[root] === undefined)
        console.error(`Unable to find '${root}' in state keys: ${Object.keys(state)}`) // eslint-disable-line

      const part = path.length > 0 ? state[root].getIn(path) : state[root]
      return {...localState, [propName]: part}
    }, {})
  }
}
