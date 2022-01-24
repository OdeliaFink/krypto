// 'e00a7f0dced484e75476ca17168b1ca546037b522df9402ad8a6d79fcf4f0b6d',
//https://eth-ropsten.alchemyapi.io/v2/yGziFO13cYdZF7dEoCRMznJbUMZgflRG

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/z4WpA8UKgqnwbTYmrZu15yCOiijBKaRv',
      accounts: [
        'e00a7f0dced484e75476ca17168b1ca546037b522df9402ad8a6d79fcf4f0b6d',
      ],
    },
  },
};
