export default (
  wallet = { address: "", balance: "", loading: false },
  action
) => {
  switch (action.type) {
    case "FETCH_WALLET_INFO":
      return {
        ...wallet,
        address: action.payload.address,
        balance: action.payload.balance,
        loading: true,
      };

    case "CREATE":
      return wallet;

    default:
      return wallet;
  }
};
