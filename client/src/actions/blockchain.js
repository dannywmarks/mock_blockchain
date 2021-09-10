import * as api from "../api";

export const getWalletInfo = () => async (dispatch) => {
  try {
    const { data } = await api.getWalletInfo();

    dispatch({ type: "FETCH_WALLET_INFO", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getBlocks = () => async (dispatch) => {
  try {
    const { data } = await api.getBlocks();
    console.log(data);

    dispatch({ type: "FETCH_BLOCKS", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const conductTransaction = (transaction) => async (dispatch) => {
  try {
    const { data } = await api.conductTransaction(transaction);
    dispatch({ type: "CONDUCT_TRANSACTION", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getTransactionPool = () => async (dispatch) => {
  try {
    const { data } = await api.getTransactionPool();
    dispatch({ type: "FETCH_TRANSACTION_POOL_MAP", payload: data})
  } catch (error) {
    console.log(error.message);
  }
};

export const mineTransactions = () => async (dispatch) => {
  try {
    const {data} = await api.mineTransactions();
    console.log(data);
    dispatch({ type: "MINE_TRANSCTIONS", payload: data})
  } catch (error) {
    console.log(error.message)
  }
}