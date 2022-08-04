const fs = require('fs');

require('@nomiclabs/hardhat-waffle');

const privateKey = fs.readFileSync('.secret').toString().trim();

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: 'https://polygon-mumbai.g.alchemy.com/v2/AjGPeviK3zhCgbmkhiic9Y0MmsU06Rl0',
      accounts: [privateKey],
    },
    // https://rpc-mumbai.maticvigil.com
  },
  solidity: '0.8.4',
};

