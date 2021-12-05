import ConnectWallet from './ConnectWallet';
import { useContext } from 'react';
import { Context } from '../Store'

function AppHeader() {

  const [state]:any = useContext(Context);

  const displayNetworkStatusText = () => {
    if (state.walletContextDetected) {
      if (state.onFantomNetwork) {
        return "On Fantom Opera";
      } else {
        return "Please connect to Fantom Opera";
      }
    } else {
      return "Please connect wallet.";
    }
  }

  return (
    <div className="app-header">
      <p>Header</p>
      <ConnectWallet/>
      <p>{ displayNetworkStatusText() }</p>
    </div>
  );
}

export default AppHeader;
