export default {
  async fetch() {
    const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Everything Is Fake | Official Film Site</title>
    <meta
      name="description"
      content="Official site for Everything Is Fake, a short film about ambition, image, and the cost of staying visible as a company collapses around its people."
    />
    <meta property="og:title" content="Everything Is Fake | Official Film Site" />
    <meta
      property="og:description"
      content="A short film about ambition, image, and the cost of staying visible as a company collapses around its people."
    />
    <meta property="og:type" content="website" />
    <meta name="theme-color" content="#131012" />
    <style>
      :root {
        --bg: #131012;
        --bg-soft: #1c171a;
        --panel: rgba(28, 23, 26, 0.92);
        --panel-strong: rgba(35, 28, 32, 0.98);
        --line: rgba(249, 238, 227, 0.12);
        --text: #f9eee3;
        --muted: #d8c4b2;
        --accent: #f2ae63;
        --shadow: 0 24px 70px rgba(0, 0, 0, 0.35);
      }

      * {
        box-sizing: border-box;
      }

      html {
        scroll-behavior: smooth;
      }

      body {
        margin: 0;
        color: var(--text);
        background:
          radial-gradient(circle at top, rgba(182, 89, 44, 0.18), transparent 34%),
          linear-gradient(180deg, #181316 0%, #131012 52%, #0d0a0b 100%);
        font-family: "Avenir Next", "Gill Sans", "Trebuchet MS", sans-serif;
        line-height: 1.48;
      }

      body::before {
        content: "";
        position: fixed;
        inset: 0;
        pointer-events: none;
        opacity: 0.22;
        background:
          linear-gradient(rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.03)) 0 0 / 100% 1px,
          linear-gradient(90deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0.02)) 0 0 / 1px 100%;
        mix-blend-mode: soft-light;
      }

      a {
        color: inherit;
      }

      img {
        display: block;
        width: 100%;
      }

      .wrap {
        width: min(1160px, calc(100vw - 32px));
        margin: 0 auto;
      }

      .topbar {
        position: sticky;
        top: 0;
        z-index: 10;
        border-bottom: 1px solid var(--line);
        backdrop-filter: blur(14px);
        background: rgba(19, 16, 18, 0.8);
      }

      .topbar-inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 18px;
        padding: 14px 0;
      }

      .brand {
        font-family: "Iowan Old Style", "Palatino Linotype", "Book Antiqua", serif;
        font-size: 1rem;
        letter-spacing: 0.14em;
        text-transform: uppercase;
      }

      .nav {
        display: flex;
        flex-wrap: wrap;
        gap: 14px;
        color: var(--muted);
        font-size: 0.92rem;
      }

      .nav a {
        text-decoration: none;
      }

      .hero {
        padding: 44px 0 26px;
      }

      .hero-grid {
        display: grid;
        grid-template-columns: minmax(0, 1.15fr) minmax(320px, 0.85fr);
        gap: 22px;
        align-items: stretch;
      }

      .hero-image {
        position: relative;
        min-height: 560px;
        overflow: hidden;
        border-radius: 30px;
        border: 1px solid var(--line);
        box-shadow: var(--shadow);
        background: #0d0a0b;
      }

      .hero-image img {
        height: 100%;
        object-fit: cover;
      }

      .hero-image::after {
        content: "";
        position: absolute;
        inset: 0;
        background:
          linear-gradient(180deg, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.55)),
          linear-gradient(90deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15));
      }

      .hero-copy {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 26px;
        border-radius: 30px;
        border: 1px solid var(--line);
        background: var(--panel);
        box-shadow: var(--shadow);
      }

      .eyebrow {
        display: inline-flex;
        width: fit-content;
        align-items: center;
        gap: 10px;
        margin-bottom: 16px;
        padding: 8px 12px;
        border-radius: 999px;
        border: 1px solid var(--line);
        color: var(--muted);
        text-transform: uppercase;
        letter-spacing: 0.08em;
        font-size: 0.78rem;
      }

      h1,
      h2,
      h3 {
        margin: 0;
        font-family: "Iowan Old Style", "Palatino Linotype", "Book Antiqua", serif;
        font-weight: 600;
      }

      h1 {
        font-size: clamp(3.2rem, 7vw, 5.9rem);
        line-height: 0.94;
        max-width: 7ch;
      }

      .logline {
        margin-top: 16px;
        font-size: clamp(1.2rem, 2.8vw, 1.6rem);
        color: #fff9f2;
        max-width: 23ch;
      }

      .lede {
        margin-top: 14px;
        max-width: 46ch;
        color: var(--muted);
      }

      .button-row {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        margin-top: 24px;
      }

      .button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 46px;
        padding: 0 16px;
        border-radius: 999px;
        border: 1px solid transparent;
        text-decoration: none;
        font-weight: 700;
      }

      .button.primary {
        background: var(--accent);
        color: #201713;
      }

      .button.secondary {
        border-color: var(--line);
        background: rgba(255, 255, 255, 0.03);
      }

      .meta-strip {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 12px;
        margin-top: 16px;
      }

      .meta-item {
        padding: 14px 16px;
        border-radius: 18px;
        border: 1px solid var(--line);
        background: rgba(255, 255, 255, 0.03);
      }

      .meta-label {
        display: block;
        color: var(--muted);
        font-size: 0.76rem;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }

      .meta-value {
        display: block;
        margin-top: 4px;
        font-size: 1rem;
      }

      .section {
        padding: 20px 0;
      }

      .section-head {
        margin-bottom: 16px;
      }

      .section-head h2 {
        font-size: clamp(2rem, 4vw, 3rem);
        margin-bottom: 8px;
      }

      .section-head p {
        max-width: 50ch;
        color: var(--muted);
      }

      .panel {
        padding: 22px;
        border-radius: 26px;
        border: 1px solid var(--line);
        background: var(--panel);
        box-shadow: var(--shadow);
      }

      .about-grid,
      .director-grid,
      .support-grid {
        display: grid;
        gap: 18px;
      }

      .about-grid {
        grid-template-columns: minmax(0, 1.15fr) minmax(260px, 0.85fr);
      }

      .director-grid {
        grid-template-columns: minmax(260px, 0.72fr) minmax(0, 1.28fr);
      }

      .support-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .stat-list {
        display: grid;
        gap: 14px;
      }

      .stat-row {
        display: flex;
        justify-content: space-between;
        gap: 14px;
        padding-bottom: 12px;
        border-bottom: 1px solid var(--line);
      }

      .stat-row:last-child {
        padding-bottom: 0;
        border-bottom: 0;
      }

      .stat-row strong {
        color: var(--muted);
        text-transform: uppercase;
        letter-spacing: 0.06em;
        font-size: 0.8rem;
        font-weight: 600;
      }

      .stat-row span:last-child {
        text-align: right;
      }

      .gallery {
        display: grid;
        grid-template-columns: 1.2fr 1fr 1fr;
        gap: 14px;
      }

      .gallery figure,
      .headshot-card {
        margin: 0;
        overflow: hidden;
        border-radius: 24px;
        border: 1px solid var(--line);
        background: var(--panel-strong);
        box-shadow: var(--shadow);
      }

      .gallery figure img {
        aspect-ratio: 4 / 3;
        object-fit: cover;
      }

      .gallery figcaption,
      .headshot-caption {
        padding: 12px 14px 14px;
        color: var(--muted);
        font-size: 0.92rem;
      }

      .headshot-card img {
        aspect-ratio: 4 / 5;
        object-fit: cover;
      }

      .list {
        margin: 0;
        padding-left: 18px;
      }

      .list li {
        margin-bottom: 10px;
        color: var(--muted);
      }

      .quote {
        margin-top: 14px;
        padding: 16px;
        border-radius: 20px;
        background: rgba(242, 174, 99, 0.09);
        border: 1px solid rgba(242, 174, 99, 0.2);
        font-family: "Iowan Old Style", "Palatino Linotype", "Book Antiqua", serif;
        font-size: 1.12rem;
        line-height: 1.34;
      }

      .footer {
        padding: 8px 0 46px;
        color: var(--muted);
        font-size: 0.92rem;
      }

      @media (max-width: 980px) {
        .hero-grid,
        .about-grid,
        .director-grid,
        .gallery,
        .support-grid,
        .meta-strip {
          grid-template-columns: 1fr;
        }

        .hero-image {
          min-height: 420px;
        }
      }

      @media (max-width: 640px) {
        .topbar-inner {
          flex-direction: column;
          align-items: flex-start;
        }

        .hero {
          padding-top: 28px;
        }

        .hero-copy,
        .hero-image,
        .panel,
        .gallery figure,
        .headshot-card {
          border-radius: 22px;
        }

        .stat-row {
          flex-direction: column;
        }

        .stat-row span:last-child {
          text-align: left;
        }
      }
    </style>
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "Movie",
        "name": "Everything Is Fake",
        "description": "A short film about ambition, image, and the cost of staying visible as a company collapses around its people.",
        "genre": ["Drama", "Satire"],
        "inLanguage": "en",
        "countryOfOrigin": "US",
        "director": {
          "@type": "Person",
          "name": "Adam Thomas"
        }
      }
    </script>
  </head>
  <body>
    <header class="topbar">
      <div class="wrap topbar-inner">
        <div class="brand">Everything Is Fake</div>
        <nav class="nav" aria-label="Primary">
          <a href="#film">Film</a>
          <a href="#gallery">On Set</a>
          <a href="#director">Director</a>
          <a href="#press">Press</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>

    <main class="wrap">
      <section class="hero">
        <div class="hero-grid">
          <div class="hero-image">
            <img
              src="/images/hero-on-set.jpg"
              alt="Behind-the-scenes image from Everything Is Fake showing a scene at a table during production."
            />
          </div>

          <div class="hero-copy">
            <span class="eyebrow">Official site for the short film</span>
            <h1>Everything Is Fake</h1>
            <p class="logline">
              As layoffs and scandal engulf his company, a rising creator must choose between personal visibility and the truth.
            </p>
            <p class="lede">
              A New York short film about ambition, image, and the performance of success.
            </p>
            <div class="button-row">
              <a class="button primary" href="mailto:adam@directedbyadam.com?subject=Everything%20Is%20Fake%20-%20Screener%20Request">Request Screener</a>
              <a class="button secondary" href="#press">Press + Awards</a>
            </div>
          </div>
        </div>

        <div class="meta-strip" aria-label="Film details">
          <div class="meta-item">
            <span class="meta-label">Format</span>
            <span class="meta-value">Short film</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Genre</span>
            <span class="meta-value">Drama / Satire</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Status</span>
            <span class="meta-value">In development</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Availability</span>
            <span class="meta-value">Screeners by request</span>
          </div>
        </div>
      </section>

      <section class="section" id="film">
        <div class="section-head">
          <h2>About the film</h2>
          <p>A satirical drama about aspiration, branding, and corporate decay.</p>
        </div>
        <div class="about-grid">
          <article class="panel">
            <h3>Synopsis</h3>
            <p>
              John has built his identity around looking indispensable. Online, he appears polished, ambitious, and in control.
              Offline, layoffs, corruption, and corporate self-protection are closing in. As the company he serves grows more unstable,
              he must decide whether visibility is actually power or just another trap.
            </p>
          </article>

          <aside class="panel">
            <h3>Film details</h3>
            <div class="stat-list">
              <div class="stat-row">
                <strong>Setting</strong>
                <span>New York tech world</span>
              </div>
              <div class="stat-row">
                <strong>Language</strong>
                <span>English</span>
              </div>
              <div class="stat-row">
                <strong>Premiere</strong>
                <span>To be announced</span>
              </div>
              <div class="stat-row">
                <strong>Materials</strong>
                <span>Screeners and press materials available upon request</span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section class="section" id="gallery">
        <div class="section-head">
          <h2>On set</h2>
          <p>
            Until the poster and final stills are locked, a small set of controlled production images does the work.
          </p>
        </div>
        <div class="gallery">
          <figure>
            <img
              src="/images/gallery-conversation.jpg"
              alt="Behind-the-scenes image from Everything Is Fake showing the director in conversation with cast."
              loading="lazy"
            />
            <figcaption>Director and cast in conversation during production.</figcaption>
          </figure>
          <figure>
            <img
              src="/images/gallery-camera.jpg"
              alt="Behind-the-scenes image from Everything Is Fake showing camera work and production setup."
              loading="lazy"
            />
            <figcaption>Camera and monitor work during setup.</figcaption>
          </figure>
          <figure>
            <img
              src="/images/gallery-direction.jpg"
              alt="Behind-the-scenes image from Everything Is Fake showing direction on set."
              loading="lazy"
            />
            <figcaption>Direction and collaboration between takes.</figcaption>
          </figure>
        </div>
      </section>

      <section class="section" id="director">
        <div class="section-head">
          <h2>Writer-director</h2>
          <p>Filmmaker context, kept tight.</p>
        </div>
        <div class="director-grid">
          <figure class="headshot-card">
            <img
              src="/images/adam-thomas-headshot.jpg"
              alt="Portrait of writer-director Adam Thomas."
              loading="lazy"
            />
            <figcaption class="headshot-caption">Adam Thomas, writer-director.</figcaption>
          </figure>

          <article class="panel">
            <h3>Adam Thomas</h3>
            <p>
              Adam Thomas is a New York-based writer-director whose work centers identity, labor, social performance, and the pressure
              institutions place on personal behavior. Selected directing credits include <em>Beelzepup</em> (2025),
              <em>Borders</em> (2024), and <em>The Great American Hangover</em> (2023).
            </p>
            <div class="quote">
              A short film about the pressure to stay visible inside a system that never intended to let you own anything.
            </div>
          </article>
        </div>
      </section>

      <section class="section" id="press">
        <div class="section-head">
          <h2>Press and awards</h2>
          <p>Public intrigue up front. Supporting materials on request.</p>
        </div>
        <div class="support-grid">
          <article class="panel">
            <h3>Available now</h3>
            <ul class="list">
              <li>Official logline and synopsis</li>
              <li>Director bio and project overview</li>
              <li>Selected on-set imagery</li>
              <li>Direct screener and inquiry path</li>
            </ul>
          </article>
          <article class="panel">
            <h3>In progress</h3>
            <ul class="list">
              <li>Poster art and final stills</li>
              <li>Formal director statement</li>
              <li>Downloadable press kit PDF</li>
              <li>Festival selections and awards updates</li>
            </ul>
          </article>
        </div>
      </section>

      <section class="section" id="contact">
        <div class="section-head">
          <h2>Contact</h2>
          <p>Festival programming, screener requests, and press inquiries.</p>
        </div>
        <div class="panel">
          <p><strong>Email:</strong> <a href="mailto:adam@directedbyadam.com">adam@directedbyadam.com</a></p>
          <p><strong>Website:</strong> <a href="https://directedbyadam.com">directedbyadam.com</a></p>
        </div>
      </section>
    </main>

    <footer class="wrap footer">
      <p>Everything Is Fake is a short film by Adam Thomas. All rights reserved.</p>
    </footer>
  </body>
</html>`;

    return new Response(html, {
      headers: {
        "content-type": "text/html; charset=UTF-8",
        "cache-control": "public, max-age=300",
      },
    });
  },
};
