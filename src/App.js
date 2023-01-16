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
    },
  },
  blockExplorers: {},
  testnet: true,
};
export default function App() {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <MyComponent />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
