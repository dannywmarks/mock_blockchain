export default (transactionPool = {}, action) => {
  switch (action.type) {
    case "FETCH_TRANSACTION_POOL_MAP":
      return {
      ...transactionPool,
      data: action.payload
      }
    default:
      return transactionPool;
  }
};