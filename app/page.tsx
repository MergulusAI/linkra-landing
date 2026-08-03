"use client";

import { useState } from "react";

type Tab = "hem" | "telekom" | "webb";

function Contact() {
  return (
    <section id="kontakt">
      <div className="wrap">
        <div className="contact-box">
          <div className="num center">Kontakt</div>
          <h2>Låt oss ta ett förutsättningslöst samtal</h2>
          <p>
            Ett första möte kostar ingenting och tar 30 minuter — om er telefoni,
            er hemsida eller båda. Sen bestämmer ni själva.
          </p>
          <a className="btn primary" href="mailto:jens.jonsson@linkragruppen.se">
            Boka kostnadsfritt möte
          </a>
          <div className="contact-meta">
            <a href="mailto:jens.jonsson@linkragruppen.se">✉ jens.jonsson@linkragruppen.se</a>
            <a href="tel:0733118772">✆ 073-311 87 72</a>
            <span>Jens Jonsson, VD — Linkra AB</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [tab, setTab] = useState<Tab>("hem");

  const go = (t: Tab) => {
    setTab(t);
    window.scrollTo(0, 0);
  };

  const scrollToContact = () => {
    document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav>
        <div className="nav-inner">
          <button className="logo" onClick={() => go("hem")}>
            <span className="logo-mark">L</span> Linkra
          </button>
          <div className="nav-links">
            <button className={`tab ${tab === "hem" ? "active" : ""}`} onClick={() => go("hem")}>
              Hem
            </button>
            <button className={`tab ${tab === "telekom" ? "active" : ""}`} onClick={() => go("telekom")}>
              Telekom &amp; IT
            </button>
            <button className={`tab ${tab === "webb" ? "active" : ""}`} onClick={() => go("webb")}>
              Webbdesign
            </button>
            <button className="btn nav-cta" onClick={scrollToContact}>
              Kontakt
            </button>
          </div>
        </div>
      </nav>

      {tab === "hem" && (
        <div>
          <header className="hero">
            <div className="wrap">
              <div className="pill">
                <span className="dot"></span> Varberg · Hjälper företag i hela Sverige
              </div>
              <h1>
                Bättre överblick.
                <br />
                Rätt beslut för verksamheten.
              </h1>
              <p className="lead">
                Linkra hjälper företag med två saker: rätt lösningar inom telekom
                och IT — och moderna hemsidor som ger fler kunder. Oberoende
                rådgivning, fasta priser, en kontaktperson.
              </p>
              <div className="hero-ctas">
                <button className="btn primary" onClick={scrollToContact}>
                  Boka kostnadsfritt möte
                </button>
                <button className="btn ghost" onClick={() => go("webb")}>
                  Se webbdesign →
                </button>
              </div>
            </div>
          </header>

          <section className="no-line" style={{ paddingTop: 40 }}>
            <div className="wrap">
              <div className="num">Vad vi gör</div>
              <h2 className="title">Två områden. Samma princip: rätt från början.</h2>
              <p className="sub">
                Oavsett om det gäller er telefoni eller er hemsida är misstaget
                detsamma — lösningar som valts utan riktig jämförelse. Vi ger er
                beslutsunderlag istället för säljargument.
              </p>
              <div className="grid">
                <button className="card link" onClick={() => go("telekom")}>
                  <div className="icon">📡</div>
                  <h3>Telekom &amp; IT</h3>
                  <p>
                    Mobilabonnemang, växel, fiber, nätverk och hårdvara — vi jämför
                    flera leverantörer och förhandlar åt er, som en neutral part på
                    er sida av bordet.
                  </p>
                  <div className="go">Utforska telekom &amp; IT →</div>
                </button>
                <button className="card link" onClick={() => go("webb")}>
                  <div className="icon">🖥</div>
                  <h3>Webbdesign</h3>
                  <p>
                    Moderna hemsidor för lokala företag — med offertformulär som gör
                    besökare till kunder. Fast pris, klar inom en vecka, drift och
                    uppdateringar till fast månadskostnad.
                  </p>
                  <div className="go">Utforska webbdesign →</div>
                </button>
              </div>
            </div>
          </section>

          <section>
            <div className="wrap">
              <div className="num">Så jobbar vi</div>
              <h2 className="title">Från kartläggning till leverans</h2>
              <p className="sub">Samma enkla process oavsett uppdrag.</p>
              <div className="steps">
                <div className="step">
                  <div className="n">01</div>
                  <h3>Kartläggning</h3>
                  <p>
                    Vi går igenom ert nuläge — avtal, kostnader, behov eller er
                    nuvarande webbnärvaro.
                  </p>
                </div>
                <div className="step">
                  <div className="n">02</div>
                  <h3>Förslag</h3>
                  <p>
                    Ni får ett konkret förslag med fast pris — jämförbart, tydligt
                    och utan förpliktelser.
                  </p>
                </div>
                <div className="step">
                  <div className="n">03</div>
                  <h3>Leverans</h3>
                  <p>
                    Vi genomför, ni godkänner. Och vi finns kvar som er kontakt
                    långt efter leverans.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Contact />
        </div>
      )}

      {tab === "telekom" && (
        <div>
          <header className="hero compact">
            <div className="wrap">
              <div className="pill">
                <span className="dot"></span> Oberoende rådgivning
              </div>
              <h1>Telekom &amp; IT — utan säljsnack</h1>
              <p className="lead">
                Vi representerar er, inte en leverantör. Flera offerter, tydliga
                jämförelser och rätt lösning från början.
              </p>
              <div className="hero-ctas">
                <button className="btn primary" onClick={scrollToContact}>
                  Boka kostnadsfri genomgång
                </button>
              </div>
            </div>
          </header>

          <section className="no-line" style={{ paddingTop: 30 }}>
            <div className="wrap">
              <div className="num">01 — Tjänster</div>
              <h2 className="title">Fyra områden. En kontakt.</h2>
              <p className="sub">
                Istället för att förhandla med fem leverantörer pratar ni med oss.
                Vi tar in offerterna, jämför dem och presenterar det som faktiskt
                passar er verksamhet.
              </p>
              <div className="grid">
                <div className="card">
                  <div className="icon">📡</div>
                  <h3>Telekom</h3>
                  <p>
                    Mobilabonnemang och företagsväxel — rätt dimensionerat från
                    början, utan onödiga tillägg.
                  </p>
                  <span className="tag">Abonnemang · Växel</span>
                </div>
                <div className="card">
                  <div className="icon">🌐</div>
                  <h3>Uppkoppling &amp; nätverk</h3>
                  <p>
                    Fiber, WiFi och IoT-infrastruktur som skalar med verksamheten —
                    jämfört över flera operatörer.
                  </p>
                  <span className="tag">Fiber · WiFi · IoT</span>
                </div>
                <div className="card">
                  <div className="icon">💻</div>
                  <h3>Hårdvara &amp; utrustning</h3>
                  <p>
                    Mobiler, skrivare och övrig utrustning — upphandlat samlat så ni
                    får volympriser även som mindre bolag.
                  </p>
                  <span className="tag">Mobiler · Skrivare</span>
                </div>
                <div className="card">
                  <div className="icon">🤝</div>
                  <h3>Affärsstöd</h3>
                  <p>
                    Mötesbokning och kommersiell samordning — vi avlastar er
                    organisation där det gör som störst skillnad.
                  </p>
                  <span className="tag">Mötesbokning · Samordning</span>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="wrap">
              <div className="num">02 — Varför Linkra</div>
              <div className="why">
                <div>
                  <h2 className="title">
                    Neutral part.
                    <br />
                    Er sida av bordet.
                  </h2>
                  <ul>
                    <li>Vi representerar er — inte en enskild leverantör med säljkvoter.</li>
                    <li>Flera leverantörer jämförs varje gång. Tydligare jämförelser, bättre priser.</li>
                    <li>Rätt lösning från början — istället för dyra korrigeringar i efterhand.</li>
                    <li>En kontaktperson för hela er telekom- och IT-miljö.</li>
                  </ul>
                </div>
                <div className="quote-card">
                  <p>
                    &quot;De flesta företag betalar för mycket för fel lösningar —
                    inte för att de valt dåligt, utan för att de aldrig fått en
                    riktig jämförelse.&quot;
                  </p>
                  <div className="who">Jens Jonsson — VD, Linkra AB</div>
                </div>
              </div>
            </div>
          </section>

          <Contact />
        </div>
      )}

      {tab === "webb" && (
        <div>
          <header className="hero compact">
            <div className="wrap">
              <div className="pill">
                <span className="dot"></span> Fast pris · Klar inom en vecka
              </div>
              <h1>Hemsidor som ger fler kunder</h1>
              <p className="lead">
                Moderna, mobilanpassade hemsidor för lokala företag — med
                offertformulär som förvandlar besökare till förfrågningar. Inga
                timarvoden, inga överraskningar.
              </p>
              <div className="hero-ctas">
                <button className="btn primary" onClick={scrollToContact}>
                  Få ett kostnadsfritt förslag
                </button>
              </div>
            </div>
          </header>

          <section className="no-line" style={{ paddingTop: 30 }}>
            <div className="wrap">
              <div className="num">01 — Vad vi bygger</div>
              <h2 className="title">Allt ett lokalt företag behöver på nätet</h2>
              <p className="sub">
                Vi bygger inte &quot;webbprojekt&quot; — vi bygger säljverktyg.
                Varje sida designas för en sak: att en besökare ska höra av sig
                till er.
              </p>
              <div className="grid">
                <div className="card">
                  <div className="icon">✨</div>
                  <h3>Ny hemsida</h3>
                  <p>
                    Modern, snabb och mobilanpassad sida byggd kring ert varumärke —
                    med tydliga vägar till kontakt.
                  </p>
                  <span className="tag">Design · Innehåll · Publicering</span>
                </div>
                <div className="card">
                  <div className="icon">🔄</div>
                  <h3>Omgörning av befintlig sida</h3>
                  <p>
                    Har ni redan en sida som känns daterad? Vi bygger om den — och
                    visar er ett färdigt förslag innan ni bestämmer er.
                  </p>
                  <span className="tag">Redesign · Modernisering</span>
                </div>
                <div className="card">
                  <div className="icon">📝</div>
                  <h3>Offert- &amp; kontaktformulär</h3>
                  <p>
                    Låt kunder skicka förfrågningar dygnet runt — förfrågningarna
                    landar direkt i er inkorg.
                  </p>
                  <span className="tag">Formulär · Leads</span>
                </div>
                <div className="card">
                  <div className="icon">📍</div>
                  <h3>Synlighet på Google</h3>
                  <p>
                    Grundläggande sökoptimering och hjälp med er Google
                    Företagsprofil — så att lokala kunder hittar er först.
                  </p>
                  <span className="tag">SEO · Google-profil</span>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="wrap">
              <div className="num">02 — Priser</div>
              <h2 className="title">Fasta priser. Inga överraskningar.</h2>
              <p className="sub">
                Halva beloppet vid start, resten när ni godkänt sidan. Inga
                bindningstider på månadsavtalet.
              </p>
              <div className="prices">
                <div className="price">
                  <h3>Bas</h3>
                  <div className="amount">från 8 000 kr</div>
                  <div className="per">engångspris</div>
                  <ul>
                    <li>Modern enkelsidig hemsida</li>
                    <li>Mobilanpassad design</li>
                    <li>Kontakt- och offertformulär</li>
                    <li>Grundläggande Google-synlighet</li>
                    <li>Klar inom en vecka</li>
                  </ul>
                  <button className="btn ghost" onClick={scrollToContact}>
                    Kom igång
                  </button>
                </div>
                <div className="price featured">
                  <h3>Standard</h3>
                  <div className="amount">från 15 000 kr</div>
                  <div className="per">engångspris</div>
                  <ul>
                    <li>Allt i Bas</li>
                    <li>Flera sidor &amp; era projektbilder</li>
                    <li>Google Företagsprofil-optimering</li>
                    <li>E-post med egen domän</li>
                    <li>Genomgång på plats hos er</li>
                  </ul>
                  <button className="btn primary" onClick={scrollToContact}>
                    Kom igång
                  </button>
                </div>
                <div className="price">
                  <h3>Drift &amp; underhåll</h3>
                  <div className="amount">från 500 kr</div>
                  <div className="per">per månad</div>
                  <ul>
                    <li>Hosting, domän &amp; säkerhet</li>
                    <li>Löpande uppdateringar</li>
                    <li>Nya bilder &amp; texter vid behov</li>
                    <li>Hjälp med recensionssvar</li>
                    <li>Ingen bindningstid</li>
                  </ul>
                  <button className="btn ghost" onClick={scrollToContact}>
                    Läs mer
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="wrap">
              <div className="num">03 — Så går det till</div>
              <h2 className="title">Ni ser resultatet innan ni betalar fullt</h2>
              <p className="sub">Vi tror inte på långa projekt och luddiga offerter.</p>
              <div className="steps">
                <div className="step">
                  <div className="n">01</div>
                  <h3>Förslag först</h3>
                  <p>
                    Vi tar fram ett konkret designförslag på hur er nya sida kan se
                    ut — ofta innan ni ens bestämt er.
                  </p>
                </div>
                <div className="step">
                  <div className="n">02</div>
                  <h3>Anpassning</h3>
                  <p>
                    Gillar ni förslaget fyller vi det med ert riktiga innehåll —
                    bilder, texter och kontaktuppgifter.
                  </p>
                </div>
                <div className="step">
                  <div className="n">03</div>
                  <h3>Live inom en vecka</h3>
                  <p>
                    Sidan publiceras på er domän. Med driftavtalet håller vi den
                    sedan uppdaterad åt er.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Contact />
        </div>
      )}

      <footer>
        <div className="wrap foot">
          <span>© 2026 Linkra AB · Varberg</span>
          <span>
            <button onClick={() => go("hem")}>Hem</button> ·{" "}
            <button onClick={() => go("telekom")}>Telekom &amp; IT</button> ·{" "}
            <button onClick={() => go("webb")}>Webbdesign</button>
          </span>
        </div>
      </footer>
    </>
  );
}
