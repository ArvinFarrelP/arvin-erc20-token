import hre from "hardhat";

async function main() {

  const factory = await hre.network.connect().then(({ ethers }) => {
    return ethers.getContractFactory("ArvinToken");
  });

  const contract = await factory.deploy();

  await contract.waitForDeployment();

  console.log("Contract deployed to:", await contract.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});