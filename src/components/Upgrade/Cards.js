import { useCards } from "../../contracts/hooks/";

import Card from "../Wallet/Card";


function Cards({ index }) {
    const card = useCards(index);
    return (
        <div className="snap-start">
            <Card id={index} />
            <div className="grid grid-cols-2 grid-rows-2 gap-2 place-items-center">
                    <p className="box text-white text-left">Name: {card?.name}</p>
                    <p className="box text-white text-right">Price: {parseInt(card?.price)} ETH</p>
                <p className="box row-start-auto row-end-auto col-start-1 col-end-3 text-white">Description: </p>
            </div>
        </div>
    )
}

export default Cards
