import { React, useState } from 'react'

function Account({account}) {
    const [address, setAddress] = useState(false);

    const handleAddress = () => {
        return setAddress(!address);
    };

    return (
        <div className='flex'>
            <h1 className='self-center text-xl text-white'>Account address: {address ? account :
                (account.substring(0, 10) + '...' + account.substring(account.length - 4, account.length))}
            </h1>
            <button onClick={() => handleAddress()} className='rounded-2xl border-2 px-2 py-1 ml-5 text-xl text-white'>{address ? 'hide' : 'show'}</button>
        </div>
    )
}

export default Account
