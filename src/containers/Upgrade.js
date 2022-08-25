import { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom';
import { useEthers } from "@usedapp/core";

import { useCards, useNumberOfTypes, useShowPurchasedCards, useShowRemainingDays, useContractMethod } from "../contracts/hooks/";

import Admin from '../components/Upgrade/Admin';
import Cards from '../components/Upgrade/Cards';

function Upgrade() {
    const { account } = useEthers();

    const numberOfTypes = useNumberOfTypes();
    const showPurchasedCards = useShowPurchasedCards();
    const showRemainingDays = useShowRemainingDays();


    const { state: stateAddCard, send: addCard } = useContractMethod("addCard");
    const { state: stateExpriedCard, send: expriedCard } = useContractMethod("expriedCard");
    const { state: statePurchaseCard, send: purchaseCard } = useContractMethod("purchaseCard");
    const { state: stateRemoveCard, send: removeCard } = useContractMethod("removeCard");
    // const { state: checkExistedUserState, send: checkExistedUser } = useContractMethod("checkExistedUser");


    const [addCardState, setAddCardState] = useState({
        name: "",
        price: ""
    });


    const handleAddCardState = (e) => {
        setAddCardState({ ...addCardState, [e.target.name]: e.target.value });
    }

    const handleAddCardAction = () => {
        addCard(addCardState.name, addCardState.price);
    }

    if (!account) {
        return (
            <Navigate to="/Dimension-Wallet/" />
        )
    }
    return (
        <div className='grid h-full justify-items-center'>
            <div className='pt-[10%] w-[80%] flex flex-nowrap snap-mandatory snap-x
            justify-center scrollbar scrollbar-thumb-gray-300 scrollbar-track-gray-500 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full'>
                {numberOfTypes && [...Array(parseInt(numberOfTypes))].map((_, index) => (
                    <Cards
                        index={index + 1}
                    />
                ))}
            </div>

            {account === '0x71A7464FA7b0FDEf51745cD04efcBE4F1484CE4c' &&
                <div className='grid self-center w-[30%]'>
                    <input type="text" name="name" value={addCardState.name} onChange={handleAddCardState}
                        className='mx-5 form-control block w-full px-3 py-1.5 text-base font-normal text-white bg-gray-800 bg-clip-padding border-solid border-2 border-gray-500 rounded transition ease-in-out m-0 focus:text-white focus:bg-gray-800 focus:border-blue-500 focus:outline-none'
                    />
                    <input type="text" name="price" value={addCardState.price} onChange={handleAddCardState}
                        className='mx-5 form-control block w-full px-3 py-1.5 text-base font-normal text-white bg-gray-800 bg-clip-padding border-solid border-2 border-gray-500 rounded transition ease-in-out m-0 focus:text-white focus:bg-gray-800 focus:border-blue-500 focus:outline-none'
                    />
                    <button onClick={handleAddCardAction}
                        className='text-white text-3xl'
                    >Add Card</button>
                </div>
            }
            <div>
                <p className='text-2xl text-center text-white'>Cards: {parseInt(numberOfTypes)}</p>


            </div>



        </div>
    )
}

export default Upgrade
