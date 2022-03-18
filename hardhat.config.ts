import { config as dotEnvConfig } from "dotenv";
dotEnvConfig();

import { HardhatUserConfig } from "hardhat/types";

import "@nomiclabs/hardhat-ethers";

import "./type-extensions";
import "./tasks/fetch-pairs";
import "./tasks/scan-pairs";

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.3",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  networks: {
    mainnet: {
      url: process.env.MAINNET_RPC,
    },
    bsc: {
      url: process.env.BSC_RPC,
    },
    polygon: {
      url: process.env.POLYGON_RPC,
    },
    xdai: {
      url: process.env.XDAI_RPC,
    },
  },
  uniswapSkimScanner: {
    mainnet: {
      multicallAddress: "0xeefba1e63905ef1d7acba5a8513c70307c1ce441",
      uniswapClones: {
        uniswap: "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
      },
    },
    bsc: {
      multicallAddress: "0x1Ee38d535d541c55C9dae27B12edf090C608E6Fb",
      uniswapClones: {
        pancakeswap: "0xBCfCcbde45cE874adCB698cC183deBcF17952812",
      },
    },
    polygon: {
      multicallAddress: "0x95028E5B8a734bb7E2071F96De89BABe75be9C8E",
      uniswapClones: {
        quickswap: "0x5757371414417b8C6CAad45bAeF941aBc7d3Ab32",
      },
    },
    xdai: {
      multicallAddress: "0xb5b692a88BDFc81ca69dcB1d924f59f0413A602a",
      uniswapClones: {
        honeyswap: "0x45DE240fbE2077dd3e711299538A09854FAE9c9b",
      },
    },
  },
};

export default config;
