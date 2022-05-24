export type MetaMaskInit = {
  contract?: null;
};

export type MetaMaskUnavailable = {
  contract?: null;
};

export type MetaMaskNotConnected = {
  contract?: null;
};

export type MetaMaskConnected = {
  contract?: string;
};

export type MetaMaskState =
  | MetaMaskInit
  | MetaMaskUnavailable
  | MetaMaskNotConnected
  | MetaMaskConnected;

export type IMetaMaskContext = MetaMaskState & {
  connectMetaMask: () => void;
};
