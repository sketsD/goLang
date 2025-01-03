import { createContext, type ReactNode, useContext, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

type DarkModeState = {
  isDarkMode: boolean;
};
type DarkModeContextValue = DarkModeState & {
  toggleDarkMode: () => void;
};

type DarkModeProviderProps = {
  children: ReactNode;
};

const DarkModeContext = createContext<DarkModeContextValue | null>(null);

function DarkModeProvider({ children }: DarkModeProviderProps) {
  const [isDarkMode, setIsDarkMode] = useLocalStorage(false, "isDarkMode");

  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [isDarkMode]);
  function toggleDarkMode(): void {
    setIsDarkMode((isDarkMode: boolean) => !isDarkMode);
  }
  const ctx: DarkModeContextValue = {
    isDarkMode,
    toggleDarkMode,
  };

  return (
    <DarkModeContext.Provider value={ctx}>{children}</DarkModeContext.Provider>
  );
}
function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === null)
    throw new Error("Dark mode is used outside of the context");
  return context;
}

export { DarkModeProvider, useDarkMode };
