import { useCards, useContractMethod } from "../../contracts/hooks";

import Card from "../Wallet/Card";


function Cards({ index }) {
    const { send: purchaseCard } = useContractMethod("purchaseCard");

    const card = useCards(index);
    // if (!card.name) {
    //     return null;
    // }

    
    if (index === 0) {
        return (
            <div className="item grid place-items-center">
                <Card id={index} />
                <p className=" text-white self-start">BASIC DIMENSION CARD</p>
            </div>
        )
    }


    return (
        <div className="item">
            <p></p>
            <Card id={index} />
            <div className="grid grid-cols-2 grid-rows-2 gap-1 place-items-center">
                <p className="box text-white">Name: {card?.name}</p>
                <p className="box text-white">Price: {parseInt(card?.price)} ETH</p>
                <p className="box row-start-auto row-end-auto col-start-1 col-end-3 text-white">Description: </p>
            </div>
            <button className="rounded-2xl border-2 px-2 py-1 ml-5 text-xl text-white" onClick={() => purchaseCard(index)}>Purchase</button>
        </div>
    )
}

export default Cards