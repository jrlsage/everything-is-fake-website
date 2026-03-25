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
      content="Official site for Everything Is Fake, a short film about ambition, image, and the cost of staying visible inside a collapsing tech machine."
    />
    <meta property="og:title" content="Everything Is Fake | Official Film Site" />
    <meta
      property="og:description"
      content="A short film about ambition, image, and the cost of staying visible inside a collapsing tech machine."
    />
    <meta property="og:type" content="website" />
    <meta name="theme-color" content="#120f11" />
    <style>
      :root {
        --bg: #120f11;
        --bg-soft: #1b1519;
        --panel: rgba(27, 21, 25, 0.92);
        --panel-strong: rgba(37, 28, 34, 0.96);
        --ink: #f4eadf;
        --muted: #d1c2b3;
        --accent: #efab5b;
        --accent-soft: rgba(239, 171, 91, 0.18);
        --line: rgba(244, 234, 223, 0.14);
        --shadow: 0 18px 60px rgba(0, 0, 0, 0.38);
      }

      * {
        box-sizing: border-box;
      }

      html {
        scroll-behavior: smooth;
      }

      body {
        margin: 0;
        color: var(--ink);
        background:
          radial-gradient(circle at top, rgba(174, 59, 42, 0.18), transparent 32%),
          linear-gradient(180deg, #171215 0%, #120f11 55%, #0b090a 100%);
        font-family: "Avenir Next", "Gill Sans", "Trebuchet MS", sans-serif;
        line-height: 1.55;
      }

      body::before {
        content: "";
        position: fixed;
        inset: 0;
        pointer-events: none;
        opacity: 0.3;
        background:
          linear-gradient(rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.03)) 0 0 / 100% 1px,
          linear-gradient(90deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0.02)) 0 0 / 1px 100%;
        mix-blend-mode: soft-light;
      }

      a {
        color: inherit;
      }

      .wrap {
        width: min(1120px, calc(100vw - 32px));
        margin: 0 auto;
      }

      .topbar {
        position: sticky;
        top: 0;
        z-index: 10;
        backdrop-filter: blur(16px);
        background: rgba(18, 15, 17, 0.78);
        border-bottom: 1px solid var(--line);
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
        letter-spacing: 0.12em;
        text-transform: uppercase;
      }

      .nav {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        gap: 14px;
        font-size: 0.92rem;
        color: var(--muted);
      }

      .nav a {
        text-decoration: none;
      }

      .hero {
        padding: 68px 0 38px;
      }

      .hero-grid {
        display: grid;
        grid-template-columns: minmax(0, 1.25fr) minmax(300px, 0.75fr);
        gap: 28px;
        align-items: stretch;
      }

      .eyebrow {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        padding: 8px 12px;
        border: 1px solid var(--line);
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.03);
        color: var(--muted);
        font-size: 0.8rem;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }

      h1,
      h2,
      h3 {
        margin: 0;
        font-family: "Iowan Old Style", "Palatino Linotype", "Book Antiqua", serif;
        font-weight: 600;
      }

      h1 {
        margin-top: 16px;
        font-size: clamp(3rem, 8vw, 6rem);
        line-height: 0.96;
        max-width: 10ch;
      }

      .subhead {
        margin-top: 20px;
        max-width: 28ch;
        font-size: clamp(1.22rem, 2.8vw, 1.65rem);
        color: #fbf5ee;
      }

      .lead {
        margin-top: 18px;
        max-width: 62ch;
        color: var(--muted);
        font-size: 1.04rem;
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
        color: #171215;
      }

      .button.secondary {
        border-color: var(--line);
        background: rgba(255, 255, 255, 0.03);
      }

      .poster-card,
      .panel,
      .callout {
        border: 1px solid var(--line);
        background: var(--panel);
        box-shadow: var(--shadow);
      }

      .poster-card {
        position: relative;
        overflow: hidden;
        min-height: 520px;
        padding: 24px;
        border-radius: 28px;
        background:
          linear-gradient(180deg, rgba(239, 171, 91, 0.08), transparent 35%),
          radial-gradient(circle at 50% 18%, rgba(255, 255, 255, 0.16), transparent 28%),
          linear-gradient(160deg, #24191d 0%, #171215 100%);
      }

      .poster-card::after {
        content: "";
        position: absolute;
        inset: 18px;
        border: 1px solid rgba(244, 234, 223, 0.09);
        border-radius: 22px;
      }

      .poster-inner {
        position: relative;
        z-index: 1;
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: space-between;
        gap: 22px;
      }

      .poster-kicker {
        color: var(--muted);
        font-size: 0.83rem;
        text-transform: uppercase;
        letter-spacing: 0.18em;
      }

      .poster-title {
        font-size: clamp(2.2rem, 5vw, 4rem);
        line-height: 0.92;
        max-width: 7ch;
      }

      .poster-copy {
        max-width: 28ch;
        color: var(--muted);
      }

      .poster-stats {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 10px;
      }

      .stat {
        padding: 12px;
        border-radius: 16px;
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid rgba(244, 234, 223, 0.08);
      }

      .stat-label {
        display: block;
        color: var(--muted);
        font-size: 0.74rem;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }

      .stat-value {
        display: block;
        margin-top: 4px;
        font-size: 1rem;
      }

      .section {
        padding: 22px 0;
      }

      .section-head {
        margin-bottom: 18px;
      }

      .section-head h2 {
        font-size: clamp(2rem, 4vw, 3rem);
        margin-bottom: 8px;
      }

      .section-head p {
        max-width: 60ch;
        color: var(--muted);
      }

      .panel {
        border-radius: 24px;
        padding: 24px;
      }

      .story-grid,
      .theme-grid,
      .support-grid,
      .credits-grid {
        display: grid;
        gap: 18px;
      }

      .story-grid {
        grid-template-columns: minmax(0, 1.1fr) minmax(280px, 0.9fr);
      }

      .theme-grid {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }

      .support-grid,
      .credits-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .theme-card,
      .support-card,
      .credit-card {
        padding: 20px;
        border-radius: 20px;
        border: 1px solid var(--line);
        background: var(--panel-strong);
      }

      .theme-card h3,
      .support-card h3,
      .credit-card h3 {
        margin-bottom: 10px;
        font-size: 1.35rem;
      }

      .theme-card p,
      .support-card p,
      .credit-card p,
      .story-grid p,
      .callout p {
        color: var(--muted);
      }

      .detail-list {
        display: grid;
        gap: 14px;
      }

      .detail-row {
        display: flex;
        justify-content: space-between;
        gap: 12px;
        padding-bottom: 12px;
        border-bottom: 1px solid var(--line);
      }

      .detail-row:last-child {
        padding-bottom: 0;
        border-bottom: 0;
      }

      .detail-label {
        color: var(--muted);
        text-transform: uppercase;
        letter-spacing: 0.06em;
        font-size: 0.8rem;
      }

      .detail-value {
        text-align: right;
      }

      .quote {
        font-family: "Iowan Old Style", "Palatino Linotype", "Book Antiqua", serif;
        font-size: 1.45rem;
        line-height: 1.3;
        color: #fbf5ee;
      }

      .callout {
        margin-top: 18px;
        border-radius: 24px;
        padding: 24px;
        background:
          linear-gradient(135deg, rgba(239, 171, 91, 0.1), rgba(255, 255, 255, 0.02)),
          var(--panel);
      }

      .press-list {
        margin: 0;
        padding-left: 18px;
      }

      .press-list li {
        margin-bottom: 10px;
        color: var(--muted);
      }

      .footer {
        padding: 18px 0 44px;
        color: var(--muted);
        font-size: 0.92rem;
      }

      .footer a {
        text-decoration: none;
      }

      @media (max-width: 920px) {
        .hero-grid,
        .story-grid,
        .theme-grid,
        .support-grid,
        .credits-grid {
          grid-template-columns: 1fr;
        }

        .poster-card {
          min-height: 420px;
        }
      }

      @media (max-width: 640px) {
        .topbar-inner {
          align-items: flex-start;
          flex-direction: column;
        }

        .nav {
          justify-content: flex-start;
        }

        .hero {
          padding-top: 44px;
        }

        .panel,
        .theme-card,
        .support-card,
        .credit-card,
        .callout,
        .poster-card {
          border-radius: 20px;
        }

        .detail-row {
          flex-direction: column;
        }

        .detail-value {
          text-align: left;
        }
      }
    </style>
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "Movie",
        "name": "Everything Is Fake",
        "description": "A short film about ambition, image, and the cost of staying visible inside a collapsing tech machine.",
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
          <a href="#director">Director</a>
          <a href="#awards">Awards + Press</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>

    <main class="wrap">
      <section class="hero">
        <div class="hero-grid">
          <div>
            <span class="eyebrow">Official site for the short film</span>
            <h1>Everything Is Fake</h1>
            <p class="subhead">
              As layoffs and scandal engulf his company, a rising creator must choose between personal visibility and the truth.
            </p>
            <p class="lead">
              Set inside a collapsing tech machine, <em>Everything Is Fake</em> is a short film about image, labor, ambition,
              and the performance of success. It is built to intrigue an audience and orient festivals, juries, and press immediately.
            </p>
            <div class="button-row">
              <a class="button primary" href="mailto:adam@directedbyadam.com?subject=Everything%20Is%20Fake%20-%20Screener%20Request">Request Screener</a>
              <a class="button secondary" href="#awards">Awards + Press Info</a>
            </div>
          </div>

          <aside class="poster-card" aria-label="Film overview">
            <div class="poster-inner">
              <div>
                <div class="poster-kicker">Drama / Satire / Short Film</div>
                <h2 class="poster-title">Everything Is Fake</h2>
              </div>
              <p class="poster-copy">
                Social-media polish collides with real-life collapse as a worker tries to brand his way out of a system already
                consuming him.
              </p>
              <div class="poster-stats">
                <div class="stat">
                  <span class="stat-label">Status</span>
                  <span class="stat-value">In development</span>
                </div>
                <div class="stat">
                  <span class="stat-label">Setting</span>
                  <span class="stat-value">New York tech world</span>
                </div>
                <div class="stat">
                  <span class="stat-label">Format</span>
                  <span class="stat-value">Digital short</span>
                </div>
                <div class="stat">
                  <span class="stat-label">Availability</span>
                  <span class="stat-value">By request</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section class="section" id="film">
        <div class="section-head">
          <h2>This is a film first</h2>
          <p>
            The site now needs to behave like a film site, not a startup placeholder. That means story, mood, filmmaker voice,
            and clean access for programmers, awards committees, and press.
          </p>
        </div>
        <div class="story-grid">
          <article class="panel">
            <h3>Synopsis</h3>
            <p>
              John has built an identity around looking indispensable. Online, he appears polished, ambitious, and in control.
              Offline, layoffs, corruption, and corporate self-protection are closing in around him. As the company he serves
              grows more unstable, he has to decide whether visibility is actually power or just another trap.
            </p>
            <p>
              <em>Everything Is Fake</em> uses the split between curated social video and lived reality to expose how performance,
              loyalty, and aspiration can become tools of control.
            </p>
          </article>

          <aside class="panel">
            <h3>Film Snapshot</h3>
            <div class="detail-list">
              <div class="detail-row">
                <span class="detail-label">Genre</span>
                <span class="detail-value">Drama / Satire</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Runtime</span>
                <span class="detail-value">Short film</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Language</span>
                <span class="detail-value">English</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Country</span>
                <span class="detail-value">United States</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Premiere Status</span>
                <span class="detail-value">To be announced</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Screeners</span>
                <span class="detail-value">Festivals and qualified press by request</span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section class="section">
        <div class="section-head">
          <h2>Why people will lean in</h2>
          <p>
            Interest comes from tension, not administration. The page should sell the idea, the relevance, and the filmmaking
            language before it starts listing materials.
          </p>
        </div>
        <div class="theme-grid">
          <article class="theme-card">
            <h3>Image vs truth</h3>
            <p>
              The film turns the gap between social-media performance and actual life into the engine of the story.
            </p>
          </article>
          <article class="theme-card">
            <h3>Ambition under pressure</h3>
            <p>
              John is not just trying to survive. He is trying to become visible in a system that rewards performance over integrity.
            </p>
          </article>
          <article class="theme-card">
            <h3>Corporate rot with style</h3>
            <p>
              The visual language moves from curated vertical video into increasingly unstable reality, giving the film a built-in hook.
            </p>
          </article>
        </div>
      </section>

      <section class="section" id="director">
        <div class="section-head">
          <h2>Writer-director</h2>
          <p>
            The strongest version of this site needs filmmaker authorship on the page. That is how it stops feeling generic and starts
            feeling specific.
          </p>
        </div>
        <div class="story-grid">
          <article class="panel">
            <h3>Adam Thomas</h3>
            <p>
              Adam Thomas is a New York-based writer-director whose work centers identity, labor, social performance, and the ways
              institutions shape personal behavior. His selected directing credits include <em>Beelzepup</em> (2025),
              <em>Borders</em> (2024), and <em>The Great American Hangover</em> (2023).
            </p>
            <p>
              <em>Everything Is Fake</em> extends that interest into the modern workplace, where aspiration, personal branding, and
              corporate self-preservation blur into a single performance.
            </p>
          </article>

          <aside class="callout">
            <div class="quote">
              A short film about the pressure to stay visible inside a system that never intended to let you own anything.
            </div>
            <p>
              The next revision should swap this with language pulled directly from the formal director statement once that text is
              finalized.
            </p>
          </aside>
        </div>
      </section>

      <section class="section" id="awards">
        <div class="section-head">
          <h2>Awards, festivals, and press</h2>
          <p>
            Awards-ready does not mean pretending the film already has laurels. It means the infrastructure is clean, credible, and easy
            for gatekeepers to use.
          </p>
        </div>
        <div class="support-grid">
          <article class="support-card">
            <h3>What is ready now</h3>
            <ul class="press-list">
              <li>Official logline and synopsis</li>
              <li>Clear film metadata and premiere status</li>
              <li>Director bio and positioning</li>
              <li>Direct screener and press contact path</li>
            </ul>
          </article>
          <article class="support-card">
            <h3>What should come next</h3>
            <ul class="press-list">
              <li>Poster art and 3 to 5 strong stills</li>
              <li>Formal director statement</li>
              <li>Downloadable press kit PDF</li>
              <li>Festival selections and awards updates once earned</li>
            </ul>
          </article>
        </div>
        <div class="callout">
          <h3>For programmers, juries, and press</h3>
          <p>
            Screeners, press materials, and awards consideration information are available by request. This keeps the site public-facing
            and intriguing while still supporting professional review.
          </p>
          <div class="button-row">
            <a class="button primary" href="mailto:adam@directedbyadam.com?subject=Everything%20Is%20Fake%20-%20Press%20Inquiry">Press inquiry</a>
            <a class="button secondary" href="mailto:adam@directedbyadam.com?subject=Everything%20Is%20Fake%20-%20Festival%20Request">Festival request</a>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="section-head">
          <h2>Credits and materials</h2>
          <p>
            Even before the final assets are live, the site should show that a professional package is forming around the film.
          </p>
        </div>
        <div class="credits-grid">
          <article class="credit-card">
            <h3>Primary credit</h3>
            <p><strong>Writer / Director:</strong> Adam Thomas</p>
            <p>Additional cast and crew credits will be announced as materials are finalized.</p>
          </article>
          <article class="credit-card">
            <h3>Materials in progress</h3>
            <p>Director statement, poster, stills, press kit, screener workflow, and festival updates.</p>
          </article>
        </div>
      </section>

      <section class="section" id="contact">
        <div class="section-head">
          <h2>Contact</h2>
          <p>
            This should stay frictionless. If someone is interested, they should know exactly how to reach the film.
          </p>
        </div>
        <div class="story-grid">
          <article class="panel">
            <h3>General + professional inquiries</h3>
            <p><strong>Email:</strong> <a href="mailto:adam@directedbyadam.com">adam@directedbyadam.com</a></p>
            <p><strong>Website:</strong> <a href="https://directedbyadam.com">directedbyadam.com</a></p>
          </article>
          <aside class="panel">
            <h3>Use cases</h3>
            <p>Festival programming, awards consideration, press requests, screeners, and professional inquiries.</p>
          </aside>
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
