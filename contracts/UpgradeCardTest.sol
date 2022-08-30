    // SPDX-License-Identifier: UNLICENSED
    pragma solidity ^0.8.7;

    contract upgradeCard {
        address private owner;

        struct User {
            uint purchaseDate;
        }

        struct Card {
            string name;
            uint price;
            uint lifeSpan;
            mapping (address => User) user;
        }
        mapping(uint => Card) public cards;
        uint public types;

        modifier isOwner() {
            require(msg.sender == owner, "Caller is not owner");
            _;
        }

        constructor() {
            owner = msg.sender;
            types = 0;
            addCard("Basic", 0, 0);
        }

        /// ///

        function checkPurchase(uint _id) public view returns (bool) {
            return cards[_id].user[msg.sender].purchaseDate > block.timestamp - cards[_id].lifeSpan;
        }

        function showRemainingTime(uint _id) public view returns (uint) {
            if (checkPurchase(_id)) {
                if (cards[_id].lifeSpan != 0) {
                    return cards[_id].lifeSpan - (block.timestamp - cards[_id].user[msg.sender].purchaseDate);
                }
                else {
                    return -1;
                }
            }
            return 0;
        }

        ///

        function addCard(string memory _name, uint _price, uint _lifeSpan) public isOwner {
            Card storage card = cards[types];
            card.name = _name;
            card.price = _price;
            card.lifeSpan = _lifeSpan;
            types++;
        }

        // function removeCard(uint _id) public isOwner {
        //     for (uint i = _id; i < types - 1; i++){
        //         cards[i] = cards[i + 1];
        //     }
        //     types--;
        //     delete cards[types];
        // }

        function purchaseCard(uint _id) public {
            require(0 < _id || _id >= types, "Card does not exist");
            cards[_id].user[msg.sender].purchaseDate = block.timestamp;
        }
    }