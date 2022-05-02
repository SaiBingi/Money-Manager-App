import './index.css'

const TransactionItem = props => {
  const {transactionDetails} = props
  const {id, title, amount, type} = transactionDetails

  const onDeleteHistoryItem = () => {
    const {deleteTransactionItem} = props
    deleteTransactionItem(id)
  }

  return (
    <li className="each-history">
      <p className="column"> {title} </p>
      <p className="column">Rs {amount} </p>
      <p className="column"> {type} </p>
      <button
        type="button"
        className="delete-button"
        onClick={onDeleteHistoryItem}
        testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default TransactionItem
