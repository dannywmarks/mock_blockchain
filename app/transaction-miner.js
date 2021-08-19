const Transaction = require("../wallet/transaction");
class TransactionMiner {
  constructor({ blockchain, transactionPool, wallet, pubsub }) {
    this.blockchain = blockchain;
    this.wallet = wallet;
    this.transactionPool = transactionPool;
    this.pubsub = pubsub;
  }
  mineTransactions() {
    // get the transaction pool's valid transactions
    const validTransactions = this.transactionPool.validTransactions();
    // generate the miner's reward
    validTransactions.push(
      Transaction.rewardTransaction({ minerWallet: this.wallet })
    );

    this.blockchain.addBlock({ data: validTransactions });

    this.pubsub.broadcastChain();

    this.transactionPool.clear();

    // add a block consisting of these transactions to the blockchain
    // broadcast the updated blockchain
    // clear the pool
  }
}

module.exports = TransactionMiner;
