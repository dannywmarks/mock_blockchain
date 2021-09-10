import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTransactionPool } from "../actions/blockchain";
import { mineTransactions } from "../actions/blockchain";
import { Link } from "react-router-dom";
import Transaction from "../Transaction/Transaction";
import { useInterval } from "../customHooks/useInterval";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const POLL_INTERVAL_MS = 10000;

const TransactionPool = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useInterval(() => {
    dispatch(getTransactionPool());
  }, POLL_INTERVAL_MS);

  const transactionPoolMap = useSelector((state) => state.transactionPool);

  const mineTransaction = () => {
    console.log("fire");
    try {
      dispatch(mineTransactions());
      history.push("/blocks");
    } catch (error) {
      alert(
        error.message,
        "The mine-transactions block request did not complete"
      );
    }
  };

  transactionPoolMap.data ? console.log("transactionPoolMap", Object.values(transactionPoolMap.data)) : console.log('loading');
  return (
    <div>
      <div className="Transction Pool">
        <Link to="/">Home</Link>
        <h3>Transaction Pool</h3>
        {transactionPoolMap.data ? (
          Object.values(transactionPoolMap.data).map((transaction) => {
            console.log('single', transaction)
            return (
              <div key={transaction.id}>
                <hr />
                <Transaction transaction={transaction} />
              </div>
            );
          })
        ) : (
          <div>loading</div>
        )}
        <hr />
        <Button onClick={mineTransaction}>Mine the Transactions</Button>
      </div>
    </div>
  );
};

export default TransactionPool;
