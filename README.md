# MJSovereign

A responsive static website for the MJSovereign governance and ethical finance initiative. The project is designed to work across desktop, tablet, and mobile devices and includes a protected General Dashboard (DGD) for operational control and planning.

## Project structure

- `index.html` — main landing page
- `about.html` — project overview
- `governance.html` — governance model
- `roadmap.html` — strategic roadmap
- `contact.html` — contact form
- `css/style.css` — shared site styling
- `js/script.js` — interactive behaviors
- `DGD/` — protected general dashboard
- `mjs.json` — project metadata and dashboard configuration

## Features

- Mobile-first responsive design
- Keyboard-friendly navigation and accessible layout
- Static site deployment friendly
- Secure-style password gate for DGD access
- Strategic roadmap, timeline, milestones, and task tracker

## Local development

From the project root, you can run a lightweight local server:

```bash
python -m http.server 8000
```

Then open:

- http://localhost:8000
- http://localhost:8000/DGD/index.html

## DGD access

The protected dashboard is gated with the password:

```text
23542
```

## Deployment

This project can be published to GitHub Pages, Netlify, Vercel, or any static host. Ensure the root folder is served as the website root.

## License

This project is intended for governance, research, and ethical innovation operations. Use according to your internal policies and legal framework.
