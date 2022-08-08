import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { DAppProvider, Mainnet, Ropsten, Kovan, Rinkeby, Goerli } from '@usedapp/core' 
import { getDefaultProvider } from 'ethers';

const config = {
  readOnlyChainId: Rinkeby.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: getDefaultProvider('mainnet'),
    [Ropsten.chainId]: getDefaultProvider('ropsten'),
    [Kovan.chainId]: getDefaultProvider('kovan'),
    [Rinkeby.chainId]: 'https://rinkeby.infura.io/v3/5b62b841c8c9436d8cce850e719a7014',
    [Goerli.chainId]: getDefaultProvider('goerli')
  },
  network: { Rinkeby },
  notifications: {
    expirationPeriod: 1000,
    checkInterval: 1000,
  },
  gasLimitBufferPercentage: 10,
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DAppProvider config={config}>
    <App />
  </DAppProvider>
);

reportWebVitals();
