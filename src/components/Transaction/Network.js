import React from 'react'

function Network() {
    return (
        <div class="flex items-center justify-center">
            <div class="inline-flex" role="group">
                <button type="button"
                    class="rounded-l inline-block px-6 py-2.5 border-2 bg-gray-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out">
                    Mainnet
                </button>
                <button
                    type="button"
                    class="inline-block px-6 py-2.5 border-2 border-l-0 bg-gray-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out">
                    Kovan
                </button>
                <button
                    type="button"
                    class="inline-block px-6 py-2.5 border-2 border-l-0 bg-gray-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out">
                    Ropsten
                </button>
                <button
                    type="button"
                    class="inline-block px-6 py-2.5 border-2 border-l-0 bg-gray-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out">
                    Rinkeby
                </button>
                <button
                    type="button"
                    class="rounded-r inline-block px-6 py-2.5 border-2 border-l-0 bg-gray-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out">
                    Goerli
                </button>
            </div>
        </div>
    )
}

export default Network
