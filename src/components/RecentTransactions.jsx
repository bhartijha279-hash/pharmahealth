function RecentTransactions({ transactions }) {
  return (
    <div className="panel">

      <div className="panel-header">
        <h2>▤ &nbsp; Recent Transactions</h2>
        <a href="#">View All →</a>
      </div>

      <div className="transaction-table">

        <div className="table-head">
          <span>Customer</span>
          <span>Medicine</span>
          <span>Amount</span>
          <span>Status</span>
        </div>

        {transactions.map((transaction) => (
          <div className="transaction" key={transaction.id}>

            <span className="customer">
              <i>{transaction.customer.charAt(0)}</i>
              {transaction.customer}
            </span>

            <span>{transaction.medicine}</span>

            <strong>₹{transaction.amount}</strong>

            <span className="completed">
              {transaction.status}
            </span>

          </div>
        ))}

      </div>

    </div>
  );
}

export default RecentTransactions;