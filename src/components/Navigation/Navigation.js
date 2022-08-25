import { NavLink, Link } from 'react-router-dom';
import { useEthers } from "@usedapp/core";

function Navigation() {
    const { activateBrowserWallet, deactivate, account } = useEthers();

    return (
        <nav class="flex fixed w-full inset-x-0 top-5 items-center place-items-center justify-items-center">
            <Link to='Dimension-Wallet/' class="w-[20%] font-bold text-white text-3xl text-center font-sans">Dimension</Link>

            <div class="w-[55%] px-[5%] flex items-center place-items-center justify-items-center place-content-around transition-all duration-200 ease-in-out">
                <NavLink to="Dimension-Wallet/Wallet" className={({ isActive }) =>
                    isActive ? 'text-lg text-white bg-bottom bg-gradient-to-r from-white to-white bg-no-repeat bg-[length:100%_2px]' : 'text-lg text-gray-400 bg-bottom bg-gradient-to-r from-gray-300 to-gray-300 bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-200 ease-out'}>Your Wallet</NavLink>
                <NavLink to="Dimension-Wallet/Transaction" className={({ isActive }) =>
                    isActive ? 'text-lg text-white bg-bottom bg-gradient-to-r from-white to-white bg-no-repeat bg-[length:100%_2px]' : 'text-lg text-gray-400 bg-bottom bg-gradient-to-r from-gray-300 to-gray-300 bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-200 ease-out'}>Transaction</NavLink>
                <NavLink to="Dimension-Wallet/Upgrade" className={({ isActive }) =>
                    isActive ? 'text-lg text-white bg-bottom bg-gradient-to-r from-white to-white bg-no-repeat bg-[length:100%_2px]' : 'text-lg text-gray-400 bg-bottom bg-gradient-to-r from-gray-300 to-gray-300 bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-200 ease-out'}>Upgrade Card</NavLink>
                <NavLink to="Dimension-Wallet/About" className={({ isActive }) =>
                    isActive ? 'text-lg text-white bg-bottom bg-gradient-to-r from-white to-white bg-no-repeat bg-[length:100%_2px]' : 'text-lg text-gray-400 bg-bottom bg-gradient-to-r from-gray-300 to-gray-300 bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-200 ease-out'}>About</NavLink>
            </div>

            <div class="w-[25%] grid">
                {account ?
                    <button onClick={deactivate} className='place-self-center relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-full'>
                        <div class="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00ea] group-hover:via-[#ff0073] group-hover:to-[#ff5d3d] absolute"></div>
                        <div class="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-full group-hover:bg-opacity-0 duration-400">
                            <div class="relative text-white">Disconnect</div>
                        </div>
                    </button>
                    :
                    <button onClick={activateBrowserWallet} className='place-self-center relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-full'>
                        <div class="w-full h-full bg-gradient-to-br from-[#cc3eff] via-[#11d3ff] to-[#22ff98] group-hover:from-[#00ff91] group-hover:via-[#00b3ff] group-hover:to-[#b742ff] absolute"></div>
                        <div class="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-full group-hover:bg-opacity-0 duration-400">
                            <div class="relative text-white">Connect wallet</div>
                        </div>
                    </button>
                }
            </div>
        </nav >
    )
}

export default Navigation;