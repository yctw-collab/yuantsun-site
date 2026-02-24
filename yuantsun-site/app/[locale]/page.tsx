import Link from "next/link";
import { Locale, getDict, locales, defaultLocale } from "@/lib/i18n";

export default function Home({ params }: { params: { locale: string } }) {
  const locale = (locales.includes(params.locale as Locale)
    ? (params.locale as Locale)
    : defaultLocale);
  const t = getDict(locale);

  const materials = ["PP", "PS", "ABS", "PE", "PET"];

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-100 to-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-2 md:py-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-800/15 bg-white px-3 py-1 text-xs text-brand-900">
              <span className="h-2 w-2 rounded-full bg-brand-600" />
              Injection molding focused
            </div>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-brand-950 md:text-4xl">
              {t.hero.title}
            </h1>
            <p className="mt-4 text-base leading-7 text-black/70">
              {t.hero.subtitle}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={`/${locale}/contact`}
                className="rounded-2xl bg-brand-800 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-900"
              >
                {t.hero.ctaQuote}
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="rounded-2xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-brand-900 hover:border-brand-800/30"
              >
                {t.hero.ctaSample}
              </Link>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 text-xs text-black/60">
              <div className="rounded-2xl border border-black/5 bg-white p-3">
                <div className="text-brand-900 font-semibold">Price</div>
                <div>Competitive</div>
              </div>
              <div className="rounded-2xl border border-black/5 bg-white p-3">
                <div className="text-brand-900 font-semibold">Quality</div>
                <div>Consistent</div>
              </div>
              <div className="rounded-2xl border border-black/5 bg-white p-3">
                <div className="text-brand-900 font-semibold">Trace</div>
                <div>Batch records</div>
              </div>
            </div>
          </div>

          {/* Visual placeholder (no photos yet) */}
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-3xl border border-black/5 bg-white shadow-sm">
              <div className="p-6">
                <div className="text-sm font-semibold text-brand-950">
                  {locale === "zh" ? "再生塑膠粒供應｜示意圖" : "Pellets Supply | Placeholder"}
                </div>
                <p className="mt-2 text-sm text-black/60">
                  {locale === "zh"
                    ? "目前先用示意卡片，之後可替換成產線/料粒實拍或品牌視覺。"
                    : "Placeholder panel—replace with factory/pellets photos later."}
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {materials.map((m) => (
                    <div key={m} className="rounded-2xl bg-brand-100 p-4">
                      <div className="text-xs text-black/60">Material</div>
                      <div className="mt-1 text-lg font-semibold text-brand-950">{m}</div>
                      <div className="mt-2 h-1 w-10 rounded-full bg-brand-600" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -bottom-6 -right-6 hidden h-24 w-24 rounded-3xl bg-brand-800 md:block" />
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-xl font-semibold text-brand-950 md:text-2xl">
          {t.advantages.title}
        </h2>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Card title={t.advantages.a1.t} desc={t.advantages.a1.d} />
          <Card title={t.advantages.a2.t} desc={t.advantages.a2.d} />
          <Card title={t.advantages.a3.t} desc={t.advantages.a3.d} />
        </div>
      </section>

      {/* Materials */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div>
              <h2 className="text-xl font-semibold text-brand-950 md:text-2xl">
                {t.materials.title}
              </h2>
              <p className="mt-2 text-sm text-black/60">{t.materials.subtitle}</p>
            </div>
            <Link
              href={`/${locale}/products`}
              className="w-fit rounded-2xl border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-brand-900 hover:border-brand-800/30"
            >
              {locale === "zh" ? "查看全部產品" : "View all products"}
            </Link>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-5">
            {materials.map((m) => (
              <Link
                key={m}
                href={`/${locale}/products?material=${m}`}
                className="group rounded-3xl border border-black/5 bg-brand-100 p-5 hover:border-brand-800/20"
              >
                <div className="text-xs text-black/60">Material</div>
                <div className="mt-2 text-2xl font-semibold text-brand-950">{m}</div>
                <div className="mt-4 h-1 w-10 rounded-full bg-brand-600 transition-all group-hover:w-14" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-brand-100">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-xl font-semibold text-brand-950 md:text-2xl">
            {t.certs.title}
          </h2>
          <p className="mt-2 text-sm text-black/60">{t.certs.subtitle}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            {["ISO 9001:2015", "TÜV", "GRS"].map((c) => (
              <div key={c} className="rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-brand-900">
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-xl font-semibold text-brand-950 md:text-2xl">{t.cta.title}</h2>
          <p className="mt-2 text-sm text-black/60">{t.cta.subtitle}</p>
          <div className="mt-6">
            <Link
              href={`/${locale}/contact`}
              className="rounded-2xl bg-brand-800 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-900"
            >
              {t.cta.button}
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/5 bg-white">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-3">
          <div>
            <div className="text-sm font-semibold text-brand-950">{t.footer.company}</div>
            <div className="mt-2 text-sm text-black/60">{t.footer.addr}</div>
          </div>
          <div className="text-sm text-black/60">
            <div className="font-semibold text-brand-950">{locale === "zh" ? "聯絡" : "Contact"}</div>
            <div className="mt-2">{t.footer.tel}</div>
            <div>{t.footer.email}</div>
          </div>
          <div className="text-sm text-black/60">
            <div className="font-semibold text-brand-950">© {new Date().getFullYear()} YUANTSUN</div>
            <div className="mt-2">{locale === "zh" ? "All rights reserved." : "All rights reserved."}</div>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
      <div className="text-base font-semibold text-brand-950">{title}</div>
      <div className="mt-2 text-sm leading-6 text-black/60">{desc}</div>
      <div className="mt-5 h-1 w-10 rounded-full bg-brand-600" />
    </div>
  );
}