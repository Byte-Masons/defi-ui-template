import React, { useContext, useEffect }  from 'react';
import { Context } from '../Store';
import { ethers } from 'ethers';

import AppHeader from './AppHeader';

import { initializeEthers } from '../functions/ethersFunctions';

import '../styling/App.css';

declare const window:any;

function App() {

  const [state, dispatch]:any = useContext(Context);

  const checkMetaMaskContext = () => {
    try {
      new ethers.providers.Web3Provider(window.ethereum);
      return true;
    } catch {
      return false;
    }
  }

  useEffect(() => {
    if (checkMetaMaskContext()) {
      initializeEthers(dispatch);
      window.ethereum.on("chainChanged", (chainId:string) => {
        if (chainId === "0xfa") {
          dispatch({type: "onFantomNetwork", content: true});
        } else {
          dispatch({type: "onFantomNetwork", content: false});
        }
      });
    }
  }, []);

  return (
    <div className="App">
      <AppHeader/>
    </div>
  );
}

export default App;
