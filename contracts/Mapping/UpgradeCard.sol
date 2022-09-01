// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.7;

contract upgradeCard {
    address private owner;

    struct User {
        uint purchaseDate;
        bool isUsing;
    }    
    struct Card {
        string name;
        uint price;
        uint lifeSpan;
        mapping (address => User) users;
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
        if (_id >= types) {
            return false;
        }
        if (cards[_id].lifeSpan == 0) {
            if (cards[_id].users[msg.sender].purchaseDate != 0 || cards[_id].price == 0) {
                return true;
            }
            return false;
        }
        return cards[_id].users[msg.sender].purchaseDate > block.timestamp - cards[_id].lifeSpan;
    }

    function showPurchaseDate(uint _id) public view returns (uint) {
        if (!checkPurchase(_id)) {
            return 0;
        }
        return cards[_id].users[msg.sender].purchaseDate;
    }

    function showUsing() public view returns (uint) {
        for (uint i = 1; i <= types; i++) {
            if (cards[i].users[msg.sender].isUsing && checkPurchase(i)) {
                return i;
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

    // function deleteCard(uint _id) public isOwner {
    //     require(0 < _id && _id < types, "Card does not exist");
    //     for (uint i = _id; i < types; i++) {
    //         cards[i] = cards[i+1];
    //     }
    //    delete types--;
    // }

    function purchaseCard(uint _id) public {
        require(0 < _id && _id < types, "Card does not exist");
        cards[_id].users[msg.sender].purchaseDate = block.timestamp;
    }

    function switchCard(uint _id) public {
        require(0 <= _id && _id < types, "Card does not exist");
        require(checkPurchase(_id), "Not purchase yet");
        cards[ showUsing() ].users[msg.sender].isUsing = false;
        cards[_id].users[msg.sender].isUsing = true;
    }

    function removeCard(uint _id) public {
        require(0 < _id && _id < types, "Card does not exist");
        require(checkPurchase(_id), "Not purchase yet");
        cards[_id].users[msg.sender].purchaseDate = 0;
        cards[_id].users[msg.sender].isUsing = false;
        switchCard(0);
    }


}