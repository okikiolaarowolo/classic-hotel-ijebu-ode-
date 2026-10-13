import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Classic Hotel Ijebu-Ode | Unofficial Website Concept" },
      {
        name: "description",
        content:
          "An independent website concept for Classic Hotel in Ijebu-Ode, Ogun State. Hotel details are based on public listings; this concept is not affiliated with the hotel.",
      },
    ],
    links: [{ rel: "preconnect", href: "https://images.unsplash.com" }],
  }),
  component: Index,
});

const hotelPhoto =
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1800&q=85";
const roomPhoto =
  "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1000&q=80";
const poolPhoto =
  "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1000&q=80";
const diningPhoto =
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=80";
const phone = "+2347056917585";
const whatsapp = `https://wa.me/${phone.replace(/\D/g, "")}?text=${encodeURIComponent(
  "Hello, I would like to enquire about Classic Hotel in Ijebu-Ode. Please share current room availability and rates.",
)}`;

function Index() {
  return (
    <main className="classic-site">
      <div className="concept-note">
        <span className="concept-dot" /> Independent concept demo · Not the hotel's official website
      </div>
      <header className="site-nav">
        <a className="brand" href="#top" aria-label="Classic Hotel home">
          <span className="brand-mark">C</span>
          <span>
            CLASSIC <small>HOTEL · IJEBU-ODE</small>
          </span>
        </a>
        <nav>
          <a href="#experience">Experience</a>
          <a href="#amenities">Facilities</a>
          <a href="#location">Location</a>
        </nav>
        <a className="nav-cta" href={whatsapp} target="_blank" rel="noreferrer">
          Enquire <span>↗</span>
        </a>
      </header>

      <section
        className="hero"
        id="top"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(10,22,19,.88) 0%, rgba(10,22,19,.55) 48%, rgba(10,22,19,.08) 100%), url(${hotelPhoto})`,
        }}
      >
        <div className="hero-grain" />
        <div className="hero-content reveal">
          <p className="eyebrow"><span /> A STAY IN IJEBU-ODE</p>
          <h1>Make room<br />for <em>something</em><br />special.</h1>
          <p className="hero-copy">
            A concept for presenting Classic Hotel's stay, facilities and location in one easy place on your phone.
          </p>
          <div className="hero-actions">
            <a className="button button-light" href={whatsapp} target="_blank" rel="noreferrer">
              Ask about a stay <span>↗</span>
            </a>
            <a className="text-link" href="#experience">Explore the hotel <span>↓</span></a>
          </div>
          <div className="hero-foot">
            <span>01 / IJEBU-ODE, OGUN STATE</span>
            <span>SCROLL TO EXPLORE ↓</span>
          </div>
        </div>
        <div className="hero-stamp">YOUR<br />TIME<br /><b>WELL SPENT</b></div>
      </section>

      <section className="intro section-pad" id="experience">
        <div className="section-kicker">01 / THE EXPERIENCE</div>
        <div className="intro-grid">
          <h2>A place to pause.<br /><em>A place to connect.</em></h2>
          <div>
            <p className="large-copy">
              Whether you're visiting town or planning a comfortable stopover, the details should be easy to find before you arrive.
            </p>
            <p className="muted-copy">
              This sample layout brings together publicly listed hotel information and clear contact options. Confirm rates, room types and availability directly with the hotel.
            </p>
          </div>
        </div>
      </section>

      <section className="feature-grid">
        <article className="feature feature-wide">
          <img src={roomPhoto} alt="Illustrative hotel room photograph, not a verified photo of Classic Hotel" loading="lazy" />
          <div className="image-label">
            <span>01</span>
            <div><h3>Rest easy</h3><p>Ask the hotel about current room options and rates.</p></div>
            <a href={whatsapp} target="_blank" rel="noreferrer" aria-label="Ask about rooms">↗</a>
          </div>
        </article>
        <article className="feature feature-pool">
          <img src={poolPhoto} alt="Illustrative swimming pool photograph, not a verified photo of Classic Hotel" loading="lazy" />
          <div className="image-label">
            <span>02</span>
            <div><h3>Make time to unwind</h3><p>A pool is listed among the hotel's amenities.</p></div>
          </div>
        </article>
        <article className="feature feature-dining">
          <img src={diningPhoto} alt="Illustrative dining photograph, not a verified photo of Classic Hotel" loading="lazy" />
          <div className="image-label">
            <span>03</span>
            <div><h3>Food & good company</h3><p>A restaurant and bar are listed among the facilities.</p></div>
          </div>
        </article>
      </section>

      <section className="amenities section-pad" id="amenities">
        <div className="section-kicker">02 / FACILITIES</div>
        <div className="amenities-heading">
          <h2>The essentials,<br /><em>within reach.</em></h2>
          <p>Based on public hotel listings. Please confirm current services with the hotel before making plans.</p>
        </div>
        <div className="amenity-list">
          <div><span>01</span><b>Swimming pool</b><i>↗</i></div>
          <div><span>02</span><b>Restaurant & bar</b><i>↗</i></div>
          <div><span>03</span><b>Wi-Fi</b><i>↗</i></div>
          <div><span>04</span><b>Parking</b><i>↗</i></div>
          <div><span>05</span><b>24-hour front desk listed</b><i>↗</i></div>
        </div>
      </section>

      <section className="location-section" id="location">
        <div className="location-copy">
          <div className="section-kicker">03 / FIND US</div>
          <h2>Meet us in<br /><em>Ijebu-Ode.</em></h2>
          <p>Public listings place Classic Hotel around Chris Ogunbanjo Way, near Imowo Roundabout, Ijebu-Ode, Ogun State.</p>
          <a className="button button-outline" href="https://www.google.com/maps/search/?api=1&query=Classic+Hotel+Ijebu+Ode+Chris+Ogunbanjo+Way" target="_blank" rel="noreferrer">
            Open directions <span>↗</span>
          </a>
        </div>
        <div className="map-card">
          <div className="map-lines" />
          <div className="map-pin"><span>✦</span></div>
          <div className="map-label">
            <small>CLASSIC HOTEL</small><b>Chris Ogunbanjo Way</b><span>Imowo Roundabout · Ijebu-Ode</span>
          </div>
          <span className="map-coordinate">OGUN STATE · NIGERIA</span>
        </div>
      </section>

      <section className="contact-cta">
        <div className="section-kicker">04 / START A CONVERSATION</div>
        <h2>Planning a stay?<br /><em>Let's make it simple.</em></h2>
        <p>For current room rates, availability and booking details, contact the hotel directly.</p>
        <div className="cta-actions">
          <a className="button button-light" href={whatsapp} target="_blank" rel="noreferrer">Enquire on WhatsApp <span>↗</span></a>
          <a className="button button-ghost" href={`tel:${phone}`}>Call +234 705 691 7585</a>
        </div>
        <div className="cta-disclaimer">Concept only. This page is not operated, approved or endorsed by Classic Hotel.</div>
      </section>
      <footer className="footer">
        <a className="brand brand-footer" href="#top"><span className="brand-mark">C</span><span>CLASSIC <small>HOTEL · IJEBU-ODE</small></span></a>
        <span>Independent website concept</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
