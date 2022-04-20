// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract KycContract is Ownable{
    mapping (address => bool) public approved;

    function setKycCompleted(address _addr) public onlyOwner {
        approved[_addr] = true;
    }

    function removeKycRevoked(address _addr) public onlyOwner {
        approved[_addr] = false;
    }

    function kycStatus(address _addr) public view returns(bool) {
        return approved[_addr];
    }
}