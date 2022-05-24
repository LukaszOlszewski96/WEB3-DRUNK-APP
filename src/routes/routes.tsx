import { FC, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "../components/providers/theme.provider";
import { Coctail, CoctailDetails, Home, NotFound } from "../pages";

export const BaseRoute: FC = () => {
  return (
    <Suspense fallback={"Loading..."}>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/coctail" element={<Coctail />} />
            <Route path="/coctail/details" element={<CoctailDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Suspense>
  );
};
