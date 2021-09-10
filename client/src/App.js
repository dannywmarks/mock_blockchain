import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWalletInfo } from "./actions/blockchain";
import { Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWalletInfo());
  }, [dispatch]);

  const walletInfo = useSelector((state) => state.wallet);

  console.log(walletInfo);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>MoneyShot Blockchain</h1>
        <br />
        <div>
          <Link to="/blocks">Blocks</Link>
        </div>
        <div>
          <Link to="/conduct-transaction">Conduct a transaction</Link>
        </div>
        <div>
          <Link to="/transaction-pool">Transaction Pool</Link>
        </div>
        <div className="WalletInfo">
          <div>
            <strong>Address:</strong> {walletInfo.address}
          </div>
          <div>
            <strong>Balance:</strong>
            {walletInfo.balance}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
