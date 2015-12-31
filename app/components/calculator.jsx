import React, {PropTypes as T} from 'react'
import Payable from './payable'
import Profile from './profile'

const calculator = ({actions, amount, term, rate, loans}) => {
  const update = (action) => event => actions[action](parseInt(event.target.value))
  return (
    <div className={"container"}>
      <section className={"flexbox"}>
        <h2>{"Loan calculator"}</h2>
        <div className={"calculator"}>
          <form>
            <div className={"one-third"}>
              <label>{"Amount"}</label>
              <input type="text"
                  maxLength="5"
                  value={amount}
                  onChange={update('setAmount')}
              />
              <span>{"euro"}</span>
            </div>
            <div className={"one-third"}>
              <label>{"Term"}</label>
              <input type="text"
                  maxLength="2"
                  value={term}
                  onChange={update('setTerm')}
              />
              <span>{"days"}</span>
            </div>
            <div className={"one-third"}>
              <label>{"Rate"}</label>
              <input type="text"
                  maxLength="2"
                  value={rate}
                  onChange={update('setRate')}
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
      </section>
      <section className={"flexbox"}>
        <Profile
            actions={actions}
            loans={loans}
        />
      </section>
    </div>
  )
}

calculator.propTypes = {
  amount: T.number.isRequired,
  term: T.number.isRequired,
  rate: T.number.isRequired
}

export default calculator
