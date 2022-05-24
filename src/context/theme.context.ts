import { createContext } from "react";
import { IThemeContext } from "../types/global.types";

export const ThemeContext = createContext<IThemeContext>({
  mode: "dark",
  toggle: () => {},
});
