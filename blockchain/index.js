const Block = require("./block");
const { cryptoHash } = require("../utils");

class Blockchain {
  constructor() {
    this.chain = [Block.genesis()];
  }

  addBlock({ data }) {
    const newBlock = Block.mineBlock({
      lastBlock: this.chain[this.chain.length - 1],
      data,
    });

    this.chain.push(newBlock);
  }

  static isValidChain(chain) {
    if (JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis()))
      return false;

    // skip genesis block loop through chain
    for (let i = 1; i < chain.length; i++) {
      const { timestamp, lastHash, hash, data, difficulty, nonce } = chain[i];

      const actualLastHash = chain[i - 1].hash;
      const lastDifficulty = chain[i - 1].difficulty;

      if (lastHash !== actualLastHash) return false;

      const validatedHash = cryptoHash(
        timestamp,
        lastHash,
        data,
        difficulty,
        nonce
      );

      if (validatedHash !== hash) return false;

      if (Math.abs(lastDifficulty - difficulty) > 1) return false;
    }

    return true;
  }
  replaceChain(chain, onSuccess) {
    if (chain.length <= this.chain.length) {
      console.error("Incomming chain must be longer");
      return;
    }

    if (!Blockchain.isValidChain(chain)) {
      console.error("Incomming chain must be valid");
      return;
    }

    if(onSuccess) onSuccess();
    console.log("replacing chain with", chain);
    this.chain = chain;
  }
}

module.exports = Blockchain;
