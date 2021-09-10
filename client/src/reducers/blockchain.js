export default (blockchain = {blocks: [], loading: true}, action) => {
  switch (action.type) {
    case "FETCH_BLOCKS":
      return {
        ...blockchain,
        blocks: action.payload,
        loading: false
      }
    case "MINE_TRANSACTIONS":
      return {
        ...blockchain,
        blocks: action.payload,
        loading: false
      }
    default:
      return blockchain;
  }
};
