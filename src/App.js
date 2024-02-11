import React from "react";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";

import { configureChains, createClient, WagmiConfig } from "wagmi";
import { MyComponent } from "./MyComponent";
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { bscTestnet } from "./chains";

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
