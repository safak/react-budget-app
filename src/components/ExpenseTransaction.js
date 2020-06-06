import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { GlobalContext } from "../context/GlobalState";

const ExpenseTransaction = ({ expenseTransaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <li className="transaction">
      <span className="transaction-text">{expenseTransaction.expenseText}</span>
      <span className="transaction-amount">
        {expenseTransaction.expenseAmount}
      </span>
      <button className="delete-btn">
        <FontAwesomeIcon icon={faTrashAlt} onClick={()=> deleteTransaction(expenseTransaction.id)}/>
      </button>
    </li>
  );
};

export default ExpenseTransaction;
