import { useState } from 'react'
import { Navigate } from 'react-router-dom';
import { useEthers, useSendTransaction } from "@usedapp/core";

import Network from '../components/Transaction/Network';

function Transaction() {
    const { account } = useEthers()
    const { sendTransaction, state } = useSendTransaction()

    const status = state.status

    const [network, setNetwork] = useState(null)
    const [address, setAddress] = useState(null)
    const [amount, setAmount] = useState(null)

    const send = (amountWei) => {
        void sendTransaction({ to: address, value: amountWei.toString() })
    }

    const amountHandle = e => {
        setAmount(e.target.value)
        if (e.target.value < 0 || e.target.value > 100) {
            send(e.target.value)
        }
    }

    if (!account) {
        return (
            <Navigate to="/dApp-useDApp-project/" />
        )
    }
    return (
        <div className='grid h-full'>
            <div className='h-[50%] w-[50%] grid justify-center place-items-center place-self-center border-[3px] rounded-xl border-gray-500'>
                <Network />
                <div className='flex'>
                    <p className='text-white text-2xl'>Address</p>
                    <input type='text' value={address} onChange={e => setAddress(e.target.value)}
                        className='mx-5 form-control block w-full px-3 py-1.5 text-base font-normal text-white bg-gray-800 bg-clip-padding border-solid border-2 border-gray-500 rounded transition ease-in-out m-0 focus:text-white focus:bg-gray-800 focus:border-blue-500 focus:outline-none'
                    />
                </div>
                <div className='flex'>
                    <p className='text-white text-2xl'>Amount</p>
                    <input type='number' value={amount} onChange={(e) => amountHandle(e)}
                        className='mx-5 form-control block w-full px-3 py-1.5 text-base font-normal text-white bg-gray-800 bg-clip-padding border-solid border-2 border-gray-500 rounded transition ease-in-out m-0 focus:text-white focus:bg-gray-800 focus:border-blue-500 focus:outline-none'
                    />
                </div>

                <button className='text-white text-3xl' onClick={() => send(amount * Math.pow(10, 18))}>Send ether</button>
                <p className='text-white'>Status: {status}</p>
            </div>
        </div>
    )
}

export default Transaction
