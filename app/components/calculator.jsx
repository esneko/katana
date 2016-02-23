import React, {PropTypes as T} from 'react'
import pure from 'recompose/pure'
import Payable from './payable'
import NumberInput from './form/fields/numberInput'
import styles from '../styles/components/calculator.css'

const calculator = ({form, loan, amount, term, rate}) => {
  return (
    <div>
      <h2>{"Loan calculator"}</h2>
      <div className={styles.calculator}>
        <form>
          <div>
            <label>{"Amount"}</label>
            <NumberInput type="text"
                maxLength="5"
                store="calculus"
                name='amount'
                value={amount}
                setField={form.setField}
            />
          </div>
          <div>
            <label>{"Term"}</label>
            <NumberInput type="text"
                maxLength="2"
                store="calculus"
                name='term'
                value={term}
                setField={form.setField}
            />
          </div>
          <div>
            <label>{"Rate"}</label>
            <NumberInput type="text"
                maxLength="2"
                store="calculus"
                name='rate'
                value={rate}
                setField={form.setField}
            />
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
