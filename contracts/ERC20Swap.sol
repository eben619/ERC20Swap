// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IERC20 {
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
    function transfer(address recipient, uint256 amount) external returns (bool);
    function approve(address spender, uint256 amount) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
}

contract ERC20Swap {
    address public token1Address;
    address public token2Address;
    
    constructor(address _token1Address, address _token2Address) {
        token1Address = _token1Address;
        token2Address = _token2Address;
    }

    function swap(uint256 amount, address recipient) external {
    require(amount > 0, "Amount must be greater than zero");

    
        
    IERC20 token1 = IERC20(token1Address);
    IERC20 token2 = IERC20(token2Address);
        
    require(token1.balanceOf(msg.sender) >= amount, "Insufficient balance of token1");
        
    require(token1.transferFrom(msg.sender, address(this), amount), "Failed to transfer token1");
    require(token2.transfer(recipient, amount), "Failed to transfer token2");

}
}