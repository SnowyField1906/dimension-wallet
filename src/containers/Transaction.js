import { useState, useRef, useEffect } from 'react'
import { Navigate } from 'react-router-dom';
import { useEthers, useSendTransaction } from "@usedapp/core";

import NetworkSwitch from '../components/Transaction/NetworkSwitch';

function Transaction() {
    const { account, switchNetwork } = useEthers()
    const { sendTransaction, state } = useSendTransaction()

    var status = state.status

    const [address, setAddress] = useState()
    const [amount, setAmount] = useState()

    const [networkId, setNetworkId] = useState()

    const ref = useRef();
    useEffect(() => {
        ref.current = networkId;
    }, [networkId]);

    const send = async (amountWei) => {
        await switchNetwork(networkId)
        if (networkId !== ref.current) {
            status = 'network has not changed'
        }
        sendTransaction({ to: address, value: amountWei.toString() })
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

                <NetworkSwitch setNetworkId={setNetworkId} />

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
