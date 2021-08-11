const express = require("express");
const Blockchain = require("./blockchain");

const app = express();
const blockchain = new Blockchain();

app.get("/api/blocks", async (req, res) => {
  const response = res.json(blockchain.chain);
  console.log(response);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`listening at localhost:${PORT}`);
});
