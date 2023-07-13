//url: "https://eth-sepolia.g.alchemy.com/v2/lbJrPoyLvlnISnbX9OFEGORzE7mpAeM1",
//accounts: ["8eaade3a0a5004c22ced4960adf999b8bf5e37b64a8671348796058a58264780"]

require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/lbJrPoyLvlnISnbX9OFEGORzE7mpAeM1",
      accounts: ["8eaade3a0a5004c22ced4960adf999b8bf5e37b64a8671348796058a58264780"],
    },
  },
};
