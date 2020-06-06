import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import IncomeTransaction from "./IncomeTransaction";

const IncomeList = () => {

  const { incomeTransactions } = useContext(GlobalContext);
  return (
    <div className="transactions transactions-income">
      <h2>TransactionHistory</h2>
      <ul className="transaction-list">
        {incomeTransactions.map(i=>(
          <IncomeTransaction key={i.id} incomeTransaction={i}/>
        ))}   
      </ul>
    </div>
  );
};

export default IncomeList;
