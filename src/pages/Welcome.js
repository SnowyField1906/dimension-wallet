import { useState } from 'react'
import { useEthers } from "@usedapp/core";
import { Navigate } from 'react-router-dom';

import Guide from '../components/Welcome/Guide';

function Welcome() {
    const { activateBrowserWallet, account } = useEthers();
    const [modal, setModal] = useState(false);

    const handleModal = () => {
        setModal(!modal);
    }

    if (account) {
        return (
            <Navigate to="Wallet" />
        )
    }

    return (
        <div className='h-full flex justify-items-stretch items-center'>
            <Guide modal={modal} handleModal={handleModal} />

            <div className='w-[60%] ml-[10%] mr-[50%] place-self-center'>
                <p className='text-xl text-white'>
                    Next gen Ethereum payments
                </p>
                <p className='my-5 font-bold text-7xl bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-violet-600'>
                    Welcome to Dimension Wallet
                </p>
                <div className='w-[65%] flex justify-around mt-8'>
                    <button onClick={activateBrowserWallet} className='item place-self-center relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-full'>
                        <div className="w-full h-full bg-gradient-to-br from-[#cc3eff] via-[#11d3ff] to-[#22ff98] group-hover:from-[#00ff91] group-hover:via-[#00b3ff] group-hover:to-[#b742ff] absolute"></div>
                        <div className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-full group-hover:bg-opacity-0 duration-400">
                            <div className="relative text-white">Connect wallet</div>
                        </div>
                    </button>
                    <button onClick={handleModal} className='item place-self-center relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-full transition duration-500 ease-in-out hover:bg-green-400 transform hover:-translate-y-1 animate-bounce'>
                        <div className="w-full h-full bg-gradient-to-br from-[#c23eff] via-[#8411ff] to-[#ff2298] group-hover:from-[#ff00b7] group-hover:via-[#8000ff] group-hover:to-[#dc42ff] absolute"></div>
                        <div className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-full group-hover:bg-opacity-0 duration-400">
                            <div className="relative text-white ">How to use?</div>
                        </div>
                    </button>
                </div>

            </div>
            <div className='w-[40%] h-[60%] absolute bottom-0 right-5 bg-welcome-image-2 bg-contain bg-center bg-no-repeat'>
            </div>

        </div>
    )
}

export default Welcome
