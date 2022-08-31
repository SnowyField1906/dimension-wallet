// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.7;

contract upgradeCard {
    address private owner;

    struct Card {
        uint id;
        string name;
        uint price;
    }
    mapping(uint => Card) public cards;
    uint public types;

    struct Purchase {
        Card card;
        uint purchaseDate;
    }

    struct User {
        uint numberOfCards;
        Purchase[] purchase;
        bool exist;
    }
    mapping(address => User) public users;

    modifier isOwner() {
        require(msg.sender == owner, "Caller is not owner");
        _;
    }

    constructor() {
        owner = msg.sender;
        types = 0;
        addCard('Basic', 0);
    }

    /// ///

    function checkExistedUser(address _userAddress) public view returns(bool) {
        return users[_userAddress].exist;
    }


    function showRemainingTime(address _userAddress, uint _id) public view returns(uint) {
        for (uint i = 0; i < users[_userAddress].numberOfCards; i++) {
            if (users[_userAddress].purchase[i].card.id == cards[_id].id) {
                return 30*86400 - (block.timestamp - users[_userAddress].purchase[i].purchaseDate);
            }
        }
        return 0;
    }

    function checkPurchase(address _userAddress, uint _id) public view returns (bool) {
        for (uint i = 0; i < users[_userAddress].numberOfCards; i++) {
            if (users[_userAddress].purchase[i].card.id == cards[_id].id) {
                return true;
            }
        }
        return false;
    }

    ///

    function addCard(string memory _name, uint _price) public isOwner {
        Card storage card = cards[types];
        card.id = block.timestamp;
        card.name = _name;
        card.price = _price;
        types++;
    }

    function removeCard(uint _id) public isOwner {
        for (uint i = _id; i < types - 1; i++){
            cards[i] = cards[i + 1];
        }
        types--;
        delete cards[types];
    }

    function purchaseCard(address _userAddress, uint _id) public {
        require(0 < _id || _id >= types, "Card does not exist");
        User storage user = users[_userAddress];
        if (!checkExistedUser(_userAddress)) {
            user.exist = true;
            user.numberOfCards = 0;
        }
        user.purchase.push(Purchase(cards[_id], block.timestamp));
        user.numberOfCards++;
    }

    function expiredCard(address _userAddress, uint _id) public {
        uint purchaseId;
        for (uint i = 0; i < users[_userAddress].numberOfCards; i++) {
            if (users[_userAddress].purchase[i].card.id == cards[_id].id) {
                purchaseId = i;
                break;
            }
        }
        for (uint i = purchaseId; i < users[_userAddress].numberOfCards - 1; i++) {
            users[_userAddress].purchase[i] = users[_userAddress].purchase[i + 1];
        }
        users[_userAddress].numberOfCards--;
        delete users[_userAddress].purchase[ users[_userAddress].numberOfCards ];
    }

}