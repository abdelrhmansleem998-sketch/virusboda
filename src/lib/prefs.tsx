import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Lang } from "@/lib/cv";

export type Theme = "light" | "dark";

const LANG_KEY = "vb-lang";
const THEME_KEY = "vb-theme";

type Prefs = {
  lang: Lang;
  theme: Theme;
  setLang: (lang: Lang) => void;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const PrefsContext = createContext<Prefs | null>(null);

function readLang(): Lang {
  if (typeof window === "undefined") return "ar";
  const stored = window.localStorage.getItem(LANG_KEY);
  return stored === "en" || stored === "ar" ? stored : "ar";
}

function readTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  const stored = window.localStorage.getItem(THEME_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

function applyDom(lang: Lang, theme: Theme) {
  const root = document.documentElement;
  root.lang = lang;
  root.dir = lang === "ar" ? "rtl" : "ltr";
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
}

export function PrefsProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ar");
  const [theme, setThemeState] = useState<Theme>("dark");

  useEffect(() => {
    const nextLang = readLang();
    const nextTheme = readTheme();
    setLangState(nextLang);
    setThemeState(nextTheme);
    applyDom(nextLang, nextTheme);
  }, []);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(LANG_KEY, next);
    applyDom(next, readTheme());
  }, []);

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next);
    window.localStorage.setItem(THEME_KEY, next);
    applyDom(readLang(), next);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((current) => {
      const next = current === "dark" ? "light" : "dark";
      window.localStorage.setItem(THEME_KEY, next);
      applyDom(readLang(), next);
      return next;
    });
  }, []);

  const value = useMemo(
    () => ({ lang, theme, setLang, setTheme, toggleTheme }),
    [lang, theme, setLang, setTheme, toggleTheme],
  );

  return <PrefsContext.Provider value={value}>{children}</PrefsContext.Provider>;
}

export function usePrefs() {
  const ctx = useContext(PrefsContext);
  if (!ctx) throw new Error("usePrefs must be used within PrefsProvider");
  return ctx;
}
