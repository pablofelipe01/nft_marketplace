const fs = require('fs');

require('@nomiclabs/hardhat-waffle');

const privateKey = fs.readFileSync('.secret').toString().trim();

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    bsc: {
      url: 'https://wandering-serene-valley.bsc-testnet.quiknode.pro/20a11d685558ac948bd7aa9aa49dfea19cdd6ccb/',
      accounts: [privateKey],
    },
    
  },
  solidity: '0.8.4',
};

