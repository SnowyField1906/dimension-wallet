import { useCards } from "../../contracts/hooks/";

import Card from "../Wallet/Card";


function Cards({ index }) {
    const card = useCards(index);
    return (
        <div className="snap-start">
            <Card id={index} />
            <div className="grid place-content-center place-items-center">
                <div className="flex w-full place-self-center justify-between">
                    <p className="text-white">Name: {card?.name}</p>
                    <p className="text-white">Price: {parseInt(card?.price)} ETH</p>
                </div>
                <p className="text-white">Description: </p>
            </div>
        </div>
    )
}

export default Cards
