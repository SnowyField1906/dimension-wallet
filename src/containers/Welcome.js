import React from 'react'

function Welcome({activateBrowserWallet}) {
    return (
        <div className='flex justify-center'>
            <button onClick={activateBrowserWallet} className='rounded-2xl bg-indigo-600 hover:bg-indigo-800 px-4 py-3 m-2 text-white text-2xl font-semibold'> Connect </button>
        </div>
    )
}

export default Welcome
