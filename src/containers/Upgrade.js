import { useState } from 'react'
import { Navigate } from 'react-router-dom';
import { useEthers } from "@usedapp/core";

import { useCount, useContractMethod } from "../contracts/hooks/";


function Upgrade() {
    const { account } = useEthers();
    const count = useCount();
    
    const { state, send: incrementCount } = useContractMethod("incrementCount");
    const { state: setCountState, send: setCount } = useContractMethod("setCount");
    const [input, setInput] = useState("");

    function handleIncrement() {
        incrementCount();
    }

    function handleSetCount() {
        setCount(input);
    }

    function handleInput(valueAsString) {
        setInput(valueAsString);
    }

    if (!account) {
        return (
            <Navigate to="/dApp-useDApp-project/" />
        )
    }
    return (
        <div className='grid h-full'>
            <button className='text-white self-center place-self-center text-3xl'>
                {count ? parseInt(count) : 0}
            </button>
            <button className='text-white self-center place-self-center text-3xl' onClick={handleIncrement}>
                increment
            </button>
            <input className='text-gray-900 self-center place-self-center text-3xl' type='number' onChange={(e) => handleInput(e.target.value)} />
            <button className='text-white self-center place-self-center text-3xl' onClick={handleSetCount}>
                set count
            </button>

        </div>
    )
}

export default Upgrade
