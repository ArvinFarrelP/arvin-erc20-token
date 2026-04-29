# ArvinToken (ARV)

# Token ERC-20 sederhana di Ethereum Sepolia

# Info

# Name: ArvinToken

# Symbol: ARV

# Supply: 1,000,000

# Network: Sepolia

# Contract:

# 0xDAec8570f90901c00E27A88170ABc6751930edC0

# Explorer:

# https://sepolia.etherscan.io/address/0xDAec8570f90901c00E27A88170ABc6751930edC0

# Setup

git clone https://github.com/YOUR_USERNAME/arvin-erc20-token.git
cd arvin-token
npm install

# Buat file .env

echo "SEPOLIA_RPC_URL=YOUR_RPC" >> .env
echo "PRIVATE_KEY=YOUR_PRIVATE_KEY" >> .env

# Commands

npx hardhat compile
npx hardhat run scripts/deploy.js --network sepolia
npx hardhat test

# Security (.gitignore)

echo ".env
node_modules
artifacts
cache" >> .gitignore
