# Sibyl.Access

This project demonstrates NFT tokens that give you access to be one of the 247 regulating brains of Sibyl system and be part of new generation governance.
Based on japanese anime Psycho Pass.
---

## What is this project about ? 

A very simple NFT mint page, having total supply of 247 NFT's which cannot be minted using the same address twice.

Contract address : 0xdD93800B8e743Ccb7925F776992CB9541801CA0D  (Georli TestNet)

Constructor Arguments - 
``` 
    constructor() payable ERC721("Sibyl Mind", "SBYL") {
        mintPrice = 0.05 ether;
        totalSupply = 0;
        maxSupply = 247;
        maxPerWallet = 1;
        isMintEnabled = false;
        withdrawWallet = payable(msg.sender);
    }
```

Mint can be toggled enable using ``  setMintEnabled``

---

## Uses
-React
-Ethersjs
-Nodejs
-Chakra
