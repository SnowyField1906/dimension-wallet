import { React, useState } from 'react'

import { useEthers, useEtherBalance, Mainnet, Kovan, Ropsten, Rinkeby, Goerli } from "@usedapp/core";

import Account from '../components/wallet/AccountAddress';
import NetworkMenu from '../components/wallet/NetworkMenu';
import Balance from '../components/wallet/Balance';


function Wallet() {
    const { activateBrowserWallet, deactivate, account } = useEthers();

    var balance = {
        'Mainnet': useEtherBalance(account, { chainId: Mainnet.chainId }),
        'Ropsten': useEtherBalance(account, { chainId: Ropsten.chainId }),
        'Kovan': useEtherBalance(account, { chainId: Kovan.chainId }),
        'Rinkeby': useEtherBalance(account, { chainId: Rinkeby.chainId }),
        'Goerli': useEtherBalance(account, { chainId: Goerli.chainId })
    };

    const [network, setNetwork] = useState(null);

    if (account) {
        return (
            <div className=''>
                <div class="grid gap-8 items-start justify-center">
                    <div class="relative group">
                        <div class="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                        <div class="relative px-10 py-20 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">

                            <Account account={account} />

                            {
                                balance['Mainnet'] ? (
                                    <div>
                                        <NetworkMenu setNetwork={setNetwork} />
                                        <Balance balance={balance} network={network} />
                                    </div>
                                ) :
                                    <p className='text-white font-semibold text-xl'>loading...</p>

                            }

                        </div>
                    </div>
                </div>

                <div class="mx-20 relative w-[307px] h-[183px] bg-card rounded-lg">
                    <div class="h-[65%]">
                        <p class="text-xl text-white">
                            {account.substring(0, 10) + '...' + account.substring(account.length - 4, account.length)}
                        </p>
                        <p class="text-3xl font-bold text-[#7B7B7B]">
                            ¥56,234
                        </p>
                    </div>

                    <div class="flex w-full h-[35%] bg-black bg-opacity-20 rounded-b-lg">

                        <div className='grid justify-items-stretch items-center'>
                            <div className='flex px-3 mt-3'>
                                <svg className="w-6 h-6 mx-2" style={{ color: "white" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" >
                                    <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" fill="white" />
                                </svg>
                                <Balance balance={balance} network={network} />
                            </div>
                            <p className='px-6 mb-2 text-white text-[0.7rem] font-thin'>Balance</p>
                        </div>

                        <div className='grid absolute right-7 px-2 justify-items-center '>
                            <svg className='absolute right-7 opacity-50 h-8 w-8 justify-self-center' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white">
                                <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                            </svg>
                            <p className='text-right text-white text-[0.7rem] font-thin'>{network}</p>
                        </div>
                    </div>

                </div>

                <button onClick={deactivate}
                    className='rounded-2xl bg-red-600 hover:bg-red-800 px-4 py-3 m-2 text-white text-2xl font-semibold'>Disconnect</button>
            </div >
        )
    }

    else {
        return (
            <div className='flex justify-center'>

                <button onClick={activateBrowserWallet} className='rounded-2xl bg-indigo-600 hover:bg-indigo-800 px-4 py-3 m-2 text-white text-2xl font-semibold'> Connect </button>
            </div>
        )
    }
}

export default Wallet
