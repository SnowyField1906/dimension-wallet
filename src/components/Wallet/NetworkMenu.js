import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

function NetworkMenu({network, setNetwork}) {
    const classNames = (...classes) => {
        return classes.filter(Boolean).join(' ')
    }


    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 w-28">
                    {network ? network : 'Network'}
                    <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                    <Menu.Item>
                            {({ active }) => (
                                <p
                                    onClick={() => setNetwork('Mainnet')}
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    Mainnet
                                </p>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <p
                                    onClick={() => setNetwork('Kovan')}
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    Kovan
                                </p>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <p
                                    onClick={() => setNetwork('Ropsten')}
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    Ropsten
                                </p>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <p
                                    onClick={() => setNetwork('Rinkeby')}
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    Rinkeby
                                </p>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <p
                                    onClick={() => setNetwork('Goerli')}
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    Goerli
                                </p>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

export default NetworkMenu