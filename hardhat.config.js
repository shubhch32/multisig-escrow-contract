require("@nomiclabs/hardhat-waffle");

require('dotenv').config({ path: '.env' });
const { PRIVATE_KEY } = process.env;

// The next line is part of the sample project, you don't need it in your
// project. It imports a Hardhat task definition, that can be used for
// testing the frontend.
require("./tasks/faucet");

// If you are using MetaMask, be sure to change the chainId to 1337
module.exports = {
  solidity: "0.8.0",
  networks: {
    hardhat: {
      chainId: 31337
    },
    testnet: {
      url: 'https://babel-api.testnet.iotex.io',
      accounts: [ PRIVATE_KEY ],
      chainId: 4690,
      gas: 8500000,
      gasPrice: 1000000000000
    },
    mainnet: {
      url: 'https://babel-api.mainnet.iotex.io',
      accounts: [ PRIVATE_KEY ],
      chainId: 4689,
      gas: 8500000,
      gasPrice: 1000000000000
    }
  }
};
