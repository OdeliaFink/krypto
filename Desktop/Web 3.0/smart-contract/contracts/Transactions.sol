// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

contract Transactions {
  //like a class in OOP
  uint256 transactionCounter;

  /*like a function*/ event Transfer(address from, address receiver, uint amount, string message, uint256 timestamp, string keyword);
  struct TransferStruct {
    address sender;
    address receiver;
    uint amount;
    string message;
    uint256 timestamp;
    string keyword;
  }
  TransferStruct[] transactions;

  function addToBlockain() public {
    
  }
  function addToBlockain() public {

  }
  function addToBlockain() public {

  }
}
