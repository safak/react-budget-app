import React,{useContext} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import {GlobalContext} from "../context/GlobalState";

const IncomeTransaction = ({incomeTransaction}) => {
  const {deleteTransaction} = useContext(GlobalContext)
    return (
        <li className="transaction">
          <span className="transaction-text">{incomeTransaction.incomeText}</span>
          <span className="transaction-amount">{incomeTransaction.incomeAmount}</span>
          <button className="delete-btn">
            <FontAwesomeIcon icon={faTrashAlt} onClick={()=> deleteTransaction(incomeTransaction.id)}/>
          </button>
        </li>
    );
};

export default IncomeTransaction;