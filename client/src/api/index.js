import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3001/api/" });

export const getWalletInfo = () => API.get("/wallet-info");
export const getBlocks = () => API.get("/blocks");
export const conductTransaction = (transaction) => API.post("transact", transaction)
export const getTransactionPool = () => API.get("/transaction-pool-map");
export const mineTransactions = () => API.get("/mine-transactions")
