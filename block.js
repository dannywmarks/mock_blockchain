const { GENESIS_DATA, MINE_RATE } = require("./config.js");
const cryptoHash = require("./crypto-hash");
class Block {
  // Use map for arguments to not worry about order
  constructor({ timestamp, lastHash, hash, data, nonce, difficulty }) {
    (this.timestamp = timestamp),
      (this.lastHash = lastHash),
      (this.hash = hash),
      (this.data = data),
      (this.difficulty = difficulty),
      (this.nonce = nonce);
  }
  // Factory Method
  static genesis() {
    return new this(GENESIS_DATA);
  }

  static mineBlock({ lastBlock, data }) {
    let hash, timestamp;
    const lastHash = lastBlock.hash;
    const { difficulty } = lastBlock;
    let nonce = 0;

    do {
      nonce++;
      timestamp = Date.now();
      hash = cryptoHash(timestamp, lastHash, data, nonce, difficulty);
    } while (hash.substring(0, difficulty) !== "0".repeat(difficulty));

    return new this({
      timestamp,
      lastHash,
      data,
      difficulty,
      nonce,
      hash,
    });
  }

  static adjustDifficulty({ originalBlock, timestamp }) {
    const { difficulty } = originalBlock;
    const difference = timestamp - originalBlock.timestamp
    if(difference > MINE_RATE ) return difficulty - 1

    return difficulty + 1
  }
}

// Test Block
// const block1 = new Block({
//   timestamp: "01/01/01",
//   lastHash: "foo-lastHash",
//   hash: "foo-hash",
//   data: "foo-data",
// });

// console.log("block1", block1);

module.exports = Block;
