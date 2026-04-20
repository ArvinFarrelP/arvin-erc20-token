# ArvinToken (ARV)

ERC-20 token sederhana di Ethereum Sepolia Testnet menggunakan Hardhat.

---

## Contract Info

- Name: ArvinToken
- Symbol: ARV
- Standard: ERC-20
- Supply: 1,000,000 ARV
- Network: Sepolia

Contract Address:
0xDAec8570f90901c00E27A88170ABc6751930edC0

Explorer:
https://sepolia.etherscan.io/address/0xDAec8570f90901c00E27A88170ABc6751930edC0

---

## Tech Stack

- Solidity
- Hardhat
- Ethers.js
- OpenZeppelin Contracts
- Node.js

---

## Structure

contracts/ArvinToken.sol
scripts/deploy.js
test/
hardhat.config.ts
.env.example
package.json

---

## Setup

Install:
git clone https://github.com/YOUR_USERNAME/arvin-erc20-token.git
cd arvin-token
npm install

Environment (.env):
SEPOLIA_RPC_URL=YOUR_RPC
PRIVATE_KEY=YOUR_PRIVATE_KEY

---

## Commands

Compile:
npx hardhat compile

Deploy:
npx hardhat run scripts/deploy.js --network sepolia

Test:
npx hardhat test

---

## Import ke MetaMask

1. Switch ke Sepolia
2. Import Token
3. Paste contract address

---

## Security

Tambahkan ke .gitignore:
.env
node_modules
artifacts
cache

EOF
