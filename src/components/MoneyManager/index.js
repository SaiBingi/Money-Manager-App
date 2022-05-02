import './index.css'

import {v4 as uuidv4} from 'uuid'

import {Component} from 'react'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// let totalBalance = 0
// let totalIncome = 0
// let totalExpenses = 0

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: transactionTypeOptions[0].optionId,
    historyItems: [],
  }

  onChangeTitle = event => this.setState({title: event.target.value})

  onChangeAmount = event => this.setState({amount: event.target.value})

  onChangeType = event => this.setState({type: event.target.value})

  //   updatingMoneyDetails = () => {
  //     const {type, amount} = this.state

  //     totalBalance =
  //       type === 'INCOME'
  //         ? parseInt(totalBalance) + parseInt(amount)
  //         : parseInt(totalIncome) - parseInt(amount)

  //     totalIncome =
  //       type === 'INCOME' ? parseInt(totalIncome) + parseInt(amount) : totalIncome

  //     totalExpenses =
  //       type === 'INCOME'
  //         ? totalExpenses
  //         : parseInt(totalExpenses) + parseInt(amount)
  //   }

  onAddTransaction = event => {
    const {title, amount, type, historyItems} = this.state

    event.preventDefault()

    const transactionTypeOption = transactionTypeOptions.find(
      eachTransactionOption => eachTransactionOption.optionId === type,
    )

    const {displayText} = transactionTypeOption

    const newTransaction = {
      id: uuidv4(),
      title,
      amount,
      type: displayText,
    }

    // this.updatingMoneyDetails()

    this.setState({
      historyItems: [...historyItems, newTransaction],
      title: '',
      amount: '',
      type: transactionTypeOptions[0].optionId,
    })
  }

  deleteTransactionItem = deletedTransactionId => {
    const {historyItems} = this.state

    const filteredHistoryItems = historyItems.filter(
      eachHistory => eachHistory.id !== deletedTransactionId,
    )

    // const deletedHistoryItem = historyItems.filter(
    //   eachHistory => eachHistory.id === deletedTransactionId,
    // )

    // totalExpenses =
    //   deletedHistoryItem[0].type === 'Income'
    //     ? totalExpenses
    //     : parseInt(totalExpenses) - parseInt(deletedHistoryItem[0].amount)

    // totalIncome =
    //   deletedHistoryItem[0].type === 'Income'
    //     ? parseInt(totalIncome) - parseInt(deletedHistoryItem[0].amount)
    //     : totalIncome

    this.setState({historyItems: filteredHistoryItems})
  }

  getTotalIncome = () => {
    const {historyItems} = this.state
    let totalIncome = 0
    historyItems.forEach(eachHistoryItem => {
      if (eachHistoryItem.type === transactionTypeOptions[0].displayText) {
        totalIncome += parseInt(eachHistoryItem.amount)
      }
    })
    return totalIncome
  }

  getTotalExpensus = () => {
    const {historyItems} = this.state
    let totalExpensus = 0

    historyItems.forEach(eachHistoryItem => {
      if (eachHistoryItem.type === transactionTypeOptions[1].displayText) {
        totalExpensus += parseInt(eachHistoryItem.amount)
      }
    })
    return totalExpensus
  }

  getTotalBalance = () => {
    const {historyItems} = this.state
    let totalIncome = 0
    let totalExpensus = 0

    historyItems.forEach(eachHistoryItem => {
      if (eachHistoryItem.type === transactionTypeOptions[0].displayText) {
        totalIncome += parseInt(eachHistoryItem.amount)
      } else {
        totalExpensus += parseInt(eachHistoryItem.amount)
      }
    })

    const totalBalance = totalIncome - totalExpensus

    return totalBalance
  }

  render() {
    const {title, amount, type, historyItems} = this.state
    const totalIncome = this.getTotalIncome()
    const totalExpenses = this.getTotalExpensus()
    const totalBalance = this.getTotalBalance()
    //  totalBalance = totalIncome - totalExpenses

    return (
      <div className="bg-container">
        <div className="money-manager-container">
          <div className="welcome-wishes-container">
            <p className="welcome">Hi, Richard</p>
            <p>
              Welcome back to your
              <span className="style-text"> Money Manager</span>
            </p>
          </div>
          <MoneyDetails
            totalBalance={totalBalance}
            totalIncome={totalIncome}
            totalExpenses={totalExpenses}
          />
          <div className="transaction-details">
            <div className="transaction-container">
              <h1 className="transaction-heading">Add Transaction</h1>
              <form onSubmit={this.onAddTransaction}>
                <label htmlFor="title" className="label-text">
                  TITLE
                </label>
                <br />
                <input
                  id="title"
                  placeholder="TITLE"
                  className="input"
                  type="text"
                  value={title}
                  onChange={this.onChangeTitle}
                />
                <br />
                <br />
                <label htmlFor="amount" className="label-text">
                  AMOUNT
                </label>
                <br />
                <input
                  id="amount"
                  placeholder="AMOUNT"
                  className="input"
                  type="text"
                  onChange={this.onChangeAmount}
                  value={amount}
                />
                <br />
                <br />
                <label htmlFor="type" className="label-text">
                  TYPE
                </label>
                <br />
                <select
                  className="input"
                  value={type}
                  onChange={this.onChangeType}
                >
                  {transactionTypeOptions.map(eachTransactionItem => (
                    <option
                      className="option"
                      key={eachTransactionItem.optionId}
                      value={eachTransactionItem.optionId}
                    >
                      {eachTransactionItem.displayText}
                    </option>
                  ))}
                </select>
                <br />
                <br />
                <button type="submit" className="add-transaction-button">
                  Add
                </button>
              </form>
            </div>
            <div className="transaction-container history">
              <h1 className="transaction-heading">History</h1>

              <ul className="history-container">
                <li className="title-amount-type">
                  <p className="column"> Title </p>
                  <p className="column"> Amount </p>
                  <p className="column"> Type </p>
                </li>
                {historyItems.map(eachTransactionHistory => (
                  <TransactionItem
                    key={eachTransactionHistory.id}
                    transactionDetails={eachTransactionHistory}
                    deleteTransactionItem={this.deleteTransactionItem}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
