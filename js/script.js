@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

:root {
  --bg: #071521;
  --bg-soft: #0d1c2d;
  --panel: rgba(14, 27, 39, 0.72);
  --panel-strong: #0e2135;
  --text: #edf7ff;
  --muted: #a9c3db;
  --line: rgba(168, 202, 255, 0.13);
  --blue: #67d8ff;
  --indigo: #7c8cff;
  --emerald: #32d6a3;
  --gold: #f8d66d;
  --rose: #ff8ea8;
  --shadow: rgba(6, 16, 27, 0.55);
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  font-family: 'Inter', Arial, sans-serif;
  background:
    radial-gradient(circle at top left, rgba(124, 140, 255, 0.18), transparent 28%),
    radial-gradient(circle at bottom right, rgba(50, 214, 163, 0.14), transparent 22%),
    var(--bg);
  color: var(--text);
  line-height: 1.6;
}
img { max-width: 100%; display: block; }
p, ul, li, h1, h2, h3, h4 { margin-top: 0; }

a { color: inherit; text-decoration: none; }
button { font: inherit; cursor: pointer; }

.site-header {
  position: sticky;
  top: 0;
  z-index: 30;
  backdrop-filter: blur(18px);
  background: rgba(7, 21, 33, 0.8);
  border-bottom: 1px solid var(--line);
}

.container {
  width: min(1200px, calc(100% - 32px));
  margin: 0 auto;
}

.nav-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 78px;
  gap: 18px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-weight: 800;
  letter-spacing: 0.12em;
  font-size: 0.95rem;
}

.brand-img {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  box-shadow: 0 12px 22px rgba(124, 140, 255, 0.2);
}

.brand-text {
  font-weight: 800;
  letter-spacing: 0.12em;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.lang-toggle {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px;
  border-radius: 999px;
  border: 1px solid var(--line);
  background: rgba(255,255,255,0.03);
}

.lang-btn {
  border: 0;
  background: transparent;
  color: var(--muted);
  border-radius: 999px;
  padding: 0.45rem 0.8rem;
  font-weight: 700;
}

.lang-btn.active {
  background: linear-gradient(135deg, var(--indigo), var(--emerald));
  color: #081a21;
}

.main-nav {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 18px;
  color: var(--muted);
  font-size: 0.92rem;
}

.main-nav a:hover,
.main-nav a.active {
  color: var(--text);
}

.btn, .button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.82rem 1.4rem;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--indigo), var(--emerald));
  color: #071821;
  font-weight: 800;
  border: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 16px 20px rgba(124, 140, 255, 0.18);
}

.button:hover, .btn:hover {
  transform: translateY(-1px);
}

.button-secondary {
  background: rgba(255,255,255,0.03);
  border: 1px solid var(--line);
  color: var(--text);
  box-shadow: none;
}

.btn-small { padding: 0.72rem 1rem; }

.nav-toggle {
  display: none;
  width: 46px;
  height: 46px;
  border-radius: 12px;
  border: 1px solid var(--line);
  background: rgba(255,255,255,0.03);
  padding: 10px 8px;
}

.nav-toggle span {
  display: block;
  width: 100%;
  height: 2px;
  background: var(--text);
  border-radius: 4px;
  margin: 5px 0;
}

.hero {
  padding: 76px 0 42px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  align-items: center;
  gap: 40px;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 0.7rem 1rem;
  border-radius: 999px;
  background: rgba(124, 140, 255, 0.12);
  border: 1px solid rgba(124, 140, 255, 0.4);
  color: #dfe9ff;
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
}

.hero-copy h1 {
  margin: 22px 0 18px;
  font-size: clamp(2.8rem, 5vw, 5rem);
  line-height: 0.96;
  letter-spacing: -0.06em;
}

.highlight {
  display: block;
  background: linear-gradient(90deg, #dfeeff, #7ad7ff, #93f0c6);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.quote {
  margin: 0;
  font-size: 1.12rem;
  color: #e8f2ff;
}

.subtext {
  margin-top: 18px;
  max-width: 640px;
  color: var(--muted);
  font-size: 1.04rem;
}

.cta-row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 30px;
}

.social-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 26px;
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.72rem 0.92rem;
  border-radius: 999px;
  border: 1px solid var(--line);
  background: rgba(255,255,255,0.02);
  color: var(--text);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(110px, 1fr));
  gap: 14px;
  margin-top: 32px;
  max-width: 620px;
}

.stat-card {
  padding: 18px 14px;
  border-radius: 18px;
  border: 1px solid var(--line);
  background: rgba(255,255,255,0.03);
  text-align: center;
  box-shadow: 0 14px 28px rgba(0,0,0,0.12);
}

