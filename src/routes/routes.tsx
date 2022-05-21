import { FC, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/intex";

export const BaseRoute: FC = () => {
  return (
    <Suspense fallback={"Loading..."}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};
