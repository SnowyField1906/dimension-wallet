import { NavLink, Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav class="mt-[0px] fixed w-full inset-x-0 top-0' bg-gradient-to-r from-blue-600 to-purple-600">
            <div class="containerHeader md:containerHeaderL">
                <div class="flex items-center md:div">
                    <div class="text-right pb-1 md:flex md:items-end">
                        <div>
                            <Link to='/' class="dm:textLogo1 md:textLogo1L">ETHEREUM</Link>
                        </div>
                        <div>
                            <a href="http://facebook.com/trantieuvann" target="_blank" class="dm:textLogo2 md:textLogo2L">.SnowyField</a>
                        </div>
                    </div>

                    <div class="lg:place-content-around ml-auto">
                            <NavLink to="/Wallet" className={({ isActive }) =>
                                isActive ? ' ' : ' first-line:'}>Your Wallet</NavLink>
                            <NavLink to="/Transaction" className={({ isActive }) =>
                                isActive ? ' ' : ' '}>Transaction</NavLink>
                    </div>

                    <div class="flex ml-auto navTopRightElementsL">
                        <div class="ms:hidden divGrid cursor-pointer transition-colors duration-200 transform rounded-md md:mt-0 bg-blue-800">
                            <h3 class="text-tiny font-medium text-white px-2 pt-1">Nguyễn Hữu Thuận</h3>
                            <h6 class="text-xs font-light text-white px-2 pb-1">aswdqe1x@gmail.com</h6>
                        </div>


                        <button class="mx-4 text-white transition-colors duration-200 hover:text-yellow-500 focus:text-yellow-500 focus:outline-none" aria-label="show notifications">
                            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>

                        <img style={{ borderRadius: 40, height: 40, width: 40 }} src={"https://i.imgur.com/Xq6LPWC.jpeg"} alt="avatar" />

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;