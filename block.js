class Block {
  // Use map for arguments to not worry about order
  constructor({ timestamp, lastHash, hash, data }) {
      (this.timestamp = timestamp),
      (this.lastHash = lastHash),
      (this.hash = hash),
      (this.data = data);
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
