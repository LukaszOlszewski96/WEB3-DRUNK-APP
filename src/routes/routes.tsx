import { FC, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Coctail, CoctailDetails, Home, NotFound } from "../pages";

export const BaseRoute: FC = () => {
  return (
    <Suspense fallback={"Loading..."}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coctail" element={<Coctail />} />
          <Route path="/coctail/details" element={<CoctailDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};
