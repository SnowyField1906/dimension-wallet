import React from 'react'
import { useState, useEffect } from 'react';

import { formatEther } from 'ethers/lib/utils';
import { useEthers, useEtherBalance, Rinkeby, Mainnet } from "@usedapp/core";


function Wallet() {
    const { activateBrowserWallet, deactivate, account } = useEthers();
    const rinkebyBalance = useEtherBalance(account, { chainId: Rinkeby.chainId });
    const mainnetBalance = useEtherBalance(account, { chainId: Mainnet.chainId });

    const [address, setAddress] = useState(false);
    const handleAddress = () => {
        return setAddress(!address);
    };

    return (
        <div>
            {account ?
                <div>
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

                    {rinkebyBalance && <h1>Balance: {rinkebyBalance}</h1>}
                    
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
