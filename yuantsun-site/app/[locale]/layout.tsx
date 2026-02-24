import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import { Locale, locales, defaultLocale } from "@/lib/i18n";

export const metadata = {
  title: "YUANTSUN | Recycled Plastic Pellets",
  description: "Recycled plastic pellets for injection molding."
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = (locales.includes(params.locale as Locale)
    ? (params.locale as Locale)
    : defaultLocale);

  return (
    <html lang={locale}>
      <body className="min-h-screen bg-white text-black">
        <Navbar locale={locale} />
        {children}
      </body>
    </html>
  );
}