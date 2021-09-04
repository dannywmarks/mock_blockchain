import { combineReducers } from "redux";

import wallet from "./wallet";
import blockchain from "./blockchain"

export const reducers = combineReducers({ wallet, blockchain });
