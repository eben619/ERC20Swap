// ERC20Swap.test.ts
import { ethers } from "hardhat";
import { expect } from "chai";

describe("ERC20Swap", function () {
  let ERC20Swap;
  let erc20Swap;
  let token1;
  let token2;
  let owner;
  let addr1;
  let addr2;

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();

    // Deploy ERC20Swap contract
    ERC20Swap = await ethers.getContractFactory("ERC20Swap");
    erc20Swap = await ERC20Swap.deploy(addr1.address, addr2.address);

    // Deploy mock ERC20 tokens
    const MockToken = await ethers.getContractFactory("MockERC20");
    token1 = await MockToken.deploy("Token1", "TKN1");
    token2 = await MockToken.deploy("Token2", "TKN2");

    // Mint some tokens to address1
    await token1.mint(addr1.address, ethers.utils.parseEther("1000"));
    await token2.mint(addr2.address, ethers.utils.parseEther("1000"));

    // Approve ERC20Swap contract to spend tokens
    await token1.connect(addr1).approve(erc20Swap.address, ethers.constants.MaxUint256);
    await token2.connect(addr2).approve(erc20Swap.address, ethers.constants.MaxUint256);
  });

  it("Should swap tokens", async function () {
    const amount = ethers.utils.parseEther("100");

    // Call swap function
    await erc20Swap.connect(addr1).swap(amount, addr2.address);

    // Check token balances after swap
    expect(await token1.balanceOf(erc20Swap.address)).to.equal(amount);
    expect(await token2.balanceOf(addr2.address)).to.equal(amount);
  });
});
