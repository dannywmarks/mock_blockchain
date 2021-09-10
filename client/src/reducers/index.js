import { combineReducers } from "redux";

import wallet from "./wallet";
import blockchain from "./blockchain"
import transactionPool from './transactionPool'

export const reducers = combineReducers({ wallet, blockchain,transactionPool });
