const hexToBinary = require("hex-to-binary");
const { GENESIS_DATA, MINE_RATE } = require("../config.js");
const { cryptoHash } = require("../utils");

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
    const lastHash = lastBlock.hash;
    let hash, timestamp;
    let { difficulty } = lastBlock;
    let nonce = 0;

    do {
      nonce++;
      timestamp = Date.now();
      difficulty = Block.adjustDifficulty({
        originalBlock: lastBlock,
        timestamp,
      });
      hash = cryptoHash(timestamp, lastHash, data, nonce, difficulty);
    } while (
      hexToBinary(hash).substring(0, difficulty) !== "0".repeat(difficulty)
    );

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
    if (difficulty < 1) return 1;
    const difference = timestamp - originalBlock.timestamp;

    if (difference > MINE_RATE) return difficulty - 1;

    return difficulty + 1;
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
