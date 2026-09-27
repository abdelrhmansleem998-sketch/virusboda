import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { PrefsProvider } from "@/lib/prefs";
import appCss from "../styles.css?url";

const APP_NAME = "virusboda";
const THEME_BOOT = `(function(){try{var t=localStorage.getItem("vb-theme");var l=localStorage.getItem("vb-lang");var theme=t==="light"||t==="dark"?t:(matchMedia("(prefers-color-scheme: light)").matches?"light":"dark");var lang=l==="en"||l==="ar"?l:"ar";var r=document.documentElement;r.classList.toggle("dark",theme==="dark");r.lang=lang;r.dir=lang==="ar"?"rtl":"ltr";r.style.colorScheme=theme;}catch(e){}})();`;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      {
        name: "description",
        content:
          "virusboda — Abdelrhman Silem. Offensive security and bug bounty portfolio.",
      },
      { name: "theme-color", content: "#0b0c0b" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans+Arabic:wght@400;500;600&display=swap",
      },
    ],
  }),
  component: RootDocument,
});

function RootDocument() {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="antialiased">
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOT }} />
        <PreviewHostBridge />
        <AuthProvider>
          <PrefsProvider>
            <Outlet />
          </PrefsProvider>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}
