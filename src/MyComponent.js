import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export const MyComponent = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <ConnectButton />
    </div>
  );
};
