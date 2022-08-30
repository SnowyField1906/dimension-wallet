import { useCards, useCheckPurchase, useShowRemainingTime, useContractMethod } from "../../contracts/hooks";

import Card from "../Wallet/Card";


function Cards({ index }) {
    const { send: purchaseCard } = useContractMethod("purchaseCard");
    
    const checkPurchase = !!useCheckPurchase(index);
    const showRemainingDate = useShowRemainingTime(index);

    console.log(checkPurchase);
    console.log(parseInt(showRemainingDate));


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
                <p className="box row-start-auto row-end-auto col-start-1 col-end-3 text-white">Description: </p>
            </div>
            {checkPurchase &&

                <button className="rounded-2xl px-2 py-1 ml-5 text-xl text-white" disabled>Purchased</button>
            }
        </div>
    )
}

export default Cards