function SignalLogo({
  className = "",
  barClassName = "",
}: {
  className?: string;
  barClassName?: string;
}) {
  return (
    <svg
      viewBox="0 0 48 40"
      aria-hidden="true"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0" y="24" width="7" height="16" rx="1.5" className={barClassName} />
      <rect x="12" y="16" width="7" height="24" rx="1.5" className={barClassName} />
      <rect x="24" y="8" width="7" height="32" rx="1.5" className={barClassName} />
      <rect x="36" y="0" width="7" height="40" rx="1.5" className={barClassName} />
    </svg>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] uppercase tracking-[0.34em] text-white/42">
      {children}
    </p>
  );
}

function ServiceCard({
  title,
  text,
  icon,
}: {
  title: string;
  text: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="min-h-[220px] border-l border-white/10 pl-8">
      <div className="mb-5 text-[#5f7eaf]">{icon}</div>
      <h3 className="mb-3 text-[28px] font-semibold tracking-[-0.02em] text-white">
        {title}
      </h3>
      <p className="max-w-[320px] text-[17px] leading-8 text-white/68">{text}</p>
    </div>
  );
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#12233d] text-[13px] text-[#88a6d8]">
        ✓
      </span>
      <span className="text-[17px] leading-8 text-white/72">{children}</span>
    </li>
  );
}

