import React, {PropTypes as T} from 'react'
import pure from 'recompose/pure'
import NumberInput from './form/fields/NumberInput'
import Payable from './payable'

const calculator = ({form, loan, amount, term, rate}) => {
  return (
    <div>
      <h2>{"Loan calculator"}</h2>
      <div className={"calculator"}>
        <form>
          <div className={"one-third"}>
            <label>{"Amount"}</label>
            <NumberInput type="text"
                maxLength="5"
                store="calculus"
                name='amount'
                value={amount}
                setField={form.setField}
            />
            <span>{"euro"}</span>
          </div>
          <div className={"one-third"}>
            <label>{"Term"}</label>
            <NumberInput type="text"
                maxLength="2"
                store="calculus"
                name='term'
                value={term}
                setField={form.setField}
            />
            <span>{"days"}</span>
          </div>
          <div className={"one-third"}>
            <label>{"Rate"}</label>
            <NumberInput type="text"
                maxLength="2"
                store="calculus"
                name='rate'
                value={rate}
                setField={form.setField}
            />
            <span>{"%"}</span>
          </div>
        </form>
        <Payable
            addLoan={loan.addLoan}
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
