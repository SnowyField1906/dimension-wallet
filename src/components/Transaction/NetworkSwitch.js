import React from 'react'
import { Mainnet, Kovan, Ropsten, Rinkeby, Goerli } from "@usedapp/core";

function Network({ setNetworkId }) {

    return (
        <div className="flex items-center justify-center" onFocus={(e) => {setNetworkId(parseInt(e.target.value))}}>
            <div>
                <input name="rating" type="radio" id="1" className="sr-only peer" value={Mainnet.chainId}/>
                <label htmlFor="1" className="rounded-l inline-block px-6 py-2.5 border-2 bg-gray-600 text-white font-medium text-xs leading-tight uppercase peer-hover:bg-blue-600 peer-focus:outline-none peer-checked:bg-blue-700 transition duration-150 ease-in-out">
                Mainnet
                </label>
            </div>
            <div>
                <input name="rating" type="radio" id="2" className="sr-only peer" value={Kovan.chainId}/>
                <label htmlFor="2" className="inline-block px-6 py-2.5 border-2 border-l-0 bg-gray-600 text-white font-medium text-xs leading-tight uppercase peer-hover:bg-blue-600 peer-focus:outline-none peer-checked:bg-blue-700 transition duration-150 ease-in-out">
                Kovan
                </label>
            </div>
            <div>
                <input name="rating" type="radio" id="3" className="sr-only peer" value={Ropsten.chainId}/>
                <label htmlFor="3" className="inline-block px-6 py-2.5 border-2 border-l-0 bg-gray-600 text-white font-medium text-xs leading-tight uppercase peer-hover:bg-blue-600 peer-focus:outline-none peer-checked:bg-blue-700 transition duration-150 ease-in-out">
                Ropsten
                </label>
            </div>
            <div>
                <input name="rating" type="radio" id="4" className="sr-only peer" value={Rinkeby.chainId}/>
                <label htmlFor="4" className="inline-block px-6 py-2.5 border-2 border-l-0 bg-gray-600 text-white font-medium text-xs leading-tight uppercase peer-hover:bg-blue-600 peer-focus:outline-none peer-checked:bg-blue-700 transition duration-150 ease-in-out">
                Rinkeby
                </label>
            </div>

            <div>
                <input name="rating" type="radio" id="5" className="sr-only peer" value={Goerli.chainId}/>
                <label htmlFor="5" className="rounded-r inline-block px-6 py-2.5 border-2 border-l-0 bg-gray-600 text-white font-medium text-xs leading-tight uppercase peer-hover:bg-blue-600 peer-focus:outline-none peer-checked:bg-blue-700 transition duration-150 ease-in-out">
                Goerli
                </label>
            </div>
        </div>
    )
}

export default Network
