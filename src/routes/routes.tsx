import { FC, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Coctail, Home } from "../pages";

export const BaseRoute: FC = () => {
  return (
    <Suspense fallback={"Loading..."}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coctail" element={<Coctail />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};
