/* eslint-disable react-refresh/only-export-components */
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Theme, ThemeProvider } from "@mui/material";
import { themeLight } from "../themes";

export enum ThemeEnum {
  light = "light",
}

interface ThemeContextData {
  themeName: ThemeEnum;
  theme: Theme;
}

export const getThemeByName = (nameTheme: ThemeEnum) =>
  ({
    [ThemeEnum.light]: themeLight,
  }[nameTheme]);

const ThemeContext = createContext({} as ThemeContextData);

export const useAppThemeContext = () => useContext(ThemeContext);

interface AppThemeProps {
  children: React.ReactNode;
  theme?: ThemeEnum;
}

export const AppThemeProvider: React.FC<AppThemeProps> = ({
  children,
  theme = ThemeEnum.light,
}) => {
  const [themeName, setThemeName] = useState<ThemeEnum>(theme);

  useEffect(() => {
    setThemeName(theme);
  }, [theme]);

  const currentTheme = useMemo(() => {
    return getThemeByName(themeName);
  }, [themeName]);

  const themeValue = React.useMemo(
    () => ({ themeName, theme: currentTheme }),
    [themeName, currentTheme]
  );

  return (
    <ThemeContext.Provider value={themeValue}>
      <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
