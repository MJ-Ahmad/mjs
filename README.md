<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sitemap | MJSovereign</title>
    <meta name="description" content="Dynamic site map and project structure for the National Workforce Grid initiative." />
    <link rel="icon" href="favicon.svg" type="image/svg+xml" />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <header class="site-header">
      <div class="container nav-wrap">
        <a class="brand" href="index.html" aria-label="MJSovereign home">
          <span class="brand-mark">M</span>
          <span>MJSOVEREIGN</span>
        </a>

        <div class="nav-actions">
          <div class="lang-toggle" role="tablist" aria-label="Language selector">
            <button class="lang-btn active" data-lang="en">EN</button>
            <button class="lang-btn" data-lang="bn">BN</button>
          </div>
          <button class="nav-toggle" aria-label="Toggle navigation" aria-expanded="false"><span></span><span></span><span></span></button>
        </div>

        <nav class="main-nav" aria-label="Main navigation">
          <a href="index.html">Home</a>
          <a href="index.html#modules">Modules</a>
          <a href="index.html#map">Map</a>
          <a href="DGD/index.html">DGD</a>
          <a href="sitemap.html" class="active">Sitemap</a>
        </nav>
      </div>
    </header>

    <main>
      <section class="hero module-hero">
        <div class="container narrow">
          <p class="eyebrow">Site map</p>
          <h1>Infinite tree-based project visibility</h1>
          <p class="subtext">A clear, scalable navigation model for the national workforce and leadership framework.</p>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="tree-panel">
            <div class="tree-root">MJSovereign / National Workforce Grid</div>
            <ul class="tree-list">
              <li><span>Home</span>
                <ul>
                  <li><span>About</span></li>
                  <li><span>Modules</span>
                    <ul>
                      <li><span><a href="modules/executive-summary/index.html">Executive Summary Module</a></span></li>
                      <li><span><a href="modules/geographic-control-system/index.html">Geographic Control System</a></span></li>
                      <li><span><a href="modules/technology-validity-security/index.html">Technology Validity & Security</a></span></li>
                      <li><span><a href="modules/structure-analytics/index.html">Structure & Analytics</a></span></li>
                    </ul>
                  </li>
                  <li><span>System Map</span>
                    <ul>
                      <li><span>Leadership & Governance</span></li>
                      <li><span>Geo-Grid</span></li>
                      <li><span>Identity & DID</span></li>
                      <li><span>Analytics</span></li>
                    </ul>
                  </li>
                  <li><span>Launch</span></li>
                </ul>
              </li>
              <li><span>Project Infrastructure</span>
                <ul>
                  <li><span>National Workforce Grid</span></li>
                  <li><span>Responsible Leadership</span></li>
                  <li><span>Public Trust & Accountability</span></li>
                  <li><span>Technology & Security Architecture</span></li>
                </ul>
              </li>
              <li><span>Operations</span>
                <ul>
                  <li><span>Divisions</span></li>
                  <li><span>Districts</span></li>
                  <li><span>Police Stations</span></li>
                  <li><span>Unions</span></li>
                  <li><span>Wards</span></li>
                  <li><span>Neighborhoods</span></li>
                </ul>
              </li>
              <li><span>Governance & Data</span>
                <ul>
                  <li><span>DID</span></li>
                  <li><span>Smart Contracts</span></li>
                  <li><span>Role-based Access</span></li>
                  <li><span>Quorum Rules</span></li>
                  <li><span>AI Analytics</span></li>
                </ul>
              </li>
              <li><span>Access</span>
                <ul>
                  <li><span><a href="DGD/index.html">DGD Dashboard</a></span></li>
                  <li><span><a href="contact.html">Contact</a></span></li>
                  <li><span><a href="robots.txt">Robots</a></span></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="container footer-grid">
        <div>
          <a class="brand footer-brand" href="index.html"><span class="brand-mark">M</span><span>MJSOVEREIGN</span></a>
          <p>Ethical governance and digital empowerment for a transparent future.</p>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="index.html#modules">Modules</a></li>
            <li><a href="DGD/index.html">DGD</a></li>
          </ul>
        </div>
        <div>
          <h4>Resources</h4>
          <ul>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="robots.txt">Robots</a></li>
            <li><a href="sitemap.xml">XML Sitemap</a></li>
          </ul>
        </div>
        <div>
          <h4>Connect</h4>
          <ul>
            <li><a href="mailto:hello@mjsov.com">hello@mjsov.com</a></li>
            <li><a href="https://github.com/MJ-Ahmad">GitHub</a></li>
            <li><a href="https://MJ-Ahmad.github.io/mjs/">Live site</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom container">
        <span>© <span id="year"></span> MJSovereign</span>
      </div>
    </footer>

    <script src="js/i18n.js"></script>
    <script src="js/script.js"></script>
  </body>
</html>
