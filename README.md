This smart contract facilitates the swapping of ERC20 tokens on the Ethereum blockchain. It allows users to securely exchange one type of token (token1) for another (token2) in a single transaction.

Features:

    Simple Swapping: Swap token1 for token2 directly within the contract.
    Decentralized Exchange: No intermediary is involved, promoting trust and potentially lower fees.
    Secure Transfers: Leverages ERC20 standard for token transfers, ensuring secure and traceable transactions.

Requirements:

    Solidity compiler version ^0.8.0 (https://docs.soliditylang.org/en/v0.8.19/installing-solidity.html)
    A blockchain development environment (e.g., Remix, Truffle, Hardhat)
    ERC20 compatible tokens (token1 and token2)

Deployment:

    Clone or download this repository.
    Connect your development environment to a blockchain network (e.g., local test network or public network like Ethereum).
    Deploy the ERC20Swap contract, specifying the addresses of the two ERC20 tokens you want to enable swapping for (token1Address and token2Address).
    Users can interact with the swap function to exchange tokens.

How it Works:

    A user calls the swap function with the desired swap amount (in token1) and the recipient's address.
    The contract checks if the user has sufficient balance of token1.
    It then transfers the specified amount of token1 from the user's wallet to the contract address.
    Finally, the contract transfers the equivalent amount of token2 from the contract's balance (assumed to be pre-funded) to the recipient address.

License:

MIT License
# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.ts
```
