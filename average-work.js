const Blockchain = require("./blockchain");

const blockchain = new Blockchain();

blockchain.addBlock({ data: "initial" });

console.log('first block', blockchain.chain[blockchain.chain.length-1])

let prevTimestamp, nextTimestamp, nextBlock, timeDiff, average;

// keep track of average times. Times should converge with set mine rate
const times = [];

// milliseconds
for (let i = 0; i < 10000; i++) {
  // last block in current chain
  prevTimestamp = blockchain.chain[blockchain.chain.length - 1].timestamp;

  // block with unique dummy data
  blockchain.addBlock({ data: `block ${i}` });

 

  // next block
  nextBlock = blockchain.chain[blockchain.chain.length - 1];

  // Time stamp for next block
  nextTimestamp = nextBlock.timestamp;

  // This is how long it takes to mine new block
  timeDiff = nextTimestamp - prevTimestamp;
  times.push(timeDiff);

  // Average of mine times
  average = times.reduce((total, num) => (total + num))/times.length
  
  console.log(`Time to mine block: ${timeDiff}ms. Difficulty: ${nextBlock.difficulty}. Average time ${average}ms.`)
}
