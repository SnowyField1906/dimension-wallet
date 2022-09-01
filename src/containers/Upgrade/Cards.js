import { useState } from "react";

import { useCards, useCheckPurchase, useShowPurchaseDate, useContractMethod } from "../../contracts/hooks";

import Card from "../Wallet/Card";
import Detail from "../../components/Upgrade/Cards/Detail";


function Cards({ account, index }) {
    const { send: purchaseCard } = useContractMethod("purchaseCard");
    const { send: removeCard } = useContractMethod("removeCard");
    const { send: switchCard } = useContractMethod("switchCard");

    const checkPurchase = useCheckPurchase(account, index)?.[0];
    const showPurchaseDate = useShowPurchaseDate(account, index);


    const card = useCards(index);

    const [modal, setModal] = useState(false);
    const handleModal = () => {
        setModal(!modal);
    }

    const [remainingTime, setRemainingTime] = useState(null);
    setTimeout(() => {
        setRemainingTime(parseInt(card?.lifeSpan) + parseInt(showPurchaseDate) - 35 - Math.floor(Date.now() / 1000));
    }, 1000);

    function convertTime(time) {
        var hours = Math.floor(time / 3600);
        var minutes = Math.floor((time - (hours * 3600)) / 60);
        var seconds = time - (hours * 3600) - (minutes * 60);

        if (hours < 10) { hours = "0" + hours }
        if (minutes < 10) { minutes = "0" + minutes }
        if (seconds < 10) { seconds = "0" + seconds }
        return hours + ':' + minutes + ':' + seconds
    }

    if (index === 0) {
        return (
            <div className="item">
                <Card id={index} />
                <div className="grid justify-items-center">
                    <p className="item text-white">BASIC DIMENSION CARD</p>
                </div>
            </div>
        )
    }

    return (
        <div className="item grid m-1 mb-5 p-2 rounded-xl ring-transparent hover:ring-4 hover:ring-indigo-600 focus:ring-indigo-600">
            <Detail id={index} modal={modal} handleModal={handleModal} card={card} checkPurchase={checkPurchase} showPurchaseDate={showPurchaseDate} />
            <div onClick={handleModal}>
                <Card id={index} />
            </div>

            <div className="grid grid-cols-2 grid-rows-2 gap-1 place-items-center">
                <p className="box text-white">Name: {card?.name}</p>
                <p className="box text-white">Price: {parseInt(card?.price)} ETH</p>
                {/* <p className="box text-white ">Life span: {card?.lifeSpan != 0 ? convertTime(parseInt(card?.lifeSpan)) : "Unlimited"}</p> */}
                <p className="box row-start-auto row-end-auto col-start-1 col-end-3 text-white">{checkPurchase ? convertTime(remainingTime) : "not buy yet"} </p>
            </div>

            {checkPurchase ?
                <div className="flex justify-between">
                    <button className="w-[49%] h-full rounded-2xl py-1 text-xl text-white border-2 hover:bg-black" onClick={() => switchCard(account, index)}>Switch</button>
                    <button className="w-[49%] h-full rounded-2xl py-1 text-xl text-white border-2 hover:bg-black" onClick={() => removeCard(account, index)}>Remove</button>
                </div>
                :
                <button className="rounded-2xl py-1 text-xl text-white border-2 hover:bg-black" onClick={() => purchaseCard(account, index)}>Purchase</button>}
        </div>
    )
}

export default Cards