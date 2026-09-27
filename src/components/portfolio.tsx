import { useState } from "react";
import {
  ArrowUpRight,
  Copy,
  Github,
  Mail,
  Moon,
  Sun,
  Terminal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { copy, profile, skillGroups, study } from "@/lib/cv";
import { usePrefs } from "@/lib/prefs";
import { cn } from "@/lib/utils";

function t<T extends Record<"ar" | "en", string>>(dict: T, lang: "ar" | "en") {
  return dict[lang];
}

function Monogram({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <rect
        x="1"
        y="1"
        width="30"
        height="30"
        rx="8"
        className="stroke-border-strong"
        strokeWidth="1.25"
      />
      <path
        d="M9 22V10h4.2c2.7 0 4.4 1.5 4.4 3.8 0 1.5-.8 2.7-2.1 3.3L19.8 22h-3.2l-3.6-4.6H12V22H9Zm3-7.2h1.1c1.2 0 1.9-.6 1.9-1.6s-.7-1.6-1.9-1.6H12v3.2Z"
        className="fill-fg"
      />
      <path
        d="M21.2 10h2.7L27 22h-3l-.5-2h-3.8l-.5 2h-2.9l3.1-12Zm2.2 7.4-.9-3.8-.9 3.8h1.8Z"
        className="fill-accent"
      />
    </svg>
  );
}

export function Portfolio() {
  const { lang, theme, setLang, toggleTheme } = usePrefs();
  const [copied, setCopied] = useState(false);
  const other: "ar" | "en" = lang === "ar" ? "en" : "ar";

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }

  return (
    <div className="min-h-screen bg-bg text-fg">
      <a href="#main" className="skip-link">
        {t(copy.skip, lang)}
      </a>

      <header className="sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-3 px-4 sm:px-6">
          <a href="#top" className="flex items-center gap-2.5">
            <Monogram className="size-8" />
            <span className="font-mono text-sm font-medium tracking-tight">
              virusboda
            </span>
          </a>

          <nav className="hidden items-center gap-1 md:flex" aria-label="primary">
            {(
              [
                ["about", copy.nav.about],
                ["skills", copy.nav.skills],
                ["path", copy.nav.path],
                ["contact", copy.nav.contact],
              ] as const
            ).map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className="inline-flex h-11 items-center rounded-sm px-3 text-sm text-muted transition-colors duration-[var(--motion-quick)] hover:text-fg"
              >
                {t(label, lang)}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLang(other)}
              aria-label={other === "ar" ? "العربية" : "English"}
              className="font-mono"
            >
              {other === "ar" ? "ع" : "EN"}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? t(copy.themeLight, lang) : t(copy.themeDark, lang)}
            >
              {theme === "dark" ? (
                <Moon className="size-5" />
              ) : (
                <Sun className="size-5" />
              )}
            </Button>
          </div>
        </div>
      </header>

      <main id="main">
        <section
          id="top"
          className="vb-grid relative overflow-hidden border-b border-border"
        >
          <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
            <div className="stagger-in flex max-w-3xl flex-col gap-5">
              <p className="inline-flex w-fit items-center gap-2 rounded-sm border border-border bg-bg-elevated px-3 py-1.5 font-mono text-xs text-muted">
                <Terminal className="size-3.5 text-accent" />
                virus@boda:~$ whoami
              </p>
              <h1 className="font-mono text-3xl font-medium tracking-tight">
                virusboda
              </h1>
              <p className="text-xl text-fg sm:text-2xl">
                {t(profile.name, lang)}
              </p>
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-accent">
                {t(copy.role, lang)}
              </p>
              <p className="max-w-xl text-base text-muted">
                {t(copy.heroLead, lang)}
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <Button asChild>
                  <a href="#skills">{t(copy.ctaSkills, lang)}</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="#contact">{t(copy.ctaContact, lang)}</a>
                </Button>
              </div>
            </div>

            <dl className="grid grid-cols-3 gap-px overflow-hidden rounded-lg border border-border bg-border">
              {copy.stats.map((stat) => (
                <div
                  key={stat.value}
                  className="bg-bg-elevated px-4 py-5 sm:px-6"
                >
                  <dt className="text-xs uppercase tracking-[0.12em] text-muted">
                    {t(stat.label, lang)}
                  </dt>
                  <dd className="mt-2 font-mono text-xl font-medium tabular-nums">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="about" className="border-b border-border">
          <div className="mx-auto grid max-w-5xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:py-20">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
                01
              </p>
              <h2 className="mt-3 text-xl">{t(copy.aboutTitle, lang)}</h2>
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-base text-muted">{t(copy.aboutBody, lang)}</p>
              <ul className="grid gap-3 sm:grid-cols-2">
                <Meta
                  k={lang === "ar" ? "الموقع" : "Location"}
                  v={t(profile.location, lang)}
                />
                <Meta
                  k={lang === "ar" ? "الدراسة" : "Study"}
                  v={t(copy.education, lang)}
                />
                <Meta k="Handle" v={profile.handle} mono />
                <Meta k="GitHub" v={profile.githubLabel} />
              </ul>
              <p className="text-xs text-subtle">{t(copy.aboutNote, lang)}</p>
            </div>
          </div>
        </section>

        <section id="skills" className="border-b border-border">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:py-20">
            <div className="max-w-xl">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
                02
              </p>
              <h2 className="mt-3 text-xl">{t(copy.skillsTitle, lang)}</h2>
              <p className="mt-3 text-sm text-muted">{t(copy.skillsLead, lang)}</p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {skillGroups.map((group) => (
                <article
                  key={group.id}
                  id={group.id === "vulns" ? "vulns" : undefined}
                  className="rounded-xl border border-border bg-bg-elevated p-5 sm:p-6"
                >
                  <h3 className="text-sm font-medium">{t(group.title, lang)}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item.en}
                        className="rounded-sm border border-border bg-surface px-2.5 py-1 text-xs text-fg"
                      >
                        {t(item, lang)}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="path" className="border-b border-border">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:py-20">
            <div className="max-w-xl">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
                03
              </p>
              <h2 className="mt-3 text-xl">{t(copy.pathTitle, lang)}</h2>
              <p className="mt-3 text-sm text-muted">{t(copy.pathLead, lang)}</p>
            </div>
            <ol className="mt-10 divide-y divide-border rounded-xl border border-border bg-bg-elevated">
              {study.map((row, i) => (
                <li
                  key={row.label.en}
                  className="flex items-baseline justify-between gap-4 px-5 py-4 sm:px-6"
                >
                  <span className="font-mono text-xs text-subtle tabular-nums">
                    0{i + 1}
                  </span>
                  <span className="flex-1 text-sm font-medium">
                    {t(row.label, lang)}
                  </span>
                  <span className="text-xs text-muted">{t(row.note, lang)}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="contact">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:py-20">
            <div className="rounded-xl border border-border bg-bg-elevated p-6 sm:p-8">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
                04
              </p>
              <h2 className="mt-3 text-xl">{t(copy.contactTitle, lang)}</h2>
              <p className="mt-3 max-w-lg text-sm text-muted">
                {t(copy.contactLead, lang)}
              </p>
              <p className="mt-6 font-mono text-sm">{profile.email}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild>
                  <a href={`mailto:${profile.email}`}>
                    <Mail className="size-4" />
                    {t(copy.contactCta, lang)}
                  </a>
                </Button>
                <Button variant="outline" onClick={copyEmail}>
                  <Copy className="size-4" />
                  {copied ? t(copy.copied, lang) : t(copy.copyEmail, lang)}
                </Button>
                <Button variant="outline" asChild>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github className="size-4" />
                    {t(copy.githubCta, lang)}
                    <ArrowUpRight className="size-3.5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border pb-20">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p className="font-mono text-xs text-muted">{t(copy.footer, lang)}</p>
          <p className="font-mono text-xs text-subtle">{profile.handle}</p>
        </div>
      </footer>
    </div>
  );
}

function Meta({
  k,
  v,
  mono,
}: {
  k: string;
  v: string;
  mono?: boolean;
}) {
  return (
    <li className="rounded-lg border border-border bg-bg-elevated px-4 py-3">
      <p className="text-xs uppercase tracking-[0.12em] text-muted">{k}</p>
      <p className={cn("mt-1 text-sm", mono && "font-mono")}>{v}</p>
    </li>
  );
}
