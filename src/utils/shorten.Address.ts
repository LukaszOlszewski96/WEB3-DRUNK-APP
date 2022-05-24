export const ShortenAddress: Function = (contract: string) =>
  `${contract.slice(0, 5) + "..." + contract.slice(38, 42)}`;
