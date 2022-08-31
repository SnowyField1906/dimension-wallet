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
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <DAppProvider config={config}>
    <App />
    </DAppProvider>
    </React.StrictMode>
);

reportWebVitals();
