import React from "react";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { MyComponent } from "./MyComponent";
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
export default function App() {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <MyComponent />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
