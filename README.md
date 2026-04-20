# ArvinToken (ARV)

A simple ERC-20 token deployed on Ethereum Sepolia Testnet using Hardhat.

This project demonstrates how to create, compile, and deploy a smart contract token using Solidity and Hardhat.

---

## Contract Information

Token Name: ArvinToken  
Symbol: ARV  
Standard: ERC-20

Network: Ethereum Sepolia Testnet

Contract Address:
0xDAec8570f90901c00E27A88170ABc6751930edC0

Explorer:
https://sepolia.etherscan.io/address/0xDAec8570f90901c00E27A88170ABc6751930edC0

Initial Supply:
1,000,000 ARV minted to the deployer wallet.

---

## Tech Stack

- Solidity
- Hardhat
- Ethers.js
- OpenZeppelin Contracts
- Node.js

---

## Project Structure

my-blockchain-project/

contracts/
ArvinToken.sol

scripts/
deploy.js

test/

hardhat.config.ts
.env.example
package.json

---

## Prerequisites

Make sure you have installed:

- Node.js (>=20)
- npm
- Git

You will also need:

- MetaMask wallet
- Sepolia test ETH
- RPC provider (Alchemy or Infura)

---

## Installation

Clone the repository

git clone https://github.com/YOUR_USERNAME/arvin-erc20-token.git

Enter the project folder

cd arvin-token

Install dependencies

npm install

---

## Environment Setup

Create a `.env` file in the root folder.

Example:

SEPOLIA_RPC_URL=https://eth-sepolia.g.alchemy.com/v2/YOUR_ALCHEMY_KEY
PRIVATE_KEY=YOUR_METAMASK_PRIVATE_KEY

---

## Compile Smart Contract

Run the following command:

npx hardhat compile

Expected output:

Compiled Solidity files successfully

---

## Deploy Contract to Sepolia

Run:

npx hardhat run scripts/deploy.js --network sepolia

Example output:

Contract deployed to: 0xDAec8570f90901c00E27A88170ABc6751930edC0

---

## Check Contract on Explorer

https://sepolia.etherscan.io/address/0xDAec8570f90901c00E27A88170ABc6751930edC0

---

## Import Token to MetaMask

1. Open MetaMask
2. Switch network to Sepolia
3. Click Import Token
4. Paste contract address

0xDAec8570f90901c00E27A88170ABc6751930edC0

MetaMask will detect:

Token Name: ArvinToken  
Symbol: ARV  
Decimals: 18

Your balance:

1,000,000 ARV

---

## Running Tests

npx hardhat test

---

## Useful Commands

Compile contract

npx hardhat compile

Run tests

npx hardhat test

Deploy contract

npx hardhat run scripts/deploy.js --network sepolia

Clean build

npx hardhat clean

---

## Security Notes

Never commit your `.env` file.

Add this to `.gitignore`:

.env
node_modules
artifacts
cache

---

## Author

Arvin Farrel Pramuditya
<<<<<<< HEAD

IT Student  
Blockchain Enthusiast  
Crypto Trader since 2022

---
=======
>>>>>>> a21336bd0ed7b0e1028076dc45c7dcea4f210352
