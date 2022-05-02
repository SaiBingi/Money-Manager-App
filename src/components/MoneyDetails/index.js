import './index.css'

const MoneyDetails = props => {
  const {totalBalance, totalIncome, totalExpenses} = props

  return (
    <div className="money-details-container">
      <div className="money-details balance">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
            className="money-details-image"
          />
        </div>
        <div>
          <p className="balance-text">Your Balance</p>
          <p testid="balanceAmount" className="balance-display">
            Rs {totalBalance}
          </p>
        </div>
      </div>
      <div className="money-details income">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
            className="money-details-image"
          />
        </div>
        <div>
          <p className="balance-text">Your Income</p>
          <p testid="incomeAmount" className="balance-display">
            Rs {totalIncome}
          </p>
        </div>
      </div>
      <div className="money-details expenses">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
            className="money-details-image"
          />
        </div>
        <div>
          <p className="balance-text">Your Expenses</p>
          <p testid="expensesAmount" className="balance-display">
            Rs {totalExpenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
