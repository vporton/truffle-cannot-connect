// SPDX-License-Identifier: LGPL-3.0-or-later
pragma solidity ^0.7.1;
//import { BaseBaseLock } from "./BaseBaseLock.sol";

contract BaseLock /*is BaseBaseLock*/ {
    constructor(string memory uri_) { }

    /// Create a new oracle
    function createOracle() external returns (uint64) {
        return 0; //_createOracle();
    }
}
