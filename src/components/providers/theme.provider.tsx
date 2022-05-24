import { FC, useState } from "react";
import { ThemeContext } from "../../context/theme.context";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [themeState, setThemeState] = useState<"dark" | "light">("dark");

  const toggle = () => {
    setThemeState(themeState === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ mode: themeState, toggle: toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
