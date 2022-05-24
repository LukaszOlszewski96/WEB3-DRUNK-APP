import React from "react";
import { IMetaMaskContext } from "../types/metamask.types";

export const MetaMaskContext = React.createContext<
  IMetaMaskContext | undefined
>(undefined);
