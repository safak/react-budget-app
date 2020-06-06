import React, { useContext } from "react";
import ExpenseTransaction from "./ExpenseTransaction";
import { GlobalContext } from "../context/GlobalState";


const ExpenseList = () => {

  const { expenseTransactions } = useContext(GlobalContext);

  return (
    <div className="transactions transactions-expense">
      <h2>TransactionHistory</h2>
      <ul className="transaction-list">
        {expenseTransactions.map(e=>(
        <ExpenseTransaction key={e.id} expenseTransaction = {e}/> 
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
