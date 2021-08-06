const {GENESIS_DATA} = require('./config.js')
const cryptoHash = require('./crypto-hash')
class Block {
  // Use map for arguments to not worry about order
  constructor({ timestamp, lastHash, hash, data }) {
      (this.timestamp = timestamp),
      (this.lastHash = lastHash),
      (this.hash = hash),
      (this.data = data);
    
  }
  // Factory Method
  static genesis() {
    return new this(GENESIS_DATA)
  }

  static mineBlock({ lastBlock, data }) {
    const timestamp = Date.now();
    const lastHash = lastBlock.hash;

    return new this({
      timestamp: Date.now(),
      lastHash: lastBlock.hash,
      data,
      hash: cryptoHash(timestamp, lastHash, data)
    })
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
