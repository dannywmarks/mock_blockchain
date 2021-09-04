export default (blockchain = {blocks: [], loading: false}, action) => {
  switch (action.type) {
    case "FETCH_BLOCKS":
      return {
        ...blockchain,
        blocks: action.payload,
        loading: true
      }
    case "CREATE":
      return blockchain;
    default:
      return blockchain;
  }
};
