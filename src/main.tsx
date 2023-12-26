import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import {   ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  localWallet,
  embeddedWallet,
  trustWallet,
  rainbowWallet,
  smartWallet, } from "@thirdweb-dev/react";
import "./styles/globals.css";
import { Toaster } from "./components/ui/Toaster";
import { getGasless } from "./utils/getGasless";
import {
  biconomyApiIdConst,
  biconomyApiKeyConst,
  chainConst,
  relayerUrlConst,
  clientIdConst,
  factoryAddressConst
} from "./consts/parameters";

const container = document.getElementById("root");
const root = createRoot(container!);
const urlParams = new URL(window.location.toString()).searchParams;

const relayerUrl = urlParams.get("relayUrl") || relayerUrlConst || "";
const biconomyApiKey =
  urlParams.get("biconomyApiKey") || biconomyApiKeyConst || "";
const biconomyApiId =
  urlParams.get("biconomyApiId") || biconomyApiIdConst || "";
const sdkOptions = getGasless(relayerUrl, biconomyApiKey, biconomyApiId);

const chain = (urlParams.get("chain") && urlParams.get("chain")?.startsWith("{")) ? JSON.parse(String(urlParams.get("chain"))) : urlParams.get("chain") || chainConst;

const clientId = urlParams.get("clientId") || clientIdConst || "";

const factoryAddress = urlParams.get("factoryAddress") || factoryAddressConst || "";
const smartWalletOptions = {
  factoryAddress: factoryAddress,
  gasless: true,
};

root.render(
  <React.StrictMode>
    <ThirdwebProvider activeChain={chain} sdkOptions={sdkOptions} clientId={clientId}
     supportedWallets={[
      smartWallet(metamaskWallet(), smartWalletOptions),
      smartWallet(coinbaseWallet(), smartWalletOptions),
      smartWallet(walletConnect(), smartWalletOptions),
      smartWallet(localWallet(), smartWalletOptions),
      smartWallet(
        embeddedWallet({
          recommended: true,
          auth: {
            options: ["email", "google", "apple", "facebook"],
          },
        }),
        smartWalletOptions
      ),
      smartWallet(trustWallet(), smartWalletOptions),
      smartWallet(rainbowWallet(), smartWalletOptions),
    ]}>
      <Toaster />
      <App />
    </ThirdwebProvider>
  </React.StrictMode>,
);
