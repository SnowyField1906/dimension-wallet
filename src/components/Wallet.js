import React from 'react'
import { useState, useEffect } from 'react';

import { formatEther } from 'ethers/lib/utils';
import { useEthers, useEtherBalance, Mainnet, Kovan, Ropsten, Rinkeby, Goerli } from "@usedapp/core";

import BalanceMenu from './BalanceMenu';


function Wallet() {
    const { activateBrowserWallet, deactivate, account } = useEthers();
    const mainnetBalance = useEtherBalance(account, { chainId: Mainnet.chainId });
    const ropstenBalance = useEtherBalance(account, { chainId: Ropsten.chainId });
    const kovanBalance = useEtherBalance(account, { chainId: Kovan.chainId });
    const rinkebyBalance = useEtherBalance(account, { chainId: Rinkeby.chainId });
    const goerliBalance = useEtherBalance(account, { chainId: Goerli.chainId });

    const [address, setAddress] = useState(true);
    const [balance, setBalance] = useState(null)

    const handleAddress = () => {
        return setAddress(!address);
    };


    return (
        <div className='overflow-visible'>
            {account ?
                <div className='flex'>
                    {address ?
                        <div className='flex'>
                            <h1 className='self-center text-xl'>Account address: {account.substring(0, 10) + '...' + account.substring(account.length - 4, account.length)}</h1>
                            <button onClick={() => handleAddress()} className='rounded-2xl border-2 px-2 py-1 ml-5 text-xl'>show</button>
                        </div>
                        :
                        <div className='flex'>
                            <h1 className='self-center text-xl'>Account address: {account}</h1>
                            <button onClick={() => handleAddress()} className='rounded-2xl border-2 px-2 py-1 ml-5 text-xl'>hide</button>
                        </div>
                    }
                    <BalanceMenu setBalance={setBalance} />

                    {rinkebyBalance && kovanBalance ?
                        
                        ((balance == 'Mainnet') ? <h1>{balance + ' balance: ' + formatEther(mainnetBalance).substring(0, 5) + ' ETH'}</h1>
                            : (balance == 'Ropsten') ? <h1>{balance + ' balance: ' + formatEther(ropstenBalance).substring(0, 5) + ' ETH'}</h1>
                            : (balance == 'Kovan') ? <h1>{balance + ' balance: ' + formatEther(kovanBalance).substring(0, 5) + ' ETH'}</h1>
                            : (balance == 'Rinkeby') ? <h1>{balance + ' balance: ' + formatEther(rinkebyBalance).substring(0, 5) + ' ETH'}</h1>
                            : (balance == 'Goerli') ? <h1>{balance + ' balance: ' + formatEther(goerliBalance).substring(0, 5) + ' ETH'}</h1>
                        : <h1>choose network</h1>)
                        
                    :
                        <h1>Loading...</h1>}

                    <button onClick={deactivate}
                        className='rounded-2xl bg-red-600 hover:bg-red-800 px-4 py-3 m-2 text-white text-2xl font-semibold'>Disconnect</button>
                </div>
                :
                <button onClick={activateBrowserWallet} className='rounded-2xl bg-indigo-600 hover:bg-indigo-800 px-4 py-3 m-2 text-white text-2xl font-semibold'> Connect </button>
            }

        </div>

    )
}

export default Wallet
