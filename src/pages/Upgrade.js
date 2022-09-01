import { useState } from 'react'
import { Navigate } from 'react-router-dom';
import { useEthers } from "@usedapp/core";
import { useTypes } from "../contracts/hooks";

import Admin from '../containers/Upgrade/Admin';
import Cards from '../containers/Upgrade/Cards';

function Upgrade() {
    const { account } = useEthers();

    const types = useTypes();

    const [modal, setModal] = useState(false);
    const handleModal = () => {
        setModal(!modal);
    }

    if (!account) {
        return (
            <Navigate to="/Dimension-Wallet/" />
        )
    }
    return (
        <>
            <Admin modal={modal} handleModal={handleModal} />
            <div className='grid h-full'>
                <div className='grid mt-20 justify-self-center h-[65%] w-[80%]'>
                    <div className='flex justify-between mb-1'>
                        <p className='text-2xl text-center text-white self-end'>Cards on chain: {parseInt(types)}</p>
                        <p className='text-slate-400 text-xs justify-self-end self-end'>*click to see cards' details</p>
                    </div>
                    <div className='flex justify-between snap-mandatory snap-x overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-600 scrollbar-thumb-rounded-full scrollbar-track-rounded-full'>
                        {types && [...Array(parseInt(types))].map((_, index) => (<Cards account={account} index={index} />))}
                    </div>
                    <p className='text-slate-400 text-xs justify-self-end mt-1'>*to make you have fully access to all cards for testing, actual prices are all <strong>0 ETH</strong> + gas price</p>
                </div>
                {account === '0x71A7464FA7b0FDEf51745cD04efcBE4F1484CE4c' &&
                    <button onClick={handleModal} className='fixed bottom-5 right-5 w-20 h-20 rounded-2xl text-xl text-white border-2 hover:bg-black'>Admin role</button>}
            </div>

        </>

    )
}

export default Upgrade
