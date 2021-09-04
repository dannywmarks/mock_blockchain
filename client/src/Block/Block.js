import React, { useState } from "react";
import Transaction from "../Transaction/Transaction";

const Block = ({ block }) => {
  const [displayTransaction, setDisplayTransaction] = useState(false);

  const { timestamp, hash, data } = block;

  const toggleDisplayTransaction = () => {
    setDisplayTransaction(!displayTransaction);
  };

  const hashDisplay = `${hash.substring(0, 15)}...`;
  const stringifiedData = JSON.stringify(data);

  const dataDisplay =
    stringifiedData.length > 35
      ? `${stringifiedData.substring(0, 35)}...`
      : stringifiedData;

  const lessBlockData = () => {
    return (
      <div>
        <div>Hash: {hashDisplay}</div>
        <div>Timestamp: {new Date(timestamp).toLocaleString()}</div>
        <div>Data: {dataDisplay}</div>
      </div>
    );
  };

  const showMoreBlockData = () => {
    return (
      <div>
        <div>Hash: {hash}</div>
        <div>Timestamp: {new Date(timestamp).toLocaleString()}</div>
        <div>
          Data:{" "}
          {data.map((transaction) => (
            <div key={transaction.id}>
              <hr />
              <Transaction key={transaction.id} transaction={transaction} />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="Block">
      {displayTransaction ? showMoreBlockData() : lessBlockData()}

      <button className="Block__Button" onClick={toggleDisplayTransaction}>
        {displayTransaction ? "Show less" : "Show more"}
      </button>
    </div>
  );
};

export default Block;
