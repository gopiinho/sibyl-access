// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.15;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SibylAccess is ERC721, Ownable {
    uint256 public mintPrice;
    uint256 public totalSupply;
    uint256 public maxSupply;
    uint256 public maxPerWallet;
    bool public isMintEnabled;
    address payable private withdrawWallet;

    mapping(address => uint256) public walletMints;

    constructor() payable ERC721("Sibyl Mind", "SBYL") {
        mintPrice = 0.05 ether;
        totalSupply = 0;
        maxSupply = 247;
        maxPerWallet = 1;
        isMintEnabled = false;
        withdrawWallet = payable(msg.sender);
    }

    function setMintEnabled(bool _isMintEnabled) external onlyOwner {
        isMintEnabled = _isMintEnabled;
    }

    function withdrawBalance() external onlyOwner {
        (bool success, ) = withdrawWallet.call{value: address(this).balance}("");
        require(success, "Withdraw failed!");
    }

    function mint(uint256 _quantity) public payable {
        require(isMintEnabled, "Mint is not yet available!");
        require(totalSupply + _quantity <= maxSupply, "Max supply reached!");
        require(msg.value == _quantity * mintPrice, "Wrong Mint Value");
        require(walletMints[msg.sender] + _quantity <= maxPerWallet, "Cannot mint more than 1!");

        for (uint256 i = 0; i < _quantity; i++) {
            uint256 newTokenId = totalSupply + 1;
            totalSupply++;

            _safeMint(msg.sender, newTokenId);
        }
    }
}
