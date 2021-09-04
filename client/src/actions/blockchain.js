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
    console.log(data)

    dispatch({ type: "FETCH_BLOCKS", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
