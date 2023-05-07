import { useEffect, useState, createContext, useContext } from "react";

export const ThemeContext = createContext();

export function ThemeContextProvider({ children }) {
  const THEME_KEY = "theme";

const getInitialTheme = () => {
  const userPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  console.log(userPrefersDark)

  return userPrefersDark ? "dark" : "light";
};

const [theme, setTheme] = useState(() => {
  const savedTheme = localStorage.getItem(THEME_KEY);
  if (typeof savedTheme === "string" && (savedTheme === "dark" || savedTheme === "light")) {
    return savedTheme;
  }
  return getInitialTheme();
});

useEffect(() => {
  const root = window.document.documentElement;
  const newColor = theme === "light" ? "dark" : "light";

  root.style.setProperty("--color-mode", theme);
  root.classList.remove(newColor);
  root.classList.add(theme);

  localStorage.setItem(THEME_KEY, theme);
}, [theme]);

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <body className="bg-light dark:bg-dark transition-all">{children}</body>
      </ThemeContext.Provider>
    </>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
