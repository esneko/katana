import React, {PropTypes as T} from 'react'
import pure from 'recompose/pure'
import Payable from './payable'

const calculator = ({actions, amount, term, rate}) => {
  const onChange = event => actions.form.setField('calculus', event.target.name, +event.target.value)
  return (
    <div>
      <h2>{"Loan calculator"}</h2>
      <div className={"calculator"}>
        <form>
          <div className={"one-third"}>
            <label>{"Amount"}</label>
            <input type="text"
                maxLength="5"
                name='amount'
                value={amount}
                onChange={onChange}
            />
            <span>{"euro"}</span>
          </div>
          <div className={"one-third"}>
            <label>{"Term"}</label>
            <input type="text"
                maxLength="2"
                name='term'
                value={term}
                onChange={onChange}
            />
            <span>{"days"}</span>
          </div>
          <div className={"one-third"}>
            <label>{"Rate"}</label>
            <input type="text"
                maxLength="2"
                name='rate'
                value={rate}
                onChange={onChange}
            />
            <span>{"%"}</span>
          </div>
        </form>
        <Payable
            actions={actions}
            amount={amount}
            term={term}
            rate={rate}
        />
      </div>
    </div>
  )
}

calculator.propTypes = {
  amount: T.number.isRequired,
  term: T.number.isRequired,
  rate: T.number.isRequired
}

export default pure(calculator)
