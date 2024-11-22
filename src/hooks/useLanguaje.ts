import { useState, useEffect } from "react";

export function useLanguage() {
  const [locale, setLocale] = useState("es"); // Default to Spanish

  useEffect(() => {
    // Here you can implement logic to get the initial language
    // For example, from localStorage or from an API
    const savedLocale = localStorage.getItem("locale");
    if (savedLocale && ["es", "pt"].includes(savedLocale)) {
      setLocale(savedLocale);
    }
  }, []);

  const changeLanguage = (newLocale: "es" | "pt") => {
    setLocale(newLocale);
    localStorage.setItem("locale", newLocale);
    // You might want to reload the page or update your app's state here
    window.location.reload();
  };

  return { locale, changeLanguage };
}
