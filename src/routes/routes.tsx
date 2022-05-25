import { FC, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MetaMaskProvider } from "../components/providers/metamask.provider";
import { ThemeProvider } from "../components/providers/theme.provider";
import { Coctail, CoctailDetails, Home, Library, NotFound } from "../pages";
import { DappRoute } from "./dapp.routes";

export const BaseRoute: FC = () => {
  return (
    <Suspense fallback={"Loading..."}>
      <ThemeProvider>
        <MetaMaskProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/coctail" element={<Coctail />} />
              <Route path="/coctail/details" element={<CoctailDetails />} />
              <Route element={<DappRoute />}>
                <Route path="/library" element={<Library />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </MetaMaskProvider>
      </ThemeProvider>
    </Suspense>
  );
};
