import React from 'react'
import { useEthers } from "@usedapp/core";
import { Navigate } from 'react-router-dom';


function Welcome() {
    const { activateBrowserWallet, account } = useEthers();

    if (account) {
        return (
            <Navigate to="Wallet" />
        )
    }

        return (
            <div className='h-full flex justify-items-stretch items-center'>
                <div className='w-[60%] ml-[10%] mr-[50%] place-self-center'>
                    <p className='text-xl text-white'>
                        Next gen Ethereum payments
                    </p>
                    <p className='my-5 font-bold text-7xl bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-violet-600'>
                        Welcome to Dimension Wallet
                    </p>
                    <button onClick={activateBrowserWallet} className='place-self-center relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-full'>
                        <div className="w-full h-full bg-gradient-to-br from-[#cc3eff] via-[#11d3ff] to-[#22ff98] group-hover:from-[#00ff91] group-hover:via-[#00b3ff] group-hover:to-[#b742ff] absolute"></div>
                        <div className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-full group-hover:bg-opacity-0 duration-400">
                            <div className="relative text-white">Connect wallet</div>
                        </div>
                    </button>

                </div>
                <div className='w-[40%] h-[60%] absolute bottom-0 right-5 bg-welcome-image-2 bg-contain bg-center bg-no-repeat'>

                </div>

            </div>
        )
    }

export default Welcome
