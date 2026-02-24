// src/components/Navbar.tsx
import Link from "next/link";
import { Locale, getDict } from "@/lib/i18n";

export default function Navbar({ locale }: { locale: Locale }) {
  const t = getDict(locale);

  const items = [
    { href: `/${locale}`, label: t.nav.home },
    { href: `/${locale}/products`, label: t.nav.products },
    { href: `/${locale}/contact`, label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href={`/${locale}`} className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-brand-800" />
          <div className="leading-tight">
            <div className="text-sm font-semibold text-brand-900">YUANTSUN</div>
            <div className="text-xs text-black/60">Recycled Pellets</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-5 text-sm text-black/70 md:flex">
          {items.map((it) => (
            <Link key={it.href} href={it.href} className="hover:text-brand-900">
              {it.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LocaleButtons locale={locale} />
          <Link
            href={`/${locale}/contact`}
            className="rounded-xl bg-brand-800 px-3 py-2 text-sm font-semibold text-white hover:bg-brand-900"
          >
            {t.nav.contact}
          </Link>
        </div>
      </div>
    </header>
  );
}

function LocaleButtons({ locale }: { locale: Locale }) {
  const other = locale === "zh" ? "en" : "zh";
  return (
    <Link
      href={`/${other}`}
      className="rounded-xl border border-black/10 bg-white px-3 py-2 text-sm text-black/70 hover:text-brand-900"
      aria-label="Switch language"
    >
      {other.toUpperCase()}
    </Link>
  );
}