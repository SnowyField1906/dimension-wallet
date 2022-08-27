// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.7;

contract upgradeCard {
    address private owner;

    struct Card {
        string name;
        uint price;
    }
    mapping(uint => Card) public cards;
    uint public numberOfTypes;

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
        numberOfTypes = 0;
        // addCard('Basic', 0);
    }

    /// ///

    function addCard(string memory _name, uint _price) public isOwner {
        Card storage card = cards[numberOfTypes];
        card.name = _name;
        card.price = _price;
        numberOfTypes++;
    }

    function removeCard(uint _id) public isOwner {
        for (uint i = _id; i < numberOfTypes - 1; i++){
            cards[i] = cards[i + 1];
        }
        numberOfTypes--;
        delete cards[numberOfTypes];
    }

    function checkExistedUser(address _userAddress) public view returns(bool) {
        return users[_userAddress].exist;
    }

    function purchaseCard(uint _id) public {
        require(0 < _id || _id >= numberOfTypes, "Card does not exist");
        User storage user = users[msg.sender];
        if (!checkExistedUser(msg.sender)) {
            user.exist = true;
            user.numberOfCards = 0;
        }
        user.purchase.push(Purchase(cards[_id], block.timestamp));
        user.numberOfCards++;
    }

    function showRemainingDate(uint _id) public view returns(uint) {
        for (uint i = 0; i < users[msg.sender].numberOfCards; i++) {
            if (keccak256(abi.encodePacked(users[msg.sender].purchase[i].card.name)) == keccak256(abi.encodePacked(cards[_id].name))) {
                return 30*86400 - (block.timestamp - users[msg.sender].purchase[i].purchaseDate);
            }
        }
        return 0;
    }

    function showPurchasedCards() public view returns (Purchase[] memory) {
        return users[msg.sender].purchase;
    }

    function expiredCard(uint _id) public {
        uint purchaseId;
        for (uint i = 0; i < users[msg.sender].numberOfCards; i++) {
            if (keccak256(abi.encodePacked(users[msg.sender].purchase[i].card.name)) == keccak256(abi.encodePacked(cards[_id].name))) {
                purchaseId = i;
                break;
            }
        }
        for (uint i = purchaseId; i < users[msg.sender].numberOfCards - 1; i++) {
            users[msg.sender].purchase[i] = users[msg.sender].purchase[i + 1];
        }
        users[msg.sender].numberOfCards--;
        delete users[msg.sender].purchase[ users[msg.sender].numberOfCards ];
    }

}