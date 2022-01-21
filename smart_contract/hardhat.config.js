require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/CPdre7JTn0reK7a9PPyaSB5TMfWLd9hk',
      accounts: ['312b0d25277448a1566fd63a4be894d5a1fc578ac4b5050f1b5be9d02e6467b1'],
    },
  },
};