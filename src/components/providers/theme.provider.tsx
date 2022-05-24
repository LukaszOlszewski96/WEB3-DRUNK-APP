import { FC, useState } from "react";
import { ThemeContext } from "../../context/theme.context";
import * as SC from "styled-components";
import { GlobalStyle } from "../../theme/global-style";
import { darkTheme } from "../../theme/theme.dark";
import { lightTheme } from "../../theme/theme.light";

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
      <SC.ThemeProvider theme={themeState === "dark" ? darkTheme : lightTheme}>
        {children}
        <GlobalStyle />
      </SC.ThemeProvider>
    </ThemeContext.Provider>
  );
};
