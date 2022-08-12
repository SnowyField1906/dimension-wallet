// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Import this file to use console.log
import "hardhat/console.sol";

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
    function buy(uint _id) public {
        if (!checkExistedUser(msg.sender)) {
            users[msg.sender].numberOfCards = 0;
        }
        users[msg.sender].purchase[users[msg.sender].numberOfCards].card = cards[_id];
        users[msg.sender].purchase[users[msg.sender].numberOfCards].purchaseDate = block.timestamp;
        users[msg.sender].numberOfCards++;
    }

    function showRemainingDate(uint _id) public view returns(uint) {
        for (uint i = 0; i < users[msg.sender].numberOfCards; i++) {
            if (keccak256(abi.encodePacked(users[msg.sender].purchase[i].card.name)) == keccak256(abi.encodePacked(cards[_id].name))) {
                return block.timestamp - users[msg.sender].purchase[i].purchaseDate;
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
        users[msg.sender].numberOfCards--;
        delete users[msg.sender].purchase[purchaseId];
    }
}