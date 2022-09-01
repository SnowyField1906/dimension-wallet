import { useState } from 'react'
import { useContractMethod } from "../../contracts/hooks";
import { Transition, Dialog } from "@headlessui/react"


function Admin(props) {
    const { send: addCard } = useContractMethod("addCard");
    const { send: deleteCard } = useContractMethod("deleteCard");

    const [addCardState, setAddCardState] = useState({
        name: "",
        price: "",
        lifeSpan: "",
    });

    const [deleteCardState, setDeleteCardState] = useState();

    const handleAddCardState = (e) => {
        setAddCardState({ ...addCardState, [e.target.name]: e.target.value });
    }

    const handleAddCardAction = () => {
        addCard(addCardState.name, addCardState.price, addCardState.lifeSpan);
    }

    const handleDeleteCardState = (e) => {
        setDeleteCardState(e.target.value);
    }

    const handleDeleteCardAction = () => {
        deleteCard(deleteCardState);
    }

    return (
        <Transition appear show={props.modal}>
            <Dialog as="div" className="relative z-10" onClose={props.handleModal}>
                <Transition.Child
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <Transition.Child
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="rounded-lg shadow-lg w-auto my-6 mx-auto max-w-3xl justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
                        <div className="flex-col w-full bg-slate-900">
                            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                <h3 className="text-3xl font-semibold text-white">Administrator mode</h3>
                            </div>

                            <div className="relative p-5 flex-auto">

                                <div className='flex w-full justify-evenly'>
                                    <div className='grid overflow-hidden grid-cols-3 grid-rows-4 gap-x-3 gap-y-1 text-right items-center'>
                                        <p className='box text-white text-xl'>Name</p>
                                        <input type="text" name="name" value={addCardState.name} onChange={handleAddCardState}
                                            className='box col-start-2 col-end-4 form-control block w-full px-3 py-1.5 text-base font-normal text-white bg-gray-800 bg-clip-padding border-solid border-2 border-gray-500 rounded transition ease-in-out focus:text-white focus:bg-gray-800 focus:border-blue-500 focus:outline-none'
                                        />
                                        <p className='box text-white text-xl'>Price</p>
                                        <input type="text" name="price" value={addCardState.price} onChange={handleAddCardState}
                                            className='box col-start-2 col-end-4 form-control block w-full px-3 py-1.5 text-base font-normal text-white bg-gray-800 bg-clip-padding border-solid border-2 border-gray-500 rounded transition ease-in-out focus:text-white focus:bg-gray-800 focus:border-blue-500 focus:outline-none'
                                        />
                                        <p className='box text-white text-xl'>Life span</p>
                                        <input type="text" name="lifeSpan" value={addCardState.lifeSpan} onChange={handleAddCardState}
                                            className='box col-start-2 col-end-4 form-control block w-full px-3 py-1.5 text-base font-normal text-white bg-gray-800 bg-clip-padding border-solid border-2 border-gray-500 rounded transition ease-in-out focus:text-white focus:bg-gray-800 focus:border-blue-500 focus:outline-none'
                                        />
                                        <button onClick={handleAddCardAction} className='box col-start-2 col-end-4 text-white text-3xl'>Add card</button>
                                    </div>
                                    <div className='grid overflow-hidden grid-cols-3 grid-rows-4 gap-x-3 gap-y-1 text-right items-center'>
                                        <p className='box row-start-2 text-white text-xl'>Price</p>
                                        <input type="text" value={deleteCardState} onChange={handleDeleteCardState}
                                            className='box row-start-2 col-start-2 col-end-4 form-control block w-full px-3 py-1.5 text-base font-normal text-white bg-gray-800 bg-clip-padding border-solid border-2 border-gray-500 rounded transition ease-in-out focus:text-white focus:bg-gray-800 focus:border-blue-500 focus:outline-none'
                                        />
                                        <button onClick={handleDeleteCardAction} className='box row-start-3 col-start-2 col-end-4 text-white text-3xl'>Delete card</button>
                                    </div>
                                </div>

                                <div>

                                </div>

                            </div>
                            <div className="flex items-center justify-end p-5 border-t border-solid border-slate-200 rounded-b">
                                <button
                                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={props.handleModal}
                                >
                                    OK!
                                </button>
                            </div>
                        </div>
                    </div>

                </Transition.Child>
            </Dialog>
        </Transition>
    )
}

export default Admin
