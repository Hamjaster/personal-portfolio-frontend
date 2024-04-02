"use client";
import { createContext, useEffect, useState } from "react";

export const MyContext = createContext("");

export function ContextProvider({ children }) {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Perform localStorage action
      setTheme(
        !localStorage.getItem("theme") ? "red" : localStorage.getItem("theme")
      );
    }
  }, []);

  return (
    <MyContext.Provider value={{ theme, setTheme }}>
      {children}
    </MyContext.Provider>
  );
}
