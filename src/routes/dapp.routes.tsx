import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import { MetaMaskContext } from "../context/metamask.context";
import { IMetaMaskContext } from "../types/metamask.types";

export const DappRoute = () => {
  const { contract } = useContext(MetaMaskContext) as IMetaMaskContext;

  const location = useLocation();

  return !contract ? (
    <Navigate to="/" replace state={{ from: location }} />
  ) : (
    <Outlet />
  );
};
