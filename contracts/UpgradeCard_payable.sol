// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract upgradeCard {
    address private owner;

    struct Card {
        string name;
        uint256 price;
    }
    mapping(uint => Card) public cards;
    uint public numberOfTypes;

    struct Purchase {
        Card card;
        uint256 purchaseDate;
    }

    struct User {
        address userAddress;
        uint256 numberOfCards;
        Purchase[] purchase;
    }
    mapping(address => User) public users;

    modifier isOwner() {
        require(msg.sender == owner, "Caller is not owner");
        _;
    }

    constructor() {
        owner = msg.sender;
        numberOfTypes = 0;
    }

    /// ///

    function addCard(string memory _name, uint _price) public isOwner {
        Card storage card = cards[numberOfTypes];
        card.name = _name;
        card.price = _price;

        numberOfTypes++;
    }

    function removeCard(uint _id) public isOwner {
        numberOfTypes--;
        delete cards[_id];
    }

    function checkExistedUser(address _userAddress) public view returns(bool) {
        if (users[_userAddress].userAddress == _userAddress) {
            return true;
        }
        else {
            return false;
        }
    }
    function buy(uint _id) external payable {
        require(msg.value == cards[_id].price, 'not enough balance');

        if (checkExistedUser(msg.sender)) {
            users[msg.sender].numberOfCards++;
        }
        else {
            users[msg.sender].numberOfCards = 1;
        }
        users[msg.sender].purchase[users[msg.sender].numberOfCards].card = cards[_id];
        users[msg.sender].purchase[users[msg.sender].numberOfCards].purchaseDate = block.timestamp;
        payable (msg.sender).transfer(cards[_id].price);
    }

    function showRemainingDate(uint _id) public view returns(uint) {
        for (uint i = 0; i < users[msg.sender].numberOfCards; i++) {
            if (keccak256(abi.encodePacked(users[msg.sender].purchase[i].card.name)) == keccak256(abi.encodePacked(cards[_id].name))) {
                return block.timestamp - users[msg.sender].purchase[i].purchaseDate;
            }
        }
        return 0;
    }

    function getBalance() public view returns(uint256) {
        return msg.sender.balance;
    }

    function showPurchasedCards() public view returns (Purchase[] memory) {
        return users[msg.sender].purchase;
    }

    function refund(uint _id, uint _day) external payable {
        uint purchaseId;
        for (uint i = 0; i < users[msg.sender].numberOfCards; i++) {
            if (keccak256(abi.encodePacked(users[msg.sender].purchase[i].card.name)) == keccak256(abi.encodePacked(cards[_id].name))) {
                purchaseId = i;
                break;
            }
        }

        if (_day - users[msg.sender].purchase[purchaseId].purchaseDate <= 86400) {
            require(msg.value == cards[_id].price/2);
            payable (msg.sender).transfer(cards[_id].price/2);
        }
        else {
            require(msg.value == cards[_id].price / (30 - (_day - users[msg.sender].purchase[purchaseId].purchaseDate)%86400));
            payable (msg.sender).transfer(cards[_id].price / (30 - (_day - users[msg.sender].purchase[purchaseId].purchaseDate)%86400));
        }
        users[msg.sender].numberOfCards--;
        delete users[msg.sender].purchase[purchaseId];
    }

    function expiredCard(uint _id) public {
        uint purchaseId;
        for (uint i = 0; i < users[msg.sender].numberOfCards; i++) {
            if (keccak256(abi.encodePacked(users[msg.sender].purchase[i].card.name)) == keccak256(abi.encodePacked(cards[_id].name))) {
                purchaseId = i;
                break;
            }
        }
        users[msg.sender].numberOfCards--;
        delete users[msg.sender].purchase[purchaseId];
    }
    
}