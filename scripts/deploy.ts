import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const Token1Address = ""; // Address of the first ERC20 token
  const Token2Address = ""; // Address of the second ERC20 token

  const ERC20Swap = await ethers.getContractFactory("ERC20Swap");
  const erc20Swap = await ERC20Swap.deploy(Token1Address, Token2Address);

  console.log("ERC20Swap deployed to:", erc20Swap.target);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