function TrustPill({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[13px] uppercase tracking-[0.18em] text-white/58">
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#06101d] text-white">
      <section className="relative overflow-hidden border-b border-white/8">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgba(63,104,180,0.20),transparent_20%),radial-gradient(circle_at_72%_18%,rgba(255,255,255,0.05),transparent_10%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(6,16,29,0.08),rgba(6,16,29,0.76)_58%,#06101d_100%)]" />
        </div>

        <div className="relative mx-auto max-w-[1280px] px-8 py-8 md:px-12 xl:px-16">
          <header className="mb-16 flex items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <SignalLogo
                className="h-10 w-10"
                barClassName="fill-[#5576a9]"
              />
              <span className="text-[18px] font-medium tracking-[0.32em] text-white/95">
                LINKRA
              </span>
            </div>

            <div className="hidden items-center gap-5 md:flex">
              <span className="text-[12px] uppercase tracking-[0.28em] text-white/50">
                Hemsidan är under uppbyggnad
              </span>
              <span className="h-px w-10 bg-white/18" />
            </div>
          </header>

          <div className="grid min-h-[88svh] items-center gap-20 py-12 md:grid-cols-[1.08fr_0.92fr] md:py-20 xl:min-h-[96svh]">
            <div className="max-w-[780px]">
              <h1 className="max-w-[840px] text-5xl font-semibold leading-[1.03] tracking-[-0.045em] text-white md:text-6xl xl:text-[72px]">
                Bättre överblick.
                <br />
                Rätt beslut för verksamheten.
              </h1>

              <div className="mt-10 max-w-[780px] border-l-2 border-[#5475a8] pl-5">
                <p className="text-[19px] leading-9 text-white/74 md:text-[20px]">
                  Linkra hjälper företag att jämföra alternativ, förstå
                  skillnaderna och samla rätt lösningar under ett och samma tak.
                  Mobilabonnemang, växel, fiber, IoT, WiFi, hårdvara och
                  närliggande tjänster väljs utifrån verksamhetens behov – inte
                  utifrån en enskild leverantör.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <TrustPill>Flera leverantörer</TrustPill>
                <TrustPill>Bättre beslutsunderlag</TrustPill>
                <TrustPill>Rätt lösning från början</TrustPill>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#tjanster"
                  className="inline-flex min-w-[168px] items-center justify-center rounded-md bg-[#5a79aa] px-7 py-4 text-[14px] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#6888bb]"
                >
                  Vad vi gör
                </a>
                <a
                  href="#kontakt"
                  className="inline-flex min-w-[168px] items-center justify-center rounded-md border border-white/18 px-7 py-4 text-[14px] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-white/5"
                >
                  Kontakta oss
                </a>
              </div>

              <div className="mt-8 text-[13px] uppercase tracking-[0.24em] text-white/34">
                Arbetar med företag i Sverige inom telekom, IT och affärsstöd
              </div>
            </div>

            <div className="relative flex flex-col items-center justify-center text-center md:pt-10">
              <div className="absolute h-[280px] w-[280px] rounded-full bg-[#3f68b4]/20 blur-[120px]" />

              <SignalLogo
                className="relative mb-8 h-20 w-20"
                barClassName="fill-[#5576a9]"
              />

              <div className="mb-5 text-[54px] font-medium tracking-[0.22em] text-white md:text-[72px]">
                LINKRA
              </div>

              <div className="text-[16px] uppercase tracking-[0.34em] text-white/75 md:text-[18px]">
                Telekom | IT | Affärsstöd
              </div>

              <div className="mt-10 max-w-[520px] text-[13px] uppercase tracking-[0.28em] text-white/38">
                Flera leverantörer • Tydligare jämförelser • En enklare väg framåt
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="tjanster" className="border-b border-white/8">
        <div className="mx-auto max-w-[1280px] px-8 py-24 md:px-12 md:py-32 xl:px-16 xl:py-36">
          <div className="mb-14">
            <SectionLabel>Vad vi gör</SectionLabel>
          </div>

          <div className="grid gap-14 md:grid-cols-2 xl:grid-cols-4">
            <ServiceCard
              title="Telekom"
              text="Mobilabonnemang, företagsväxel och operatörstjänster med fokus på det som faktiskt passar verksamheten bäst."
              icon={
                <svg
                  viewBox="0 0 32 32"
                  className="h-10 w-10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M16 24V14" />
                  <path d="M10 26L16 14L22 26" />
                  <path d="M9 10a9 9 0 0 1 14 0" />
                  <path d="M12 13a5.5 5.5 0 0 1 8 0" />
                </svg>
              }
            />

            <ServiceCard
              title="Uppkoppling & nätverk"
              text="Fiber, WiFi, IoT och kringliggande infrastruktur som skapar stabil drift, bättre täckning och rätt förutsättningar framåt."
              icon={
                <svg
                  viewBox="0 0 32 32"
                  className="h-10 w-10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M10 24h12a6 6 0 0 0 .8-11.95A8 8 0 0 0 8.5 14 5 5 0 0 0 10 24Z" />
                </svg>
              }
            />

            <ServiceCard
              title="Hårdvara & utrustning"
              text="Mobiltelefoner, skrivare, kaffemaskiner och annan utrustning som behöver fungera i vardagen utan onödigt krångel."
              icon={
                <svg
                  viewBox="0 0 32 32"
                  className="h-10 w-10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <rect x="7" y="5" width="18" height="22" rx="3" />
                  <path d="M12 9h8" />
                  <path d="M12 23h8" />
                </svg>
              }
            />

            <ServiceCard
              title="Affärsstöd"
              text="Mötesbokning, samordning och kommersiellt stöd för företag som vill få bättre struktur, bättre flyt och bättre resultat."
              icon={
                <svg
                  viewBox="0 0 32 32"
                  className="h-10 w-10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M6 24h4v-6H6v6Z" />
                  <path d="M14 24h4V14h-4v10Z" />
                  <path d="M22 24h4V9h-4v15Z" />
                  <path d="M6 10l6-4l5 3l9-6" />
                  <path d="M22 3h4v4" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      <section className="border-b border-white/8 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-8 md:px-12 xl:px-16">
          <div className="mb-16">
            <SectionLabel>Hur vi arbetar</SectionLabel>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <div className="mb-4 text-white/30">01</div>
              <h3 className="mb-2 text-lg font-medium text-white">
                Förstå behovet
              </h3>
              <p className="text-[17px] leading-8 text-white/60">
                Vi börjar alltid med att förstå verksamheten, nuläget och vad som
                faktiskt behöver förbättras.
              </p>
            </div>

            <div>
              <div className="mb-4 text-white/30">02</div>
              <h3 className="mb-2 text-lg font-medium text-white">
                Jämföra alternativ
              </h3>
              <p className="text-[17px] leading-8 text-white/60">
                Flera leverantörer, flera lösningar – vi visar vad som skiljer och
                vad som faktiskt spelar roll.
              </p>
            </div>

            <div>
              <div className="mb-4 text-white/30">03</div>
              <h3 className="mb-2 text-lg font-medium text-white">
                Implementera rätt lösning
              </h3>
              <p className="text-[17px] leading-8 text-white/60">
                När beslutet är taget säkerställer vi att allt fungerar i
                praktiken – inte bara på papper.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/8">
        <div className="mx-auto max-w-[1280px] px-8 py-24 md:px-12 md:py-32 xl:px-16 xl:py-36">
          <div className="mb-14">
            <SectionLabel>Så arbetar vi</SectionLabel>
          </div>

          <div className="grid gap-20 xl:grid-cols-[1.05fr_0.95fr]">
            <div>
              <h2 className="max-w-[760px] text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-white md:text-5xl">
                En partner för företag som vill fatta rätt beslut från början.
              </h2>

              <p className="mt-8 max-w-[760px] text-[19px] leading-9 text-white/72">
                I stället för att ni behöver jaga flera olika leverantörer,
                jämföra lösningar på egen hand och försöka hålla ihop allt internt,
                får ni en tydligare process och bättre beslutsunderlag från början.
                Målet är enkla, hållbara och affärsmässigt rätt beslut över tid.
              </p>

              <ul className="mt-10 space-y-4">
                <CheckItem>
                  Flera leverantörer och fler relevanta alternativ att välja mellan
                </CheckItem>
                <CheckItem>
                  Enklare väg från behov till färdig lösning
                </CheckItem>
                <CheckItem>
                  Fokus på vad som fungerar i praktiken, inte bara i ett säljblad
                </CheckItem>
              </ul>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7">
                <SectionLabel>Område</SectionLabel>
                <p className="mt-4 text-[24px] font-semibold tracking-[-0.02em] text-white">
                  Flera leverantörer
                </p>
                <p className="mt-4 text-[17px] leading-8 text-white/68">
                  Tillgång till flera av marknadens ledande operatörer och
                  leverantörer genom etablerade samarbeten. Val av lösning utgår
                  alltid från verksamhetens behov – inte från en enskild aktör.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7">
                <SectionLabel>Fokus</SectionLabel>
                <p className="mt-4 text-[24px] font-semibold tracking-[-0.02em] text-white">
                  Helheten först
                </p>
                <p className="mt-4 text-[17px] leading-8 text-white/68">
                  Telekom, uppkoppling, nätverk, utrustning och närliggande
                  tjänster ses som delar av samma affär, inte som isolerade köp.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7">
                <SectionLabel>Arbetssätt</SectionLabel>
                <p className="mt-4 text-[24px] font-semibold tracking-[-0.02em] text-white">
                  Tydligare väg framåt
                </p>
                <p className="mt-4 text-[17px] leading-8 text-white/68">
                  Mindre tid på att jämföra, samordna och jaga svar. Mer tid på att
                  driva verksamheten framåt.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7">
                <SectionLabel>Resultat</SectionLabel>
                <p className="mt-4 text-[24px] font-semibold tracking-[-0.02em] text-white">
                  Bättre affärer
                </p>
                <p className="mt-4 text-[17px] leading-8 text-white/68">
                  Rätt lösning från början ger färre felköp, bättre flyt och en mer
                  hållbar affär över tid.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/8">
        <div className="mx-auto grid max-w-[1280px] gap-16 px-8 py-20 md:px-12 md:py-24 xl:grid-cols-[1fr_0.9fr] xl:px-16">
          <div>
            <SectionLabel>Varför Linkra</SectionLabel>

            <h2 className="mt-4 max-w-[760px] text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-white md:text-5xl">
              När flera beslut hänger ihop behöver någon hålla ihop helheten.
            </h2>

            <p className="mt-8 max-w-[760px] text-[19px] leading-9 text-white/72">
              För många företag blir telekom, uppkoppling och utrustning flera
              separata frågor med olika kontaktvägar, olika säljpitchar och olika
              avtal. Linkra gör det enklare att se helheten och fatta beslut som
              fungerar tillsammans – både praktiskt och affärsmässigt.
            </p>
          </div>

          <div id="kontakt" className="pt-2">
            <SectionLabel>Kontakt</SectionLabel>

            <h3 className="mt-4 text-[28px] font-medium tracking-[-0.01em] text-white">
              Jens Jonsson
            </h3>

            <p className="mt-1 text-[16px] text-white/50">VD, Linkra AB</p>

            <div className="mt-6 space-y-3 text-[16px] text-white/70">
              <a
                href="mailto:jens.jonsson@linkragruppen.se"
                className="block transition hover:text-white"
              >
                jens.jonsson@linkragruppen.se
              </a>

              <a
                href="tel:0733118772"
                className="block transition hover:text-white"
              >
                073-311 87 72
              </a>

              <a
                href="https://www.linkragruppen.se"
                className="block transition hover:text-white"
              >
                www.linkragruppen.se
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-[1280px] px-8 py-10 text-center text-[15px] text-white/40 md:px-12 xl:px-16">
        © 2026 Linkra AB &nbsp;&nbsp;|&nbsp;&nbsp; Alla rättigheter förbehållna
      </footer>
    </main>
  );
}