import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3001/api/" });

export const getWalletInfo = () => API.get("/wallet-info");
export const getBlocks = () => API.get("/blocks");
