/** Change these values to configure the application for your own use. **/

import { BaseSepoliaTestnet } from "@thirdweb-dev/chains";

// Your smart contract address (available on the thirdweb dashboard)
// For existing collections: import your existing contracts on the dashboard: https://thirdweb.com/dashboard
export const contractConst = "0x65fEaD33B95F357cBf1c3d7d8b9c788DBCE19186";

// The name of the chain your contract is deployed to.
// Refer to README.md on how to specify the chain name.
export const chainConst = BaseSepoliaTestnet;

// It is IMPORTANT to provide your own API key to use the thirdweb SDK and infrastructure.
// Please ensure that you define the correct domain for your API key from the API settings page.
// You can get one for free at https://thirdweb.com/create-api-key
// Learn more here: https://blog.thirdweb.com/changelog/api-keys-to-access-thirdweb-infra
export const clientIdConst = import.meta.env.VITE_THIRDWEB_API_KEY || "1069d2377a89f80a58f4bbcaec1262c0";
export const factoryAddressConst = import.meta.env.VITE_CREST_SMARTWALLET_FACTORY_ADDRESS || "0x0c5b74d4aba01773351A803Caf6A0B4aB7A44829";


// Configure the primary color for buttons and other UI elements
export const primaryColorConst = "blue";

// Choose between "light" and "dark" mode
export const themeConst = "dark";

// Gasless relayer configuration options
export const relayerUrlConst = ""; // OpenZeppelin relayer URL
export const biconomyApiKeyConst = ""; // Biconomy API key
export const biconomyApiIdConst = ""; // Biconomy API ID
