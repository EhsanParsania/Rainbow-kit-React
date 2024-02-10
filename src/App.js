import React from "react";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";

import { configureChains, createClient, WagmiConfig } from "wagmi";
import { MyComponent } from "./MyComponent";
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';

const bscTestnet = {
  id: 97,
  name: 'BSC Testnet',
  network: 'bsc-testnet',
  iconUrl: 'https://snowtrace.io/static/media/bsc.2b5b1b5e.svg',
  iconBackground: '#f0b90b',
  nativeCurrency: {
    decimals: 18,
    name: 'Binance Coin',
    symbol: 'BNB',
  },
  rpcUrls: {
    default: {
      http: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
    },
  },
  blockExplorers: {},
  testnet: true,
};

/*
 Developer guide : 
 this is the config to use for local hardhat network
*/
const hardhatLocalChain = {
  id: 31337,
  name: 'Hardhat Local Chain',
  network: 'hardhat-local-chain',
  iconUrl: 'https://snowtrace.io/static/media/bsc.2b5b1b5e.svg',
  iconBackground: '#f0b90b',
  nativeCurrency: {
    decimals: 18,
    name: 'Binance Coin',
    symbol: 'BNB',
  },
  rpcUrls: {
    default: {
      http: ['http://localhost:8545/'],
    },
  },
  blockExplorers: {},
  testnet: true,
};

const { provider, chains } = configureChains(
  [bscTestnet],
  [
    jsonRpcProvider({
      rpc: chain => ({ http: chain.rpcUrls.default.http[0] }),
    }),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
});

export default function App() {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <MyComponent />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
