pragma solidity ^0.8.0;
import "openzeppelin-contracts/token/ERC20/ERC20.sol";
import "openzeppelin-contracts/access/Ownable.sol";

contract Token is ERC20, Ownable {
    constructor() ERC20("ROADRUNR", "CAR") {
        _mint(msg.sender, 240000000000000000000000000); //240million
    }

    event UserReward(address indexed _from, address indexed _to, uint256 _value, string _purpose, string _filesName);

    function reward(address _to, uint256 _value,string memory _purpose, string memory _filesName) public {
        _mint(_to,_value);
        emit UserReward(msg.sender, _to, _value, _purpose, _filesName);
    }
}
