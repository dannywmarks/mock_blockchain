import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWalletInfo } from "./actions/blockchain";
import Blocks from "./Blocks/Blocks";
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
        <div className="WalletInfo">
          <div>
            <strong>Address:</strong> {walletInfo.address}
          </div>
          <div>
            <strong>Balance:</strong>
            {walletInfo.balance}
          </div>
        </div>
        <br />
        <Blocks />
      </header>
    </div>
  );
}

export default App;
