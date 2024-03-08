import { useContext } from "react";
import { createContext } from "react";

// operating value
export const ThemeContext = createContext({
    themeMode : "light",
    darkMode : () => {},
    lightMode : () =>{}
})

// creating context
export const ThemeProvider = ThemeContext.Provider;

// returning context
export default function useTheme(){
    return useContext(ThemeContext)
}