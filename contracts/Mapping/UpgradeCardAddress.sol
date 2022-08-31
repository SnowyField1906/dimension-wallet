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

    function checkPurchase(address _userAddress, uint _id) public view returns (bool) {
        if (cards[_id].lifeSpan == 0) {
            if (cards[_id].user[_userAddress].purchaseDate != 0 || cards[_id].price == 0) {
                return true;
            }
            return false;
        } 
        return cards[_id].user[_userAddress].purchaseDate > block.timestamp - cards[_id].lifeSpan;
    }

    function showPurchaseDate(address _userAddress, uint _id) public view returns (uint) {
        if (checkPurchase(_userAddress, _id)) {
            return 0;
        }
        return cards[_id].user[msg.sender].purchaseDate;
    }

    ///

    function addCard(string memory _name, uint _price, uint _lifeSpan) public isOwner {
        Card storage card = cards[types];
        card.name = _name;
        card.price = _price;
        card.lifeSpan = _lifeSpan;
        types++;
    }


    function purchaseCard(address _userAddress, uint _id) public {
        require(0 < _id || _id > types, "Card does not exist");
        cards[_id].user[_userAddress].purchaseDate = block.timestamp;
    }

    function removeCard(address _userAddress, uint _id) public {
        require(0 < _id || _id > types, "Card does not exist");
        cards[_id].user[_userAddress].purchaseDate = 0;
    }

}