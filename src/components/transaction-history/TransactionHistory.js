import React from 'react';
import PropTypes from 'prop-types';
import Transaction from './Transaction';
import style from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
    <table className={style.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
        
  <tbody>
        {items.map(({ id, type, amount, currency }) => (
            <tr key={id}>
            <Transaction type={type} amount={amount} currency={currency} />
        </tr>
        ))}
  </tbody>
</table>
)

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,  
    })).isRequired,   
}

export default TransactionHistory;