.stat-card strong {
  display: block;
  margin-bottom: 8px;
  font-size: 1.8rem;
}

.stat-card span {
  color: var(--muted);
  font-size: 0.74rem;
}

.hero-panel {
  display: flex;
  justify-content: center;
}

.panel-box {
  width: min(100%, 470px);
  padding: 22px;
  border-radius: 28px;
  border: 1px solid rgba(255,255,255,0.12);
  background: rgba(255,255,255,0.04);
  box-shadow: 0 30px 60px rgba(6, 16, 27, 0.5);
}

.panel-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  font-size: 0.7rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #c0d6f9;
  margin-bottom: 16px;
}

.status {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0.38rem 0.7rem;
  border-radius: 999px;
  background: rgba(50, 214, 163, 0.12);
  border: 1px solid rgba(50, 214, 163, 0.42);
  color: #bbeee0;
  letter-spacing: 0;
  text-transform: none;
}

.status i {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--emerald);
}

.panel-list {
  display: grid;
  gap: 12px;
}

.panel-item {
  display: grid;
  grid-template-columns: 42px 1fr auto;
  align-items: center;
  gap: 12px;
  padding: 14px 12px;
  border-radius: 16px;
  background: rgba(255,255,255,0.03);
  border: 1px solid var(--line);
}

.icon {
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: rgba(124, 140, 255, 0.16);
  color: #e7efff;
  font-weight: 700;
}

.panel-item span {
  font-weight: 700;
}

.panel-item small {
  color: #9ce8d0;
  font-size: 0.7rem;
}

.panel-footer {
  margin-top: 18px;
  padding: 18px 14px 6px;
  border-radius: 18px;
  background: rgba(50, 214, 163, 0.08);
  border: 1px solid rgba(50, 214, 163, 0.2);
}

.panel-footer > span {
  display: block;
  margin-bottom: 12px;
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #c7fde7;
}

.mini-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  text-align: center;
}

.mini-stats strong {
  display: block;
  font-size: 1.4rem;
}

.mini-stats small {
  color: var(--muted);
}

.section {
  padding: 100px 0;
}

.section.alt {
  background: rgba(12, 22, 31, 0.78);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.eyebrow {
  margin: 0 0 14px;
  font-size: 0.74rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #c6d8ff;
  font-weight: 800;
}

.eyebrow.green { color: #a7f3d0; }
.eyebrow.cyan { color: #a5f3fc; }
.eyebrow.yellow { color: #fde68a; }

.section h2 {
  margin: 0 0 30px;
  font-size: clamp(2.1rem, 4vw, 3.5rem);
  line-height: 1.08;
  letter-spacing: -0.05em;
  max-width: 920px;
}

.two-column-layout {
  display: grid;
  grid-template-columns: 1.25fr 0.75fr;
  gap: 22px;
}

.info-panel {
  padding: 28px;
  border-radius: 26px;
  border: 1px solid var(--line);
  background: rgba(255,255,255,0.03);
}

.info-panel p {
  color: var(--muted);
  font-size: 1.03rem;
}

.accent-panel {
  background: linear-gradient(180deg, rgba(124,140,255,0.08), rgba(11,18,32,0.7));
}

.accent-panel h3 {
  margin-bottom: 12px;
}

.check-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 12px;
}

.check-list li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  color: var(--muted);
}

.check-list li::before {
  content: "✓";
  color: var(--emerald);
  font-weight: 800;
}

.card-grid {
  display: grid;
  gap: 22px;
}

.four-col {
  grid-template-columns: repeat(4, minmax(220px, 1fr));
}

.module-card {
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 24px 22px;
  border-radius: 24px;
  border: 1px solid var(--line);
  background: rgba(255,255,255,0.03);
  box-shadow: 0 12px 26px rgba(0,0,0,0.10);
}

.module-tag {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--indigo), var(--emerald));
  color: #091a24;
  font-weight: 800;
}

.module-card h3 {
  margin: 0;
  font-size: 1.35rem;
}

.module-card p,
.module-card li {
  color: var(--muted);
}

.module-card ul {
  margin: 0;
  padding-left: 18px;
  display: grid;
  gap: 8px;
}

.module-card a {
  margin-top: auto;
  font-weight: 700;
  color: #b6d8ff;
}

.tree-panel {
  padding: 28px;
  border-radius: 28px;
  border: 1px solid var(--line);
  background: rgba(255,255,255,0.03);
  overflow-x: auto;
}

.tree-root {
  display: inline-block;
  padding: 0.8rem 1.2rem;
  border-radius: 999px;
  background: linear-gradient(135deg, rgba(124,140,255,0.25), rgba(50,214,163,0.12));
  border: 1px solid var(--line);
  font-weight: 800;
  margin-bottom: 18px;
}

