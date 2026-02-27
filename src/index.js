export default {
  async fetch() {
    const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Everything Is Fake | Official Film Site</title>
    <style>
      :root {
        --bg: #0e1117;
        --surface: #171b23;
        --text: #eceff4;
        --muted: #a9b1be;
        --accent: #f7b733;
        --line: #2a3140;
      }
      * { box-sizing: border-box; }
      body {
        margin: 0;
        font-family: "Avenir Next", Avenir, "Segoe UI", sans-serif;
        background: linear-gradient(160deg, #0c1018 0%, #111722 40%, #0a0d13 100%);
        color: var(--text);
        line-height: 1.5;
      }
      .wrap {
        max-width: 960px;
        margin: 0 auto;
        padding: 24px 18px 72px;
      }
      .tag {
        display: inline-block;
        border: 1px solid var(--accent);
        color: var(--accent);
        padding: 4px 10px;
        border-radius: 999px;
        font-size: 12px;
        letter-spacing: 0.04em;
        text-transform: uppercase;
      }
      h1 { font-size: clamp(34px, 8vw, 64px); margin: 14px 0 8px; line-height: 1.05; }
      h2 { font-size: 22px; margin: 0 0 10px; }
      p { margin: 0 0 12px; color: var(--text); }
      .logline { font-size: clamp(18px, 2.8vw, 24px); color: #f8fbff; max-width: 28ch; }
      .buttons { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 20px; }
      .btn {
        display: inline-block;
        text-decoration: none;
        color: #0a0d13;
        background: var(--accent);
        font-weight: 700;
        padding: 10px 14px;
        border-radius: 8px;
      }
      .btn.alt { background: transparent; color: var(--text); border: 1px solid var(--line); }
      .section {
        margin-top: 22px;
        border: 1px solid var(--line);
        background: color-mix(in srgb, var(--surface) 80%, black 20%);
        border-radius: 12px;
        padding: 18px;
      }
      .meta {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
        gap: 12px;
      }
      .item {
        border: 1px solid var(--line);
        border-radius: 10px;
        padding: 10px;
      }
      .label { color: var(--muted); font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; }
      .value { font-size: 15px; margin-top: 3px; }
      ul { margin: 8px 0 0 18px; padding: 0; }
      li { margin: 4px 0; color: #e3e8f0; }
      .muted { color: var(--muted); }
      footer { margin-top: 28px; color: var(--muted); font-size: 13px; }
    </style>
  </head>
  <body>
    <main class="wrap">
      <span class="tag">Short Film | In Development</span>
      <h1>Everything Is Fake</h1>
      <p class="logline">As layoffs and scandal engulf his company, a rising creator must choose between personal visibility and the truth.</p>
      <div class="buttons">
        <a class="btn" href="#teaser">Watch Teaser</a>
        <a class="btn alt" href="#contact">Request Screener</a>
      </div>

      <section class="section" id="teaser">
        <h2>Teaser + Stills</h2>
        <p class="muted">Teaser coming soon. Current visual mode: social-media polish vs real-life fracture.</p>
        <ul>
          <li>Poster still placeholder</li>
          <li>3 production still placeholders</li>
          <li>Director quote card placeholder</li>
        </ul>
      </section>

      <section class="section" id="snapshot">
        <h2>Film Snapshot</h2>
        <div class="meta">
          <div class="item"><div class="label">Genre</div><div class="value">Drama / Satire</div></div>
          <div class="item"><div class="label">Runtime</div><div class="value">TBD (Short)</div></div>
          <div class="item"><div class="label">Status</div><div class="value">In Development</div></div>
          <div class="item"><div class="label">Language</div><div class="value">English</div></div>
          <div class="item"><div class="label">Format</div><div class="value">Digital</div></div>
          <div class="item"><div class="label">Country</div><div class="value">USA</div></div>
        </div>
      </section>

      <section class="section" id="synopsis">
        <h2>Synopsis</h2>
        <p>John is building a personal brand inside a tech company as layoffs, corruption, and performance culture tighten around him. The life he broadcasts online is polished and aspirational; the life he actually lives is unstable, compromised, and increasingly controlled by forces above him.</p>
        <p class="muted">Full synopsis and spoiler-safe festival cut available in press kit.</p>
      </section>

      <section class="section" id="director">
        <h2>Director + Team</h2>
        <p><strong>Adam Thomas</strong> is a New York-based writer-director focused on identity, labor, and social performance. Selected directing credits include <em>Beelzepup</em> (2025), <em>Borders</em> (2024), and <em>The Great American Hangover</em> (2023).</p>
        <p class="muted">Additional cast/crew bios, headshots, and statements will be published with the official press kit.</p>
      </section>

      <section class="section" id="press">
        <h2>Press Kit (Coming Online)</h2>
        <ul>
          <li>Logline + short/long synopsis</li>
          <li>Director statement</li>
          <li>Director bio and resume highlights</li>
          <li>Stills and poster assets</li>
          <li>Festival submission notes</li>
        </ul>
      </section>

      <section class="section" id="festival">
        <h2>Festival + Release Status</h2>
        <p><strong>Premiere status:</strong> Not yet announced.</p>
        <p><strong>Release note:</strong> Screeners provided upon request for festivals and qualified press.</p>
      </section>

      <section class="section" id="contact">
        <h2>Contact</h2>
        <p><strong>General:</strong> <a href="mailto:adam@directedbyadam.com">adam@directedbyadam.com</a></p>
        <p><strong>Website:</strong> <a href="https://directedbyadam.com">directedbyadam.com</a></p>
      </section>

      <footer>
        © 2026 Everything Is Fake. All rights reserved.
      </footer>
    </main>
  </body>
</html>`;

    return new Response(html, {
      headers: { "content-type": "text/html; charset=UTF-8" },
    });
  },
};
