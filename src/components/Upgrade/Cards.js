import { useState } from "react";

import { useCards, useCheckPurchase, useShowPurchaseDate, useContractMethod } from "../../contracts/hooks";

import Card from "../Wallet/Card";


function Cards({ account, index }) {
    const { send: purchaseCard } = useContractMethod("purchaseCard");
    const { send: removeCard } = useContractMethod("removeCard");

    const checkPurchase = useCheckPurchase(account, index)?.[0];
    const showPurchaseDate = useShowPurchaseDate(account, index);


    const [remainingTime] = useState(Math.floor(Date.now() / 1000) - parseInt(showPurchaseDate));

    function convertTime(time) {
        var hours = Math.floor(time / 3600);
        var minutes = Math.floor((time - (hours * 3600)) / 60);
        var seconds = time - (hours * 3600) - (minutes * 60);

        if (hours < 10) { hours = "0" + hours; }
        if (minutes < 10) { minutes = "0" + minutes; }
        if (seconds < 10) { seconds = "0" + seconds; }
        return hours + ':' + minutes + ':' + seconds;
    }

    const card = useCards(index);

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
        <div className="item">
            <Card id={index} />
            <div className="grid grid-cols-2 grid-rows-2 gap-1 place-items-center">
                <p className="box text-white">Name: {card?.name}</p>
                <p className="box text-white">Price: {parseInt(card?.price)} ETH</p>
                <p className="box text-white ">Life span: {card?.lifeSpan !== 0 ? convertTime(parseInt(card?.lifeSpan)) : "Unlimited"}</p>
                <p className="box row-start-auto row-end-auto col-start-1 col-end-3 text-white">{checkPurchase ? convertTime(remainingTime) : "not buy yet"} </p>
            </div>
            {checkPurchase ?
                <button className="rounded-2xl px-2 py-1 ml-5 text-xl text-white" onClick={() => removeCard(account, index)}>Remove</button>
                :
                <button className="rounded-2xl px-2 py-1 ml-5 text-xl text-white" onClick={() => purchaseCard(account, index)}>Purchase</button>}
        </div>
    )
}

export default Cards