.tree-list,
.tree-list ul {
  list-style: none;
  margin: 0;
  padding-left: 14px;
}

.tree-list > li {
  position: relative;
  padding: 0 0 14px 10px;
}

.tree-list > li::before,
.tree-list ul > li::before {
  content: "";
  position: absolute;
  left: -12px;
  top: 0;
  bottom: 0;
  border-left: 1px solid rgba(160, 191, 240, 0.25);
}

.tree-list ul {
  margin-top: 8px;
  padding-left: 18px;
}

.tree-list li span {
  display: inline-block;
  padding: 0.5rem 0.7rem;
  border-radius: 12px;
  background: rgba(255,255,255,0.02);
  border: 1px solid var(--line);
  color: #edf5ff;
  margin-top: 6px;
}

.highlight-band {
  background: rgba(13, 25, 35, 0.86);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.impact-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 30px;
  align-items: center;
}

.impact-list {
  display: grid;
  gap: 18px;
}

.impact-item {
  display: grid;
  grid-template-columns: 70px 1fr;
  gap: 18px;
  align-items: center;
  padding: 18px 20px;
  border-radius: 18px;
  background: rgba(255,255,255,0.03);
  border: 1px solid var(--line);
}

.impact-item strong {
  display: grid;
  place-items: center;
  width: 52px;
  height: 52px;
  border-radius: 16px;
  background: linear-gradient(135deg, var(--gold), rgba(248,214,109,0.2));
  color: #1a1f1d;
  font-weight: 900;
}

.impact-item span {
  color: var(--muted);
}

.cta-band {
  padding: 24px 0 90px;
}

.cta-band-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 28px 30px;
  border-radius: 28px;
  border: 1px solid var(--line);
  background: linear-gradient(135deg, rgba(124,140,255,0.12), rgba(50,214,163,0.08));
}

.cta-band h2 {
  margin: 0;
  font-size: clamp(2rem, 3vw, 2.8rem);
  letter-spacing: -0.05em;
}

.site-footer {
  border-top: 1px solid var(--line);
  background: rgba(8, 15, 23, 0.94);
  padding-top: 30px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.3fr 1fr 1fr 1fr;
  gap: 28px;
  padding-bottom: 18px;
}

.site-footer p,
.site-footer li,
.site-footer a {
  color: var(--muted);
}

.site-footer h4 {
  margin-bottom: 14px;
  color: var(--text);
}

.site-footer ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 10px;
}

.footer-bottom {
  border-top: 1px solid var(--line);
  padding: 18px 0 26px;
  color: var(--muted);
}

.splash-overlay {
  position: fixed;
  inset: 0;
  display: grid;
  place-items: center;
  background: linear-gradient(180deg, rgba(7,21,33,0.98), rgba(7,21,33,0.92));
  z-index: 80;
  transition: opacity 280ms ease, visibility 280ms ease;
}

.splash-overlay.hidden {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}

.splash-inner {
  text-align: center;
  color: var(--muted);
}

.splash-inner img {
  width: min(420px, 78%);
  height: auto;
  display: block;
  margin: 0 auto 18px;
}

.splash-loading {
  font-weight: 700;
  color: #cfefff;
  opacity: 0.9;
}

@media (max-width: 980px) {
  .hero-grid,
  .two-column-layout,
  .impact-grid,
  .four-col {
    grid-template-columns: 1fr 1fr;
  }

  .hero-grid,
  .impact-grid,
  .two-column-layout {
    grid-template-columns: 1fr;
  }

  .cta-band-inner {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 760px) {
  .nav-wrap {
    position: relative;
  }

  .nav-toggle {
    display: block;
  }

  .main-nav {
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    right: 0;
    display: none;
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
    padding: 14px;
    border-radius: 18px;
    border: 1px solid var(--line);
    background: rgba(7, 21, 33, 0.97);
    box-shadow: 0 24px 40px rgba(0, 0, 0, 0.22);
  }

  .main-nav.is-open {
    display: flex;
  }

  .main-nav a {
    width: 100%;
    padding: 0.7rem 0.8rem;
    border-radius: 12px;
  }

  .stats-grid,
  .four-col,
  .footer-grid {
    grid-template-columns: 1fr;
  }

  .cta-row {
    flex-direction: column;
    align-items: stretch;
  }

  .button,
  .btn {
    width: 100%;
  }
}

@media (max-width: 640px) {
  .hero {
    padding-top: 54px;
  }

  .section {
    padding: 72px 0;
  }

  .brand {
    letter-spacing: 0.08em;
    font-size: 0.8rem;
  }
}
