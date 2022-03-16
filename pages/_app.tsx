import 'react-toastify/dist/ReactToastify.css';
import 'tailwindcss/tailwind.css';
import { providers } from 'ethers';
import { Connector, Provider, chain, defaultChains } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { WalletLinkConnector } from 'wagmi/connectors/walletLink';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import config from '../config/env-vars';
const {
  NEXT_PUBLIC_ALCHEMY_ID,
  NEXT_PUBLIC_INFURA_ID,
  NEXT_PUBLIC_ETHERSCAN_API_KEY,
} = config;

const alchemyId = NEXT_PUBLIC_ALCHEMY_ID;
const infuraId = NEXT_PUBLIC_INFURA_ID;
const etherscanApiKey = NEXT_PUBLIC_ETHERSCAN_API_KEY;

// Pick chains
const chains = defaultChains;
const defaultChain = chain.mainnet;

type ConnectorsConfig = { chainId?: number };
const connectors = ({ chainId }: ConnectorsConfig) => {
  const rpcUrl =
    chains.find((x) => x.id === chainId)?.rpcUrls?.[0] ??
    defaultChain.rpcUrls[0];

  return [
    new InjectedConnector({
      chains,
      options: { shimDisconnect: true },
    }),
    new WalletConnectConnector({
      options: {
        infuraId,
        qrcode: true,
      },
    }),
    new WalletLinkConnector({
      options: {
        appName: 'PFP Shop',
        jsonRpcUrl: `${rpcUrl}/${infuraId}`,
      },
    }),
  ];
};

// Set up providers
type ProviderConfig = { chainId?: number; connector?: Connector };
const isChainSupported = (chainId?: number) =>
  chains.some((x) => x.id === chainId);

const provider = ({ chainId }: ProviderConfig) => {
  if (chainId === 1337) {
    return new providers.JsonRpcProvider(`http://localhost:8545`);
  }

  return providers.getDefaultProvider(
    isChainSupported(chainId) ? chainId : defaultChain.id,
    {
      alchemy: alchemyId,
      etherscan: etherscanApiKey,
      infura: infuraId,
    }
  );
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute="class">
      <Provider
        autoConnect
        connectors={connectors}
        provider={provider}
      >
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
};
export default App;
